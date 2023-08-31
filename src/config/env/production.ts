import { EnvironmentType, IConfigProperties } from './config.model';
import 'dotenv/config';

const production: IConfigProperties = {
  env: EnvironmentType.PROD,
  app: {
    port: parseInt(process.env.PORT as string)
  },
  mongoDB: {
    url: process.env.MONGO_URL as string
  }
};

export default production;
