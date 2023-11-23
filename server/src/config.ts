const serverPort = process.env.SERVER_INTERNAL_PORT || 4000;
const clientPort = process.env.CLIENT_EXTERNAL_PORT || 3000;

const mongoServiceName = process.env.MONGODB_SERVICE_NAME || 'mongo';
const mongoInternalPort = process.env.MONGODB_INTERNAL_PORT || 27017;
const mongoLogin = process.env.MONGODB_LOGIN || 'root';
const mongoPassword = process.env.MONGODB_PASSWORD || 'example';
const dbName = process.env.DB_NAME || 'edem-test';

const mongoAdminPanelPort = process.env.MONGO_ADMIN_PANEL_EXTERNAL_PORT || 8081;

const dbConnectionString = `mongodb://${mongoServiceName}:${mongoInternalPort}`;

export {
  serverPort,
  clientPort,
  mongoServiceName,
  mongoLogin,
  mongoPassword,
  dbName,
  mongoAdminPanelPort,
  dbConnectionString,
};
