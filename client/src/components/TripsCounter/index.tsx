import { declOfNum } from '../../helpers/declOfNum';
import { useAppSelector } from '../../hooks/redux';
import { findedTripsQuantitySelector } from '../../store/selectors/trips.selectors';
import classes from './TripsCounter.module.scss';

export const TripsCounter = () => {
  const findedTrips = useAppSelector(findedTripsQuantitySelector);
  return (
    <div className={classes.counter}>
      Найдено: {findedTrips} {declOfNum(findedTrips, ['грузоперевозка', 'грузоперевозки', 'грузоперевозок'])}
    </div>
  );
};
