/**
 * Portable Website Data Audit Script
 * Sourced directly from local repository modules via relative imports.
 */
import { projectsData } from '../../client/src/data/projectsData.js';
import { educationTimeline, internshipsTimeline, leadershipTimeline, achievementsList } from '../../client/src/data/timelineData.js';
import { certificationsData, achievementsData } from '../../client/src/data/credentialsData.js';
import { personalData } from '../../client/src/data/personalData.js';

console.log('====================================================');
console.log('   PORTABLE WEBSITE DATA MODULES AUDIT');
console.log('====================================================\n');

let failedChecks = 0;
let passedChecks = 0;

function assertCondition(desc, condition, details = '') {
  if (condition) {
    console.log(`[PASS] ${desc}`);
    passedChecks++;
  } else {
    console.error(`[FAIL] ${desc} -> ${details}`);
    failedChecks++;
  }
}

// 1. Personal & Contact Information
console.log('--- 1. Personal & Contact Information ---');
assertCondition('Candidate Name is Madhav Garg', personalData.name === 'Madhav Garg', personalData.name);
assertCondition('University is JK Lakshmipat University', personalData.university.includes('JK Lakshmipat University'), personalData.university);
assertCondition('Academic CGPA is 8.6', personalData.cgpa === '8.6', personalData.cgpa);
assertCondition('Expected Graduation is 2028', personalData.expectedGraduation === '2028', personalData.expectedGraduation);
assertCondition('Public Contact Email is madhavgarg.agra@gmail.com', personalData.email === 'madhavgarg.agra@gmail.com', personalData.email);
assertCondition('No phone number exposed in personalData', !personalData.phone && !JSON.stringify(personalData).match(/\b\d{10}\b/), 'Found phone data');

// 2. Internship Titles & Dates
console.log('\n--- 2. Internship Titles & Timeline ---');
const infosys = internshipsTimeline.find(i => i.organization === 'Infosys Springboard');
assertCondition('Infosys Springboard internship exists', Boolean(infosys));
if (infosys) {
  assertCondition(
    'Infosys title is "Full-Stack Developer Intern"',
    infosys.role === 'Full-Stack Developer Intern',
    `Found: "${infosys.role}"`
  );
  assertCondition(
    'Infosys verification note marks certificate as awaited',
    infosys.verificationNote.toLowerCase().includes('awaited'),
    infosys.verificationNote
  );
}

const spaceAcademy = internshipsTimeline.find(i => i.organization === 'India Space Academy');
assertCondition('India Space Academy internship exists', Boolean(spaceAcademy));
if (spaceAcademy) {
  assertCondition(
    'India Space Academy title is "Remote Sensing & GIS Intern"',
    spaceAcademy.role === 'Remote Sensing & GIS Intern',
    `Found: "${spaceAcademy.role}"`
  );
  assertCondition(
    'India Space Academy dates are "19 May 2026 — 2 July 2026"',
    spaceAcademy.period.includes('19 May 2026') && spaceAcademy.period.includes('2 July 2026'),
    `Found: "${spaceAcademy.period}"`
  );
}

// 3. Project Stacks, Links & Descriptions
console.log('\n--- 3. Project Showcase Specifications ---');

// 3.1 EcoSort
const ecosort = projectsData.find(p => p.slug === 'ecosort');
assertCondition('EcoSort project exists', Boolean(ecosort));
if (ecosort) {
  assertCondition(
    'EcoSort title contains Waste Sorting & Environmental Learning',
    ecosort.title.includes('Waste Sorting & Environmental Learning'),
    ecosort.title
  );
  const ecoTechs = ecosort.technologies.join(', ');
  assertCondition('EcoSort has JavaScript', ecoTechs.includes('JavaScript'));
  assertCondition('EcoSort has HTML5 & CSS3', ecoTechs.includes('HTML5') && ecoTechs.includes('CSS3'));
  assertCondition('EcoSort has TensorFlow.js & MobileNet v2', ecoTechs.includes('TensorFlow.js') && ecoTechs.includes('MobileNet v2'));
  assertCondition('EcoSort public repo is madhavgargagra/ecosort', ecosort.links.github.url === 'https://github.com/madhavgargagra/ecosort');
  assertCondition('EcoSort live demo is madhavgargagra.github.io/ecosort/', ecosort.links.liveDemo.url === 'https://madhavgargagra.github.io/ecosort/');
}

