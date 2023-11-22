import { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { useLazyGetTripsQuery } from '../../api/trips.api';
import { setTrips } from '../../store/slices/trips.slice';
import { tripsSelector } from '../../store/selectors/trips.selectors';
import classes from './TripsList.module.scss';

export const TripsList = () => {
  const TOTAL_TRIPS_COUNT = 103; // TODO: должно единожды запрашиваться с сервера, не хардкод

  const dispatch = useAppDispatch();
  const trips = useAppSelector(tripsSelector);
  const [getTrips, { isFetching: isTripsFetching, error: isTripsError }] = useLazyGetTripsQuery();
  const [currentPage, setCurrentPage] = useState(1);

  const fetchTrips = async (limit: number, page: number) => {
    const response = await getTrips({ limit, page })
    if (response.data) {
      // TODO: батчинг? Хотя с 18 версии он вроде уже сам... Тем более тут стор + стейт
      dispatch(setTrips([...trips, ...response.data]));
      setCurrentPage(prevState => prevState + 1)
    };
  }

  // TODO: похимичить с вычислением нужной страницы, так как после первого запроса стартовая будет 4. Или вообще бэк через оффсеты сделать

  useEffect(() => {
    fetchTrips(30, currentPage)
  }, [])

  const fetchMoreData = () => {
    if (trips.length <= TOTAL_TRIPS_COUNT) {
      if (!isTripsFetching && trips.length >= 30) {
        fetchTrips(10, currentPage)
      }
    } else {
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
      hasMore={true}
      loader={null}
    >
      <ul className={classes.tripsList}>
        {/* TODO: типизация... Пока что фото. Прикрутить реальный бэк */}
        {!!trips.length && trips.map((photo: any, i: any) => (
          <li key={i}>
            <img
              loading='lazy'
              alt={photo?.title}
              src={photo?.thumbnailUrl}
              width={100}
              height={100}
            />
          </li>
        ))}
        {/* TODO: Спиннер хотя бы */}
        {isTripsFetching && <li>Идёт загрузка новых поездок...</li>}
      </ul>
    </InfiniteScroll>
  )
}