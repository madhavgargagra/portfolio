import mongoose from 'mongoose';
import { config } from '../src/config/env.js';
import Contact from '../src/models/Contact.js';

async function inspectRecord() {
  try {
    console.log('Connecting to MongoDB (Read-Only query)...');
    await mongoose.connect(config.mongoUri);
    console.log('[MongoDB] Connected.');

    const targetId = '6ad3e1394b9253c9c703d4bb';
    const testRecord = await Contact.findById(targetId).lean();

    if (testRecord) {
      console.log('\n--- TARGET QA TEST RECORD FOUND ---');
      console.log(JSON.stringify(testRecord, null, 2));
      console.log('\nVerification:');
      console.log(`- ID: ${testRecord._id}`);
      console.log(`- Name: "${testRecord.name}"`);
      console.log(`- Email: "${testRecord.email}"`);
      console.log(`- Message: "${testRecord.message}"`);
      console.log(`- CreatedAt: ${testRecord.createdAt}`);
    } else {
      console.log(`\nTarget ID ${targetId} not found by direct ID. Searching by email 'test@example.com'...`);
      const recordsByEmail = await Contact.find({ email: 'test@example.com' }).sort({ createdAt: -1 }).limit(5).lean();
      console.log(`Found ${recordsByEmail.length} record(s) matching email 'test@example.com':`);
      for (const rec of recordsByEmail) {
        console.log(JSON.stringify(rec, null, 2));
      }
    }

    const totalContacts = await Contact.countDocuments();
    console.log(`\nTotal Contact submissions currently in collection: ${totalContacts}`);
  } catch (err) {
    console.error('Error during inspection:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('[MongoDB] Disconnected.');
  }
}

inspectRecord();