// 3.2 Lung Cancer Prediction
const lungCancer = projectsData.find(p => p.slug === 'lung-cancer-prediction');
assertCondition('Lung Cancer Prediction project exists', Boolean(lungCancer));
if (lungCancer) {
  const lcTechs = lungCancer.technologies.join(', ');
  assertCondition('Lung Cancer has Flask', lcTechs.includes('Flask'));
  assertCondition('Lung Cancer has XGBoost', lcTechs.includes('XGBoost'));
  assertCondition('Lung Cancer has SVM & KNN', lcTechs.includes('SVM') && lcTechs.includes('KNN'));
  assertCondition('Lung Cancer has Logistic Regression', lcTechs.includes('Logistic Regression'), `Techs: ${lcTechs}`);
  assertCondition('Lung Cancer has educational / non-clinical disclaimer', Boolean(lungCancer.disclaimer) && lungCancer.disclaimer.includes('NOT clinically validated'));
  assertCondition('Lung Cancer liveDemo is verified Render URL', lungCancer.links.liveDemo.isAvailable === true && lungCancer.links.liveDemo.url === 'https://lung-cancer-prediction-le1p.onrender.com/');
  assertCondition('Lung Cancer repo is public GitHub URL', lungCancer.links.github.url === 'https://github.com/madhavgargagra/Lung-Cancer-Prediction-and-web-application');
}

// 3.3 Insider Threat Detection
const insiderThreat = projectsData.find(p => p.slug === 'insider-threat-detection');
assertCondition('Insider Threat Detection project exists', Boolean(insiderThreat));
if (insiderThreat) {
  assertCondition('Insider Threat marked as Private Internship Project', insiderThreat.badge === 'Private Internship Project');
  assertCondition('Insider Threat repo URL is hidden/null', insiderThreat.links.github.url === null && insiderThreat.links.github.isAvailable === false);
  assertCondition('Insider Threat live demo is hidden/null', insiderThreat.links.liveDemo.url === null && insiderThreat.links.liveDemo.isAvailable === false);
  assertCondition('Insider Threat has simulated evaluation disclaimer', insiderThreat.disclaimer.includes('simulated workloads'));
}

// 3.4 Festival Event Management System
const festival = projectsData.find(p => p.slug === 'festival-event-management' || p.slug === 'event-management-system');
assertCondition('Festival Event Management project exists', Boolean(festival));
if (festival) {
  const festTechs = festival.technologies.join(', ');
  assertCondition('Festival project has React', festTechs.includes('React'));
  assertCondition('Festival project has Express.js', festTechs.includes('Express.js'));
  assertCondition('Festival project has MySQL', festTechs.includes('MySQL'));
  assertCondition('Festival project has Sequelize ORM', festTechs.includes('Sequelize ORM'));
  assertCondition('Festival project public repo is madhavgargagra/festival-event-management', festival.links.github.url === 'https://github.com/madhavgargagra/festival-event-management');

  // Verify no unverified feature claims
  const festString = JSON.stringify(festival).toLowerCase();
  assertCondition('No unverified "attendee tracking" claim in Festival project', !festString.includes('attendee tracking'));
  assertCondition('No unverified "budget logging" claim in Festival project', !festString.includes('budget logging'));
}

// 4. Awards & Achievements
console.log('\n--- 4. Awards & Achievements ---');
const allAchievements = [...achievementsList, ...achievementsData];
const nukkad = allAchievements.find(a => a.id.includes('nukkad'));
assertCondition('Nukkad Natak achievement exists', Boolean(nukkad));
if (nukkad) {
  assertCondition('Nukkad Natak is described as Second Position', nukkad.title.includes('Second Position'), nukkad.title);
  assertCondition('Nukkad Natak is NOT described as Winner', !nukkad.title.toLowerCase().includes('winner'), nukkad.title);
}

const football = allAchievements.find(a => a.id.includes('football'));
assertCondition('Football achievement exists', Boolean(football));
if (football) {
  assertCondition('Football competition preserved as Runner-up', football.title.includes('Runner-up'), football.title);
}

// Check for participation vs winning distinction
const hackathon = allAchievements.find(a => a.id.includes('hackjklu'));
assertCondition('HackJKLU is properly identified as Participant', hackathon && hackathon.title.includes('Participant'));

const intercollegeDrama = allAchievements.find(a => a.id.includes('intercollege-drama'));
assertCondition('Inter-college drama is properly identified as Representation/Delegation', intercollegeDrama && (intercollegeDrama.title.includes('Representation') || intercollegeDrama.title.includes('Delegation')));

// 5. Selected Certifications
console.log('\n--- 5. Selected Certifications ---');
const rh124 = certificationsData.find(c => c.id === 'cert-redhat-rh124');
assertCondition('Red Hat RH124 credential exists', Boolean(rh124));
if (rh124) {
  assertCondition('Red Hat RH124 is explicitly marked as Certificate of Attendance', rh124.isAttendance === true && rh124.typeBadge === 'Certificate of Attendance');
  assertCondition('Red Hat RH124 points to genuine Credly badge', rh124.badgeUrl === 'https://www.credly.com/badges/d1dba5c4-2c37-467d-9f71-8638217ee398');
}

console.log('\n====================================================');
console.log(`TOTAL CHECKS: ${passedChecks + failedChecks} | PASSED: ${passedChecks} | FAILED: ${failedChecks}`);
console.log('====================================================');

if (failedChecks > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
