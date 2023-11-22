import { useAppSelector } from '../../hooks/redux';
import { amountTripsSelector } from '../../store/selectors/trips.selectors';

export const TripsCounter = () => {
  const tripsAmount = useAppSelector(amountTripsSelector);
  return (
    <div>{tripsAmount}</div>
  )
}