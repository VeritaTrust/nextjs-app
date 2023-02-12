console.log('PRORPRP', process.env.DB_NAME_PRODUCTION)

export default {
  // For development environment
  development: {
    storage: './development.db',
    dialect: 'sqlite'
  },
  // For production environment
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD_PROD,
    database: process.env.DB_NAME_PRODUCTION,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT_PROD,
    logging: true,
    dialect: "mysql",
  },
};
