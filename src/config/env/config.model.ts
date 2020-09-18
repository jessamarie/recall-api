export enum EnvironmentType {
  DEV = 'development',
  PROD = 'production',
  TEST = 'test'
}

export interface IConfigProperties {
  env: EnvironmentType
  app: {
    port: number;
  },
  mongoDB: {
    url: string;
  }
}
