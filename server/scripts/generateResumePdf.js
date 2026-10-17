import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import PDFDocument from 'pdfkit';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate Professional, Clean, Accessible 2-Page Executive PDF Resume for Madhav Garg
 *
 * Strict Quality Architecture:
 * - Page 1: Header, Verified Profile, Education, Technical Competencies, Project Portfolio (4 projects).
 * - Page 2: Internship Experience (Infosys Springboard & India Space Academy), Leadership & Cultural Accolades, Selected Certifications & Licensures.
 * - Dynamic line-wrapping and bullet indentation: no clipped text or awkward line breaks.
 * - WinAnsi / Unicode safe punctuation (en-dashes, em-dashes, bullets).
 * - Interactive clickable link annotations (email, LinkedIn, GitHub, demo/repos, Credly badge).
 * - Exact 2-page budget: each page has plenty of breathing room, zero awkward mid-section page breaks, and running footers ("Page 1 of 2", "Page 2 of 2").
 */
export function generateResume(outputPath) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'LETTER',
      margins: { top: 36, bottom: 40, left: 45, right: 45 },
      bufferPages: true,
      autoFirstPage: true,
      info: {
        Title: 'Madhav Garg — Curriculum Vitae',
        Author: 'Madhav Garg',
        Subject: 'B.Tech Computer Science and Engineering Student Resume',
        Keywords: 'Full Stack, React, Node.js, FastAPI, Python, Machine Learning, DBMS, Geospatial, Red Hat',
        Creator: 'Madhav Garg Portfolio REST Engine',
      },
    });

    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    const contentWidth = 612 - 90; // 522 pt printable width
    const leftMargin = 45;

    // Refined Editorial Color Palette
    const colors = {
      primary: '#15171C',     // Deep Obsidian / Charcoal for headings
      secondary: '#9E782F',   // Champagne Gold accent for highlights & links
      body: '#26292E',        // High contrast charcoal for body readability
      muted: '#525861',       // Secondary labels and metadata
      lightMuted: '#717882',  // Footnote / sub-details
      rule: '#D4BC82',        // Accent divider rule
    };

    // Draw Section Header with Accent Rule
    function drawSectionHeader(title) {
      doc.moveDown(0.4);
      const headerY = doc.y;

      doc
        .font('Helvetica-Bold')
        .fontSize(10)
        .fillColor(colors.primary)
        .text(title.toUpperCase(), leftMargin, headerY, { characterSpacing: 1 });

      const ruleY = headerY + 13;
      doc
        .strokeColor(colors.rule)
        .lineWidth(0.75)
        .moveTo(leftMargin, ruleY)
        .lineTo(leftMargin + contentWidth, ruleY)
        .stroke();

      doc.y = ruleY + 5;
    }

    // Render bullet item with reliable indentation and text wrapping
    function drawBullet(leadText, normalText, extraAction = null) {
      const bulletIndent = 12;
      const textWidth = contentWidth - bulletIndent;
      const bulletY = doc.y;

      // Draw subtle champagne bullet glyph
      doc
        .font('Helvetica-Bold')
        .fontSize(8.5)
        .fillColor(colors.secondary)
        .text('•', leftMargin + 2, bulletY, { width: 10, lineGap: 1 });

      // Draw bold lead-in followed by wrapped regular body text
      doc
        .font('Helvetica-Bold')
        .fontSize(8.5)
        .fillColor(colors.body)
        .text(leadText ? leadText + ' ' : '', leftMargin + bulletIndent, bulletY, {
          width: textWidth,
          continued: Boolean(normalText),
          lineGap: 1.3,
        });

      if (normalText) {
        doc
          .font('Helvetica')
          .fontSize(8.5)
          .fillColor(colors.body)
          .text(normalText, {
            width: textWidth,
            lineGap: 1.3,
          });
      }

      if (extraAction && typeof extraAction === 'function') {
        extraAction();
      }

      doc.moveDown(0.15);
    }

    // ==========================================
    // PAGE 1: HEADER, EDUCATION, SKILLS, PROJECTS
    // ==========================================

    // Candidate Name
    doc
      .font('Helvetica-Bold')
      .fontSize(20)
      .fillColor(colors.primary)
      .text('MADHAV GARG', leftMargin, 36, { characterSpacing: 0.5 });

    // Headline
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(colors.secondary)
      .text('Third-year B.Tech Computer Science and Engineering Student', { characterSpacing: 0.2 });

    doc.moveDown(0.15);

    // University & Location
    doc
      .font('Helvetica')
      .fontSize(8.5)
      .fillColor(colors.muted)
      .text('JK Lakshmipat University, Jaipur, Rajasthan, India  |  Location: Jaipur, India', { lineGap: 1.5 });

    // Interactive Clickable Contact Line
    const contactLineY = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(8.5)
      .fillColor(colors.primary)
      .text('Email: ', leftMargin, contactLineY, { continued: true })
      .font('Helvetica')
      .fillColor(colors.secondary)
      .text('madhavgarg.agra@gmail.com', { link: 'mailto:madhavgarg.agra@gmail.com', continued: true })
      .fillColor(colors.muted)
      .text('   |   ', { continued: true })
      .font('Helvetica-Bold')
      .fillColor(colors.primary)
      .text('LinkedIn: ', { continued: true })
      .font('Helvetica')
      .fillColor(colors.secondary)
      .text('linkedin.com/in/madhav-garg-agra', { link: 'https://www.linkedin.com/in/madhav-garg-agra/', continued: true })
      .fillColor(colors.muted)
      .text('   |   ', { continued: true })
      .font('Helvetica-Bold')
      .fillColor(colors.primary)
      .text('GitHub: ', { continued: true })
      .font('Helvetica')
      .fillColor(colors.secondary)
      .text('github.com/madhavgargagra', { link: 'https://github.com/madhavgargagra' });

    doc.moveDown(0.4);

    // Verified Introductory Summary
    doc
      .font('Helvetica')
      .fontSize(8.5)
      .fillColor(colors.body)
      .text(
        'Computer Science and Engineering student at JK Lakshmipat University, Jaipur, interested in full-stack development, AI, software engineering and emerging technologies. Experienced in building practical applications, exploring new tools, solving problems and collaborating with teams. Developed leadership and coordination experience through university projects, internships and cultural initiatives.',
        { width: contentWidth, lineGap: 1.5 }
      );

    // Section 1: Education
    drawSectionHeader('Education');

    const eduY = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(colors.primary)
      .text('JK Lakshmipat University (JKLU)', leftMargin, eduY);

    doc
      .font('Helvetica-Bold')
      .fontSize(8.5)
      .fillColor(colors.secondary)
      .text('2024 — 2028 (Expected)', leftMargin, eduY, { width: contentWidth, align: 'right' });

    doc
      .font('Helvetica-Bold')
      .fontSize(8.5)
      .fillColor(colors.body)
      .text('Bachelor of Technology in Computer Science and Engineering', leftMargin, doc.y + 1);

    doc
      .font('Helvetica')
      .fontSize(8.5)
      .fillColor(colors.muted)
      .text('Current Status: 3rd Year (Semester 5)   |   Cumulative GPA (CGPA): 8.6 / 10.0   |   Jaipur, Rajasthan, India');

    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor(colors.muted)
      .text(
        'Relevant Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Full Stack Web Development, Operating Systems, Machine Learning Foundations, Computer Networks, Software Engineering',
        { width: contentWidth, lineGap: 1.2 }
      );

    // Section 2: Technical Competencies
    drawSectionHeader('Technical Skills');

    drawBullet('Languages & Core:', 'JavaScript (ES6+), Python, HTML5, CSS3, SQL, C/C++ fundamentals');
    drawBullet('Frontend Architecture:', 'React 19, React Router, Vite, Tailwind CSS v3, Framer Motion, Responsive UI/UX, Web Accessibility (A11y)');
    drawBullet('Backend & APIs:', 'Node.js, Express.js REST APIs, FastAPI (Python), JWT Authentication, CORS Security');
    drawBullet('Databases & ORMs:', 'MongoDB (Mongoose ODM), MySQL (Sequelize ORM), SQLite');
    drawBullet('Machine Learning & AI:', 'Scikit-learn (Isolation Forest, SVM, KNN, Logistic Regression), XGBoost, TensorFlow.js, MobileNet v2');
    drawBullet('Geospatial Analytics:', 'Google Earth Engine, QGIS, Sentinel-5P, MODIS, Landsat-8, Urban Heat Island (UHI) & Aerosol Analysis');
    drawBullet('Developer Tools & Systems:', 'Git, GitHub Actions CI, Docker containerization, Pytest, Postman, Linux CLI / Red Hat RH124');

    // Section 3: Project Portfolio (4 projects on Page 1)
    drawSectionHeader('Project Portfolio');

    // Project 1: EcoSort
    let p1Y = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(colors.primary)
      .text('EcoSort — Waste Sorting & Environmental Learning Platform', leftMargin, p1Y);

    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor(colors.secondary)
      .text('Open Source & Live Demo', leftMargin, p1Y, { width: contentWidth, align: 'right' });

    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor(colors.muted)
      .text('Stack: JavaScript, HTML5, CSS3, TensorFlow.js, MobileNet v2, PWA');

    drawBullet(
      'Browser AI Inference:',
      'Delivered client-side waste classification using TensorFlow.js and MobileNet v2 with camera/image upload and voice search.'
    );
    drawBullet(
      'Educational Features & PWA:',
      'Incorporated sorting game, recycling-myth quiz, carbon impact dashboard, and offline functionality via Service Workers.'
    );
    doc
      .font('Helvetica-Bold')
      .fontSize(8)
      .fillColor(colors.secondary)
      .text('  [GitHub Repository]  ', leftMargin + 12, doc.y, { link: 'https://github.com/madhavgargagra/ecosort', continued: true })
      .text('[Live Demo]', { link: 'https://madhavgargagra.github.io/ecosort/' });

    doc.moveDown(0.3);

    // Project 2: Lung Cancer Prediction
    let p2Y = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(colors.primary)
      .text('Lung Cancer Prediction & Web Application', leftMargin, p2Y);

    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor(colors.secondary)
      .text('Machine Learning Evaluation', leftMargin, p2Y, { width: contentWidth, align: 'right' });

    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor(colors.muted)
      .text('Stack: Python, Flask, XGBoost, Scikit-learn (SVM, KNN, Logistic Regression)');

    drawBullet(
      'Algorithm Comparison:',
      'Trained and evaluated four supervised models on clinical indicator datasets with model explanation and report generation.'
    );
    drawBullet(
      'Educational Scope:',
      'Educational machine-learning project exploring predictive models; not clinically validated or intended for medical diagnosis.'
    );
    doc
      .font('Helvetica-Bold')
      .fontSize(8)
      .fillColor(colors.secondary)
      .text('  [GitHub Repository]', leftMargin + 12, doc.y, { link: 'https://github.com/madhavgargagra/Lung-Cancer-Prediction-and-web-application' });

    doc.moveDown(0.3);

    // Project 3: AI-Powered Insider Threat Detection System
    let p3Y = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(colors.primary)
      .text('AI-Powered Insider Threat Detection System', leftMargin, p3Y);

    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor(colors.secondary)
      .text('Enterprise Security Analytics', leftMargin, p3Y, { width: contentWidth, align: 'right' });

    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor(colors.muted)
      .text('Stack: FastAPI, Next.js, React, SQLite, Scikit-learn (Isolation Forest), Docker, Pytest');

    drawBullet(
      'Security Analytics Architecture:',
      'Engineered multi-role enterprise security system evaluating 5-factor weighted risk models for anomalous employee activities.'
    );
    drawBullet(
      'Private Internship Project:',
      'Developed during Infosys Springboard internship program; access restricted to maintain enterprise confidentiality.'
    );

    doc.moveDown(0.3);

    // Project 4: Festival Event Management
    let p4Y = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(colors.primary)
      .text('Festival Event Management System', leftMargin, p4Y);

    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor(colors.secondary)
      .text('Full-Stack Relational Database', leftMargin, p4Y, { width: contentWidth, align: 'right' });

    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor(colors.muted)
      .text('Stack: React, Express.js REST API, MySQL, Sequelize ORM');

    drawBullet(
      'Relational Database Architecture:',
      'Engineered full-stack festival event management application backed by MySQL and Sequelize ORM modeling relational schemas and role-aware administrative workflows.'
    );
    doc
      .font('Helvetica-Bold')
      .fontSize(8)
      .fillColor(colors.secondary)
      .text('  [GitHub Repository]', leftMargin + 12, doc.y, { link: 'https://github.com/madhavgargagra/festival-event-management' });

    // ==========================================
    // PAGE 2: INTERNSHIPS, LEADERSHIP, CERTIFICATIONS
    // ==========================================
    doc.addPage();

    // Section 4: Internship Experience
    drawSectionHeader('Internship Experience');

    // Internship 1: Infosys Springboard
    let internAY = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(colors.primary)
      .text('Infosys Springboard', leftMargin, internAY);

    doc
      .font('Helvetica-Bold')
      .fontSize(8.5)
      .fillColor(colors.secondary)
      .text('July 2026 — October 2026', leftMargin, internAY, { width: contentWidth, align: 'right' });

    doc
      .font('Helvetica-Bold')
      .fontSize(8.5)
      .fillColor(colors.body)
      .text('Full-Stack Developer Intern  |  Project: AI-Powered Insider Threat Detection System  |  Remote');

    drawBullet(
      'Enterprise Backend:',
      'Architected decoupled FastAPI backend with role-based JWT authentication for 4 distinct SOC roles and SQLite database.'
    );
    drawBullet(
      'Machine Learning Anomaly Detection:',
      'Integrated Scikit-learn Isolation Forest unsupervised model with weighted five-factor risk scoring for employee behavior analytics.'
    );
    drawBullet(
      'Testing & DevOps:',
      'Implemented automated Pytest unit/integration test suites, Docker containerization, and GitHub CI workflow pipelines.'
    );
    drawBullet(
      'Project Scope & Notes:',
      'Project notes report simulated alert triage reduction from ~90 to 23 actionable incidents (project-reported metric; not an independently validated production deployment). Certificate awaited; repository is strictly private.'
    );

    doc.moveDown(0.4);

    // Internship 2: India Space Academy
    let internBY = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(colors.primary)
      .text('India Space Academy', leftMargin, internBY);

    doc
      .font('Helvetica-Bold')
      .fontSize(8.5)
      .fillColor(colors.secondary)
      .text('19 May 2026 — 2 July 2026', leftMargin, internBY, { width: contentWidth, align: 'right' });

    doc
      .font('Helvetica-Bold')
      .fontSize(8.5)
      .fillColor(colors.body)
      .text('Remote Sensing & GIS Intern  |  Summer Training Program (6-Week Completed)  |  Hybrid');

    drawBullet(
      'Urban Heat Island Analysis:',
      'Processed multi-spectral satellite datasets to map Land Surface Temperature (LST) and Built-up Density indexes across regional corridors.'
    );
    drawBullet(
      'Air Quality & Aerosol Mapping:',
      'Utilized Sentinel-5P and MODIS satellite data in Google Earth Engine and QGIS to analyze atmospheric aerosol patterns across the Taj Trapezium Zone (TTZ) and Delhi NCR.'
    );
    drawBullet(
      'Evaluation & Defense:',
      'Maintained official training logbooks, authored technical research documentation, and successfully defended findings during technical presentation and viva.'
    );

    // Section 5: Leadership & Campus Activities
    drawSectionHeader('Leadership, Cultural & Campus Accolades');

    drawBullet(
      'Chair, Student Drama Club (2025 — 2026):',
      'Led an active student theatrical society of 25+ members across scriptwriting, ensemble rehearsals, and campus stage productions.'
    );
    drawBullet(
      'Cultural Coordinator & Decor Volunteer:',
      'Contributed to venue decor, backstage logistics, and audio-visual preparation for Sabrang, JKLU’s annual cultural festival.'
    );
    drawBullet(
      'Athletic & Cultural Honors:',
      'Runner-up in University Football Championship; Second Position in Nukkad Natak (Street Play) competition at Sabrang Fest.'
    );
    drawBullet(
      'Campus Representation:',
      'Represented JKLU in inter-college drama competition at University Maharani College; participant in HackJKLU hackathon, Muqabala & Spardha.'
    );

    // Section 6: Selected Certifications & Licensures
    drawSectionHeader('Selected Certifications & Licensures');

    drawBullet(
      'Red Hat System Administration I (RH124 - RHA):',
      'Certificate of Attendance (15 April 2026, 40 credit hours). Covers Linux CLI, user management, and process control. ',
      () => {
        doc
          .font('Helvetica-Bold')
          .fontSize(8)
          .fillColor(colors.secondary)
          .text('  [View Official Credly Badge]', leftMargin + 12, doc.y, { link: 'https://www.credly.com/badges/d1dba5c4-2c37-467d-9f71-8638217ee398' });
      }
    );

    doc.moveDown(0.2);

    drawBullet(
      'Infosys Springboard Certified:',
      'Artificial Intelligence Primer (1 May 2026), Deep Learning for Developers (1 May 2026), Generative AI Unleashing (1 May 2026), Introduction to Data Science (1 May 2026), Agile Scrum in Practice (1 May 2026).'
    );
    drawBullet(
      'Additional Coursework:',
      'Database Management Systems (DBMS Part 1 & Part 2), Computer Vision 101, Introduction to OpenAI GPT Models, Prompt Engineering.'
    );

    // ==========================================
    // RUNNING FOOTERS ON EXACTLY 2 PAGES
    // ==========================================
    const range = doc.bufferedPageRange();
    for (let i = range.start; i < range.start + range.count; i++) {
      doc.switchToPage(i);
      // Temporarily set bottom margin to 0 to prevent automatic page insertion
      doc.page.margins.bottom = 0;

      // Bottom footer rule
      doc
        .strokeColor(colors.rule)
        .lineWidth(0.5)
        .moveTo(leftMargin, 752)
        .lineTo(leftMargin + contentWidth, 752)
        .stroke();

      // Running footer text
      doc
        .font('Helvetica')
        .fontSize(7.5)
        .fillColor(colors.lightMuted)
        .text(
          'Madhav Garg — B.Tech Computer Science & Engineering (JKLU)  |  Portfolio: madhav-portfolio-rpef.onrender.com',
          leftMargin,
          758,
          { width: contentWidth / 2, align: 'left', lineBreak: false }
        );

      doc
        .font('Helvetica-Bold')
        .fontSize(7.5)
        .fillColor(colors.secondary)
        .text(
          `Page ${i + 1} of ${range.count}`,
          leftMargin + contentWidth / 2,
          758,
          { width: contentWidth / 2, align: 'right', lineBreak: false }
        );
    }

    doc.end();

    stream.on('finish', () => {
      resolve({
        pageCount: range.count,
        outputPath,
      });
    });

    stream.on('error', (err) => {
      reject(err);
    });
  });
}

// CLI execution if invoked directly
const targetPath = process.argv[2] || path.join(__dirname, '../public/resumes/madhav-garg-resume.pdf');
generateResume(targetPath)
  .then((res) => {
    console.log(`Generated resume PDF: ${res.outputPath} (Exact pages: ${res.pageCount})`);
  })
  .catch((err) => {
    console.error('Failed to generate resume PDF:', err);
    process.exit(1);
  });
