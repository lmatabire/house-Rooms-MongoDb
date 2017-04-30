import * as mongoose from 'mongoose';
import {IRoom} from './room';
import roomSchema from './room';

export interface IHouse extends mongoose.Document {
  name: string;
  rooms: IRoom[];
}

let houseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rooms: {
    type: [roomSchema]
  }
})

export default mongoose.model<IHouse>('House', houseSchema);
