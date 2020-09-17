import config from './config/environment';
import path from 'path';
import fs from 'fs';
import { LoggerModes } from '@overnightjs/logger';

// Set env variables
const logFilePath = path.join(__dirname, '../recall-api.log');
process.env.OVERNIGHT_LOGGER_FILEPATH = logFilePath;
process.env.OVERNIGHT_LOGGER_MODE = LoggerModes.Console;
process.env.OVERNIGHT_LOGGER_RM_TIMESTAMP = 'false';

// Remove current log file
(function removeFile() {
    try {
        fs.unlinkSync(logFilePath);
    } catch (e) { return; }
})();

// Import and start Server. Remember, server must
// be imported after configuring env variables
import RecallServer from './config/server';

const PORT = config.app.port;
const server = new RecallServer();
server.start(PORT);

export default server;