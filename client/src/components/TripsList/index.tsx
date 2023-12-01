import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import {
  errorTripsSelector,
  findedTripsQuantitySelector,
  isLoadingTripsSelector,
  tripsAmountSelector,
  tripsSelector,
} from '../../store/selectors/trips.selectors';
import { fetchTripsAmount, fetchTrips } from '../../store/thunks/trips.thunk';
import { checkLastTrip } from '../../helpers/checkLastTrip';
import { TripCard } from '../TripCard';
import { FetchingError } from '../FetchingError';
import { Preloader } from '../Preloader';
import { ITrip } from '../../typespaces/interfaces/ITrip';
import { FIRST_TRIPS_FETCHING_QUANTITY, OTHER_TRIPS_FETCHING_QUANTITY } from '../../constants';
import classes from './TripsList.module.scss';

export const TripsList = () => {
  const dispatch = useAppDispatch();

  const trips = useAppSelector(tripsSelector);
  const findedTripsQuantity = useAppSelector(findedTripsQuantitySelector);
  const allTripsAmount = useAppSelector(tripsAmountSelector);
  const isTripsFetching = useAppSelector(isLoadingTripsSelector);
  const isTripsError = useAppSelector(errorTripsSelector);

  const [currentOffset, setCurrentOffset] = useState(0);

  const fetchMoreData = (limit: number, offset: number, newOffset: number) => {
    dispatch(fetchTrips({ limit, offset }));
    setCurrentOffset(newOffset);
  };

  useEffect(() => {
    if (findedTripsQuantity < FIRST_TRIPS_FETCHING_QUANTITY) {
      fetchMoreData(FIRST_TRIPS_FETCHING_QUANTITY, currentOffset, FIRST_TRIPS_FETCHING_QUANTITY);
    }
    dispatch(fetchTripsAmount());
  }, []);

  useEffect(() => {
    checkLastTrip(findedTripsQuantity, allTripsAmount);
  }, [trips]);

  if (isTripsError) {
    return <FetchingError />;
  }

  return (
    <InfiniteScroll
      dataLength={findedTripsQuantity}
      next={() =>
        fetchMoreData(OTHER_TRIPS_FETCHING_QUANTITY, currentOffset, currentOffset + OTHER_TRIPS_FETCHING_QUANTITY)
      }
      hasMore={findedTripsQuantity < allTripsAmount}
      loader={null}
    >
      <ul className={classes.tripsList}>
        {!!findedTripsQuantity &&
          trips.map((trip: ITrip, i: number) => (
            <TripCard
              key={i}
              trip={trip}
            />
          ))}
        {isTripsFetching && <Preloader />}
      </ul>
    </InfiniteScroll>
  );
};
