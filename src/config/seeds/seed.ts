import { topics } from './topics.seed';
import mongoose, { Mongoose } from 'mongoose';
import config from '../environment';
import Topic from '../../models/topic.model';

function mongoSetup(): Promise<void | Mongoose> {
  const mongoUrl = config.mongoDB.url;

  return mongoose.connect(mongoUrl, {}).then(
    (conn: Mongoose) => {
      console.log(
        `Seeding database:  ${conn.connections[0].name} for ${conn.connections[0].host}`
      );
      return conn;
    },
    (err) => {
      console.error(err);
    }
  );
}

export const seed = mongoSetup()
  .then(() => Topic.deleteMany({}))
  .then(() => Topic.collection.insertMany(topics))
  .then((topics) => {
    console.log(topics);
    process.exit();
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
