import { Controller, Post, Get, Query } from '@nestjs/common';
import { TripsService } from './trips.service';
import { Trip } from './schemas/trip.schema';
import { Statuses } from './typespaces/enums/Statuses';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post('migration')
  copyTripsOnDb(): Promise<{
    status: Statuses;
    message: string;
  }> {
    return this.tripsService.copyTripsOnDb();
  }

  @Get()
  fetchTrips(@Query() { limit, offset }): Promise<{
    status: Statuses;
    data: Trip[];
  }> {
    return this.tripsService.fetchTrips(limit, offset);
  }

  @Get('amount')
  getTripsAmount(): Promise<{
    status: Statuses;
    amount: number;
  }> {
    return this.tripsService.getTripsAmount();
  }
}
