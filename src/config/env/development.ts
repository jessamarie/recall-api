import { EnvironmentType, IConfigProperties} from './config.model';

const development: IConfigProperties = {
    env: EnvironmentType.DEV,
    app: {
        port: 4000
    },
    mongoDB: {
        url: 'mongodb://localhost:27017/recall_dev'
    }
};

export default development;
