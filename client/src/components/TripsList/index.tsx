import { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { useLazyGetTripsQuery } from '../../api/trips.api';
import { setTrips } from '../../store/slices/trips.slice';
import { tripsSelector } from '../../store/selectors/trips.selectors';
import { TripCard } from '../TripCard';
import { ITrip } from '../../typespaces/interfaces/ITrip';
import classes from './TripsList.module.scss';

export const TripsList = () => {
  const TOTAL_TRIPS_COUNT = 103; // TODO: должно единожды запрашиваться с сервера, не хардкод. И не через лэзи

  const dispatch = useAppDispatch();
  const trips = useAppSelector(tripsSelector);
  const [getTrips, { isFetching: isTripsFetching, error: isTripsError }] = useLazyGetTripsQuery();
  const [currentOffset, setCurrentOffset] = useState(0);

  const fetchTrips = async (limit: number, offset: number) => {
    const response = await getTrips({ limit, offset })
    if (response.data.data) {
      // TODO: батчинг? Хотя с 18 версии он вроде уже сам... Тем более тут стор + стейт
      dispatch(setTrips([...trips, ...response.data.data]));
      setCurrentOffset(prevState => prevState + 10)
    };
  }

  useEffect(() => {
    fetchTrips(30, currentOffset)
    setCurrentOffset(20)
  }, [])

  const fetchMoreData = () => {
    if (trips.length <= TOTAL_TRIPS_COUNT) {
      if (!isTripsFetching && trips.length >= 30) {
        fetchTrips(10, currentOffset)
      }
    } else {
      console.log('Все поездки загружены!')
      alert('Все поездки загружены!')
    }
  };

  if (isTripsError) {
    return <div>Ошибка загрузки!</div>
  }

  return (
    <InfiniteScroll
      // TODO: подкалибруй маленько его видение конца списка
      dataLength={trips.length}
      next={fetchMoreData}
      hasMore={trips.length < TOTAL_TRIPS_COUNT}
      loader={<li>ЗАГРУЗКА...</li>}
    >
      <ul className={classes.tripsList}>
        {!!trips.length && trips.map((trip: ITrip, i: number) => <TripCard key={i} trip={trip} />)}
        {/* TODO: Спиннер хотя бы. И попробуй вернуть тру и понаблюдать за алертом */}
        {/* {isTripsFetching && <li>Loading...</li>} */}
      </ul>
    </InfiniteScroll>
  )
}