import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trip, TripDocument } from './schemas/trip.schema';
import { mockDatabase } from 'src/mockDatabase';

@Injectable()
export class TripsService {
  constructor(@InjectModel(Trip.name) private TripModel: Model<TripDocument>) {}

  async copyTripsOnDb(): Promise<{ status: string; message: string }> {
    try {
      await this.TripModel.insertMany(mockDatabase.trips);
      return {
        status: 'success',
        message: 'Поездки добавлены успешно!',
      };
    } catch (err) {
      console.error(err);
    }
  }

  async fetchTrips(): Promise<{
    status: string;
    data: Trip[];
    amount: number;
  }> {
    try {
      const trips = await this.TripModel.find();
      return {
        status: 'success',
        data: trips,
        amount: trips.length, // временно!
      };
    } catch (err) {
      console.error(err);
    }
  }
}
