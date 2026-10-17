import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientDistDir = path.resolve(__dirname, '../../client/dist/assets');
const files = fs.readdirSync(clientDistDir).filter(f => f.endsWith('.js'));

console.log('Scanning JS bundles in client/dist/assets:');
let leakDetected = false;

for (const file of files) {
  const content = fs.readFileSync(path.join(clientDistDir, file), 'utf8');
  console.log(`- File: ${file} (${content.length} bytes)`);

  // Phone regex (Indian 10-digit mobile numbers, excluding decimal points)
  const phoneMatch = content.match(/(?<![\.\d])(?:\+91[\s-]?)?[6-9]\d{9}(?!\d)/g);
  if (phoneMatch) {
    console.error(`  [FAIL] Potential phone number match in ${file}:`, phoneMatch);
    leakDetected = true;
  } else {
    console.log(`  [PASS] No phone numbers found.`);
  }

  // MongoDB URI
  const mongoMatch = content.match(/mongodb(?:\+srv)?:\/\/[^\s"']+/g);
  if (mongoMatch) {
    console.error(`  [FAIL] MongoDB URI leak in ${file}:`, mongoMatch);
    leakDetected = true;
  } else {
    console.log(`  [PASS] No MongoDB URI found.`);
  }

  // Private keys or AWS credentials
  const awsMatch = content.match(/AKIA[0-9A-Z]{16}/g);
  if (awsMatch) {
    console.error(`  [FAIL] AWS Key leak in ${file}:`, awsMatch);
    leakDetected = true;
  } else {
    console.log(`  [PASS] No AWS keys found.`);
  }

  // Private repository URLs (e.g. non-public repo links)
  const privateRepoMatch = content.match(/github\.com\/[^"'\s]*insider[^\s"']*/gi);
  if (privateRepoMatch) {
    console.error(`  [FAIL] Private repo URL found in ${file}:`, privateRepoMatch);
    leakDetected = true;
  } else {
    console.log(`  [PASS] No private repository URLs found.`);
  }

  // Accidental development server localhost endpoints (e.g. http://localhost:5000, http://127.0.0.1:5000)
  const devEndpointMatch = content.match(/https?:\/\/(?:localhost|127\.0\.0\.1):\d+/gi);
  if (devEndpointMatch) {
    console.error(`  [FAIL] Accidental hardcoded local server endpoint found in ${file}:`, devEndpointMatch);
    leakDetected = true;
  } else {
    console.log(`  [PASS] No hardcoded localhost server endpoints (e.g. :5000) found in production bundle.`);
  }
}

if (!leakDetected) {
  console.log('\n[PASS] All security scanning checks passed with zero leaks detected.');
  process.exit(0);
} else {
  console.error('\n[FAIL] Security leaks detected.');
  process.exit(1);
}
