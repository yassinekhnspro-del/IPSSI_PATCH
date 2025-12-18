const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mariadb',
    logging: false,
  }
);

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    await sequelize.sync();
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Unable to connect to database:', error.message);
    process.exit(1);
  }
};
