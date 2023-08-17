import Topic, { ITopic } from '../models/topic.model';

export class TopicService {
  public async getAll(): Promise<ITopic[] | null> {
    const topics = Topic.find({});

    return topics;
  }

  public async getTopic(id: string): Promise<ITopic | null> {
    const topic: ITopic | null = await Topic.findOne({ _id: id });

    if (!topic) throw new Error(`Topic with _id ${id} not found`);
    return topic;
  }
}
