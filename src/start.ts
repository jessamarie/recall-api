import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';
import config from './config/environment';
import { LoggerModes } from 'jet-logger';

dotenv.config();

const logFilePath = path.join(__dirname, '../recall-api.log');

// Remove current log file
(function removeFile() {
  try {
    fs.unlinkSync(logFilePath);
  } catch (e) {
    return;
  }
})();

// Set env variables
process.env.JET_LOGGER_FILEPATH = logFilePath;
process.env.JET_LOGGER_MODE = LoggerModes.Console;
process.env.JET_LOGGER_RM_TIMESTAMP = 'false';

// Import and start Server. Remember, server must
// be imported after configuring env variables
import RecallServer from './config/server';

const PORT = config.app.port;
const server = new RecallServer();
server.start(PORT);

export default server;
