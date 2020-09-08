import { EnvironmentType, IConfigProperties } from './config.model';

const test: IConfigProperties = {
  env: EnvironmentType.TEST,
  app: {
    port: 4000
  },
  mongoDB: {
    url: 'mongodb://localhost:27017/recall_dev'
  }
  // mongoDB: {
  //   url: 'mongodb://localhost:27017/recall_dev',
  //   host: 'localhost',
  //   port: 27017,
  //   username: '',
  //   password: '',
  //   database: 'recall_dev'
  // }
}

export default test;
