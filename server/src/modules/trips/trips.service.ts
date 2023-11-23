import { Injectable } from '@nestjs/common';

@Injectable()
export class TripsService {
  testTrips(): string {
    return 'This is trips, baby!';
  }
}
