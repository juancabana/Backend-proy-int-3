import dotenv from 'dotenv';
dotenv.config();

const config = {
  dbHost: 'localhost',
  dbUser: 'root',
  dbPort: 3306,
  dbName: 'cosco',
  dbPassword: 'Password123#@!',
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
};

export default config;
