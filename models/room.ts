import * as mongoose from 'mongoose';

export interface IRoom extends mongoose.Document{
    name: string;
    area: number;
}

let roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  area: {
    type: Number,
    required: true
  }
});

export default roomSchema;
