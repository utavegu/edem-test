import { Controller, Post, Get } from '@nestjs/common';
import { TripsService } from './trips.service';
import { Trip } from './schemas/trip.schema';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Post()
  copyTripsOnDb(): Promise<{ status: string; message: string }> {
    return this.tripsService.copyTripsOnDb();
  }

  @Get()
  fetchTrips(): Promise<{
    status: string;
    data: Trip[];
    amount: number;
  }> {
    return this.tripsService.fetchTrips();
  }
}
