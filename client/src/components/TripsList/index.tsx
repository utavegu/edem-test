import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { useLazyGetTripsQuery, useGetTripsAmountQuery } from '../../api/trips.api';
import { setTrips } from '../../store/slices/trips.slice';
import { tripsSelector } from '../../store/selectors/trips.selectors';
import { TripCard } from '../TripCard';
import { ITrip } from '../../typespaces/interfaces/ITrip';
import classes from './TripsList.module.scss';

export const TripsList = () => {
  const dispatch = useAppDispatch();
  const trips = useAppSelector(tripsSelector);
  const [getTrips, { isFetching: isTripsFetching, error: isTripsError }] = useLazyGetTripsQuery();
  const { data: allTripsAmount, isError: allTripsAmountError } = useGetTripsAmountQuery();
  const [currentOffset, setCurrentOffset] = useState(0);

  const fetchTrips = async (limit: number, offset: number) => {
    const response = await getTrips({ limit, offset });
    if (response.data.data) {
      dispatch(setTrips([...trips, ...response.data.data]));
      setCurrentOffset((prevState) => prevState + 10);
    }
  };

  const fetchMoreData = () => {
    if (!isTripsFetching && trips.length >= 30) {
      fetchTrips(10, currentOffset);
    }
  };

  useEffect(() => {
    fetchTrips(30, currentOffset);
    setCurrentOffset(20);
  }, []);

  useEffect(() => {
    if (trips.length === allTripsAmount?.amount) {
      alert('Поездок больше не найдено!');
    }
  }, [trips]);

  if (isTripsError || allTripsAmountError) {
    return <div>Ошибка загрузки!</div>;
  }

  return (
    <InfiniteScroll
      dataLength={trips.length}
      next={fetchMoreData}
      hasMore={trips.length < allTripsAmount?.amount}
      loader={null}
    >
      <ul className={classes.tripsList}>
        {!!trips.length &&
          trips.map((trip: ITrip, i: number) => (
            <TripCard
              key={i}
              trip={trip}
            />
          ))}
        {isTripsFetching && <li className={classes.preloader}></li>}
      </ul>
    </InfiniteScroll>
  );
};
