const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const connectDB = require('./config/db');
const User = require('./models/User');

connectDB();

const createAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit();
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash('password', salt);

    const adminUser = new User({
      name: 'Admin',
      email: 'admin@example.com',
      password,
      role: 'admin',
    });

    await adminUser.save();
    console.log('Admin user created');
    process.exit();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

createAdmin();
