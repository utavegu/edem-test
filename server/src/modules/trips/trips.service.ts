import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Trip, TripDocument } from './schemas/trip.schema';
import { mockDatabase } from 'src/mockDatabase';
import { Statuses } from './typespaces/enums/Statuses';

@Injectable()
export class TripsService {
  constructor(@InjectModel(Trip.name) private TripModel: Model<TripDocument>) {}

  async copyTripsOnDb(): Promise<{ status: Statuses; message: string }> {
    try {
      await this.TripModel.insertMany(mockDatabase.trips);
      return {
        status: Statuses.SUCCESS,
        message: 'Поездки добавлены успешно!',
      };
    } catch (err) {
      console.error(err);
    }
  }

  async fetchTrips(
    limit = '10',
    offset = '0',
  ): Promise<{
    status: Statuses;
    data: Trip[];
  }> {
    try {
      const trips = await this.TripModel.find()
        .limit(Number(limit))
        .skip(Number(offset))
        .select('-__v');
      return {
        status: Statuses.SUCCESS,
        data: trips,
      };
    } catch (err) {
      console.error(err);
    }
  }

  async getTripsAmount(): Promise<{
    status: Statuses;
    amount: number;
  }> {
    try {
      const tripsAmount = await this.TripModel.find().countDocuments();
      return {
        status: Statuses.SUCCESS,
        amount: tripsAmount,
      };
    } catch (err) {
      console.error(err);
    }
  }
}
