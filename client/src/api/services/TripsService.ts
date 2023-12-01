import $api from '..';
import { ITrip } from '../../typespaces/interfaces/ITrip';

export default class TripsService {
  static async fetchTrips({ limit = 10, offset = 0 }: { limit: number; offset: number }): Promise<ITrip[]> {
    const response = await $api.request({
      method: 'get',
      url: `/trips`,
      params: { limit, offset },
    });

    return response.data.data;
  }

  static async tripsAmount(): Promise<number> {
    const response = await $api.request({
      method: 'get',
      url: '/trips/amount',
    });

    return response.data.amount;
  }
}
