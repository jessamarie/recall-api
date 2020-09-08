import mongoose, { Schema, Document } from 'mongoose';

/* use ITopic['_id'] to reference specific Id of another interface 
   use type: Schema.Types.ObjectId to create a schema property of type id
*/
export interface ITopic extends Document {
    name: string;
    sentences: string[];
}

interface ICreateTopic extends Document {
    name: ITopic['name'];
    sentences: ITopic['sentences'];
}

const TopicSchema: Schema = new Schema({
    title: { type: String, default: '', trim: true, required: true },
    sentences: { type: [String], default: '', trim: true }
});

export default mongoose.model<ITopic>('Topic', TopicSchema);
