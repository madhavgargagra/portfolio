import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  ExternalHyperlink,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from 'docx';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Generate a True, Valid Office Open XML (.docx) Resume Document for Madhav Garg
 *
 * Sourced strictly from verified academic, internship, and project records.
 * Uses real Word styles, semantic headings, proper paragraphs, bullet points,
 * and genuine clickable hyperlinks.
 */
export async function generateDocx(outputPath) {
  const primaryColor = '15171C';   // Deep Obsidian
  const accentColor = '9E782F';    // Champagne Gold
  const bodyColor = '26292E';      // High-contrast readable charcoal
  const mutedColor = '525861';     // Secondary labels
  const ruleColor = 'D4BC82';      // Accent rule

  // Helper for Section Heading with bottom border
  function createSectionHeading(title) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 240, after: 80 },
      border: {
        bottom: {
          color: ruleColor,
          space: 4,
          style: BorderStyle.SINGLE,
          size: 8,
        },
      },
      children: [
        new TextRun({
          text: title.toUpperCase(),
          bold: true,
          size: 20, // 10 pt
          color: primaryColor,
          font: 'Calibri',
          characterSpacing: 20,
        }),
      ],
    });
  }

  // Helper for bullet list item
  function createBulletItem(leadText, normalText, hyperlink = null) {
    const children = [
      new TextRun({
        text: '•  ',
        bold: true,
        size: 19, // 9.5 pt
        color: accentColor,
        font: 'Calibri',
      }),
      new TextRun({
        text: leadText ? leadText + ' ' : '',
        bold: true,
        size: 19, // 9.5 pt
        color: bodyColor,
        font: 'Calibri',
      }),
      new TextRun({
        text: normalText,
        size: 19, // 9.5 pt
        color: bodyColor,
        font: 'Calibri',
      }),
    ];

    if (hyperlink) {
      children.push(
        new TextRun({ text: '  ' }),
        new ExternalHyperlink({
          children: [
            new TextRun({
              text: hyperlink.text,
              size: 18,
              bold: true,
              color: accentColor,
              font: 'Calibri',
              underline: {},
            }),
          ],
          link: hyperlink.url,
        })
      );
    }

    return new Paragraph({
      spacing: { before: 40, after: 40, line: 260 },
      indent: { left: 240 },
      children,
    });
  }

  // Helper for entry header row (Title on left, Date on right)
  function createEntryHeader(title, subtitle, date, category = '') {
    const p1 = new Paragraph({
      spacing: { before: 120, after: 20 },
      children: [
        new TextRun({
          text: title,
          bold: true,
          size: 20, // 10 pt
          color: primaryColor,
          font: 'Calibri',
        }),
        new TextRun({
          text: date ? `   —   ${date}` : '',
          bold: true,
          size: 18, // 9 pt
          color: accentColor,
          font: 'Calibri',
        }),
      ],
    });

    const p2 = new Paragraph({
      spacing: { before: 0, after: 60 },
      children: [
        new TextRun({
          text: subtitle,
          bold: true,
          size: 18,
          color: bodyColor,
          font: 'Calibri',
        }),
        new TextRun({
          text: category ? `  |  ${category}` : '',
          size: 17,
          color: mutedColor,
          font: 'Calibri',
        }),
      ],
    });

    return [p1, p2];
  }

  const doc = new Document({
    creator: 'Madhav Garg Portfolio Engine',
    title: 'Madhav Garg — Curriculum Vitae',
    description: 'B.Tech Computer Science and Engineering Student Resume',
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            color: bodyColor,
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 720,    // 0.5 in
              bottom: 720, // 0.5 in
              left: 720,   // 0.5 in
              right: 720,  // 0.5 in
            },
          },
        },
        children: [
          // 1. Header Name
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 0, after: 40 },
            children: [
              new TextRun({
                text: 'MADHAV GARG',
                bold: true,
                size: 36, // 18 pt
                color: primaryColor,
                font: 'Calibri',
                characterSpacing: 30,
              }),
            ],
          }),

          // Headline
          new Paragraph({
            spacing: { before: 0, after: 40 },
            children: [
              new TextRun({
                text: 'Third-year B.Tech Computer Science and Engineering Student',
                bold: true,
                size: 21, // 10.5 pt
                color: accentColor,
                font: 'Calibri',
              }),
            ],
          }),

          // University & Location
          new Paragraph({
            spacing: { before: 0, after: 40 },
            children: [
              new TextRun({
                text: 'JK Lakshmipat University, Jaipur, Rajasthan, India  |  Location: Jaipur, India',
                size: 18,
                color: mutedColor,
                font: 'Calibri',
              }),
            ],
          }),

          // Contact Links Line with Clickable Hyperlinks
          new Paragraph({
            spacing: { before: 0, after: 120 },
            children: [
              new TextRun({ text: 'Email: ', bold: true, size: 18, color: primaryColor }),
              new ExternalHyperlink({
                children: [
                  new TextRun({ text: 'madhavgarg.agra@gmail.com', size: 18, color: accentColor, underline: {} }),
                ],
                link: 'mailto:madhavgarg.agra@gmail.com',
              }),
              new TextRun({ text: '   |   LinkedIn: ', bold: true, size: 18, color: primaryColor }),
              new ExternalHyperlink({
                children: [
                  new TextRun({ text: 'linkedin.com/in/madhav-garg-agra', size: 18, color: accentColor, underline: {} }),
                ],
                link: 'https://www.linkedin.com/in/madhav-garg-agra/',
              }),
              new TextRun({ text: '   |   GitHub: ', bold: true, size: 18, color: primaryColor }),
              new ExternalHyperlink({
                children: [
                  new TextRun({ text: 'github.com/madhavgargagra', size: 18, color: accentColor, underline: {} }),
                ],
                link: 'https://github.com/madhavgargagra',
              }),
            ],
          }),

          // Professional Summary
          new Paragraph({
            spacing: { before: 0, after: 160, line: 280 },
            children: [
              new TextRun({
                text:
                  'Computer Science and Engineering student at JK Lakshmipat University, Jaipur, interested in full-stack development, AI, software engineering and emerging technologies. Experienced in building practical applications, exploring new tools, solving problems and collaborating with teams. Developed leadership and coordination experience through university projects, internships and cultural initiatives.',
                size: 19,
                color: bodyColor,
                font: 'Calibri',
              }),
            ],
          }),

          // 2. Education
          createSectionHeading('Education'),
          ...createEntryHeader(
            'JK Lakshmipat University (JKLU)',
            'Bachelor of Technology in Computer Science and Engineering',
            '2024 — 2028 (Expected)',
            'Jaipur, Rajasthan, India'
          ),
          new Paragraph({
            spacing: { before: 0, after: 40 },
            indent: { left: 160 },
            children: [
              new TextRun({
                text: 'Current Status: 3rd Year (Semester 5)   |   Cumulative GPA (CGPA): 8.6 / 10.0',
                bold: true,
                size: 18,
                color: bodyColor,
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 120, line: 260 },
            indent: { left: 160 },
            children: [
              new TextRun({
                text:
                  'Relevant Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Full Stack Web Development, Operating Systems, Machine Learning Foundations, Computer Networks, Software Engineering Principles',
                size: 17,
                color: mutedColor,
              }),
            ],
          }),

          // 3. Technical Skills
          createSectionHeading('Technical Skills'),
          createBulletItem('Languages & Core:', 'JavaScript (ES6+), Python, HTML5, CSS3, SQL, C/C++ fundamentals'),
          createBulletItem('Frontend Architecture:', 'React 19, React Router, Vite, Tailwind CSS v3, Framer Motion, Responsive UI/UX, Web Accessibility (A11y)'),
          createBulletItem('Backend & APIs:', 'Node.js, Express.js REST APIs, FastAPI (Python), JWT Authentication, CORS Security Policies'),
          createBulletItem('Databases & ORMs:', 'MongoDB (Mongoose ODM), MySQL (Sequelize ORM), SQLite'),
          createBulletItem('Machine Learning & AI:', 'Scikit-learn (Isolation Forest, SVM, KNN, Logistic Regression), XGBoost, TensorFlow.js, MobileNet v2'),
          createBulletItem('Geospatial Analytics:', 'Google Earth Engine, QGIS, Sentinel-5P, MODIS, Landsat-8, Urban Heat Island (UHI) & Aerosol Pattern Analysis'),
          createBulletItem('Developer Tools & Systems:', 'Git, GitHub Actions CI, Docker containerization, Pytest, Postman, Linux CLI / Red Hat RH124'),

          // 4. Project Portfolio
          createSectionHeading('Project Portfolio'),

          // EcoSort
          ...createEntryHeader(
            'EcoSort — Waste Sorting & Environmental Learning Platform',
            'Stack: JavaScript, HTML5, CSS3, TensorFlow.js, MobileNet v2, PWA',
            'Open Source & Live Demo'
          ),
          createBulletItem('Browser AI Inference:', 'Delivered client-side waste classification using TensorFlow.js and MobileNet v2 with real-time camera/image upload and voice search.'),
          createBulletItem('Educational Features & PWA:', 'Incorporated gamified sorting practice, recycling-myth quiz, simulated carbon impact dashboard, and offline functionality via Service Workers.'),
          new Paragraph({
            spacing: { before: 20, after: 100 },
            indent: { left: 240 },
            children: [
              new ExternalHyperlink({
                children: [new TextRun({ text: '[GitHub Repository]', bold: true, size: 18, color: accentColor, underline: {} })],
                link: 'https://github.com/madhavgargagra/ecosort',
              }),
              new TextRun({ text: '   ' }),
              new ExternalHyperlink({
                children: [new TextRun({ text: '[Live Demo]', bold: true, size: 18, color: accentColor, underline: {} })],
                link: 'https://madhavgargagra.github.io/ecosort/',
              }),
            ],
          }),

          // Lung Cancer Prediction
          ...createEntryHeader(
            'Lung Cancer Prediction & Web Application',
            'Stack: Python, Flask, XGBoost, Scikit-learn (SVM, KNN, Logistic Regression)',
            'Machine Learning Evaluation'
          ),
          createBulletItem('Algorithm Comparison:', 'Trained and evaluated four supervised models on clinical indicator datasets with model explanation and report generation.'),
          createBulletItem('Educational Scope:', 'Educational machine-learning project exploring predictive models; not clinically validated or intended for medical diagnosis.'),
          new Paragraph({
            spacing: { before: 20, after: 100 },
            indent: { left: 240 },
            children: [
              new ExternalHyperlink({
                children: [new TextRun({ text: '[GitHub Repository]', bold: true, size: 18, color: accentColor, underline: {} })],
                link: 'https://github.com/madhavgargagra/Lung-Cancer-Prediction-and-web-application',
              }),
            ],
          }),

          // Insider Threat Detection
          ...createEntryHeader(
            'AI-Powered Insider Threat Detection System',
            'Stack: FastAPI, Next.js, React, SQLite, Scikit-learn (Isolation Forest), Docker, Pytest',
            'Enterprise Security Analytics'
          ),
          createBulletItem('Security Analytics Architecture:', 'Engineered multi-role enterprise security system evaluating 5-factor weighted risk models for anomalous employee activities.'),
          createBulletItem('Private Internship Project:', 'Developed during Infosys Springboard internship program; access restricted to maintain enterprise confidentiality.'),

          // Festival Event Management
          ...createEntryHeader(
            'Festival Event Management System',
            'Stack: React, Express.js REST API, MySQL, Sequelize ORM',
            'Full-Stack Relational Database'
          ),
          createBulletItem('Relational Database Architecture:', 'Engineered full-stack festival event management application backed by MySQL and Sequelize ORM modeling relational schemas and role-aware administrative workflows.'),
          new Paragraph({
            spacing: { before: 20, after: 100 },
            indent: { left: 240 },
            children: [
              new ExternalHyperlink({
                children: [new TextRun({ text: '[GitHub Repository]', bold: true, size: 18, color: accentColor, underline: {} })],
                link: 'https://github.com/madhavgargagra/festival-event-management',
              }),
            ],
          }),

          // 5. Internship Experience
          createSectionHeading('Internship Experience'),

          // Infosys Springboard
          ...createEntryHeader(
            'Infosys Springboard',
            'Full-Stack Developer Intern  |  Project: AI-Powered Insider Threat Detection System',
            'July 2026 — October 2026',
            'Remote'
          ),
          createBulletItem('Enterprise Backend:', 'Architected decoupled FastAPI backend with role-based JWT authentication for 4 distinct SOC roles and SQLite database.'),
          createBulletItem('Machine Learning Anomaly Detection:', 'Integrated Scikit-learn Isolation Forest unsupervised model with weighted five-factor risk scoring for employee behavior analytics.'),
          createBulletItem('Testing & DevOps:', 'Implemented automated Pytest unit/integration test suites, Docker containerization, and GitHub CI workflow pipelines.'),
          createBulletItem('Project Scope & Notes:', 'Project notes report simulated alert triage reduction from ~90 to 23 actionable incidents (project-reported metric; not an independently validated production deployment). Certificate awaited; repository is strictly private.'),

          // India Space Academy
          ...createEntryHeader(
            'India Space Academy',
            'Remote Sensing & GIS Intern  |  Summer Training Program (6-Week Completed)',
            '19 May 2026 — 2 July 2026',
            'Hybrid'
          ),
          createBulletItem('Urban Heat Island Analysis:', 'Processed multi-spectral satellite datasets to map Land Surface Temperature (LST) and Built-up Density indexes across regional corridors.'),
          createBulletItem('Air Quality & Aerosol Mapping:', 'Utilized Sentinel-5P and MODIS satellite data in Google Earth Engine and QGIS to analyze atmospheric aerosol patterns across the Taj Trapezium Zone (TTZ) and Delhi NCR.'),
          createBulletItem('Evaluation & Defense:', 'Maintained official training logbooks, authored technical research documentation, and successfully defended findings during technical presentation and viva.'),

          // 6. Leadership & Cultural Accolades
          createSectionHeading('Leadership, Cultural & Campus Accolades'),
          createBulletItem('Chair, Student Drama Club (2025 — 2026):', 'Led an active student theatrical society of 25+ members across scriptwriting, ensemble rehearsals, and campus stage productions.'),
          createBulletItem('Cultural Coordinator & Decor Volunteer:', 'Contributed to venue decor, backstage logistics, and audio-visual preparation for Sabrang, JKLU’s annual cultural festival.'),
          createBulletItem('Athletic & Cultural Honors:', 'Runner-up in University Football Championship; Second Position in Nukkad Natak (Street Play) competition at Sabrang Fest.'),
          createBulletItem('Campus Representation:', 'Represented JKLU in inter-college drama competition at University Maharani College; participant in HackJKLU hackathon, Muqabala & Spardha.'),

          // 7. Certifications & Credentials
          createSectionHeading('Selected Certifications & Licensures'),
          createBulletItem(
            'Red Hat System Administration I (RH124 - RHA):',
            'Certificate of Attendance (15 April 2026, 40 credit hours). Covers Linux CLI, user management, and process control.',
            {
              text: '[View Official Credly Badge]',
              url: 'https://www.credly.com/badges/d1dba5c4-2c37-467d-9f71-8638217ee398',
            }
          ),
          createBulletItem(
            'Infosys Springboard Certified:',
            'Artificial Intelligence Primer (1 May 2026), Deep Learning for Developers (1 May 2026), Generative AI Unleashing (1 May 2026), Introduction to Data Science (1 May 2026), Agile Scrum in Practice (1 May 2026).'
          ),
          createBulletItem(
            'Additional Coursework:',
            'Database Management Systems (DBMS Part 1 & Part 2), Computer Vision 101, Introduction to OpenAI GPT Models, Prompt Engineering.'
          ),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(outputPath, buffer);
  return {
    outputPath,
    size: buffer.length,
  };
}

// CLI execution if invoked directly
const targetPath = process.argv[2] || path.join(__dirname, '../public/resumes/madhav-garg-resume.docx');
generateDocx(targetPath)
  .then((res) => {
    console.log(`Generated authentic Word (.docx) document: ${res.outputPath} (${res.size} bytes)`);
  })
  .catch((err) => {
    console.error('Failed to generate docx:', err);
    process.exit(1);
  });
