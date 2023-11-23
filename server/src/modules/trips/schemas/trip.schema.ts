import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Trip {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true, default: Date.now })
  date: Date;

  @Prop()
  cargo: [string];

  @Prop({ required: true })
  price: number;

  @Prop()
  image: string;
}

export type TripDocument = Trip & Document;

export const TripSchema = SchemaFactory.createForClass(Trip);
