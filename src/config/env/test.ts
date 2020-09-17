import { EnvironmentType, IConfigProperties } from './config.model';

const test: IConfigProperties = {
    env: EnvironmentType.TEST,
    app: {
        port: 4000
    },
    mongoDB: {
        url: 'mongodb://localhost:27017/recall_dev'
    }
};

export default test;
