import { Controller, Get } from '@nestjs/common';
import { TripsService } from './trips.service';

@Controller('trips')
export class TripsController {
  constructor(private readonly tripsService: TripsService) {}

  @Get()
  getHello(): string {
    return this.tripsService.testTrips();
  }
}
