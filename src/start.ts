import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config();

// Set env variables
const logFilePath = path.join(__dirname, '../recall-api.log');
process.env.JET_LOGGER_FILEPATH  = logFilePath;
process.env.JET_LOGGER_MODE  = LoggerModes.Console;
process.env.JET_LOGGER_RM_TIMESTAMP = 'false';

// Remove current log file
(function removeFile() {
    try {
        fs.unlinkSync(logFilePath);
    } catch (e) { return; }
})();

// Import and start Server. Remember, server must
// be imported after configuring env variables
import config from './config/environment';
import RecallServer from './config/server';
import { LoggerModes } from 'jet-logger';

const PORT = config.app.port;
const server = new RecallServer();
server.start(PORT);

export default server;