import { declOfNum } from '../../helpers/declOfNum';
import { useAppSelector } from '../../hooks/redux';
import { amountTripsSelector } from '../../store/selectors/trips.selectors';
import classes from './TripsCounter.module.scss';

export const TripsCounter = () => {
  const tripsAmount = useAppSelector(amountTripsSelector);
  return (
    <div className={classes.counter}>
      Найдено: {tripsAmount} {declOfNum(tripsAmount, ['грузоперевозка', 'грузоперевозки', 'грузоперевозок'])}
    </div>
  )
}