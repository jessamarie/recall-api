import production from './env/production';
import development from './env/development';
import test from './env/test';
import Logger from 'jet-logger';

const env = process.env.NODE_ENV;

Logger.Imp(`Running in ${process.env.NODE_ENV}`);

const configs = [
    development,
    test,
    production
];

const config = configs.find(config => config.env === env) || development;

export default config;