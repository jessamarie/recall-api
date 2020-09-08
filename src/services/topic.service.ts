import Topic, { ITopic } from '../models/topic.model';
import { DocumentQuery } from 'mongoose';

export class TopicService {

    public getAll(): DocumentQuery<ITopic[] | null, ITopic> {
        return Topic.find({}, (err: Error, topics: ITopic[]) => {
            if (err) throw err;
            return topics;
        });
    }

    public getTopic(id: string): DocumentQuery<ITopic | null, ITopic> {
        return Topic.findOne({ _id: id }, (err: Error, topic: ITopic) => {
            if (err) throw err;
            if (!topic) throw new Error(`Topic with _id ${id} not found`);

            return topic;
        });
    }
}