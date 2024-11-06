require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conectou no banco');
  } catch (error) {
    console.error('Erro ao conectar no banco:', error);
    process.exit(1); 
  }
};

module.exports = connectDB;
