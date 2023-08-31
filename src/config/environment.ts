import production from './env/production';
import development from './env/development';
import test from './env/test';
import Logger from 'jet-logger';
import 'dotenv/config';

const env = process.env.NODE_ENV;

Logger.imp(`Running in ${process.env.NODE_ENV}`);

const configs = [development, test, production];

const config = configs.find((config) => config.env === env) || development;

export default config;
