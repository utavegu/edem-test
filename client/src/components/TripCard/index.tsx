import { FC } from 'react';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { prettifyCost } from '../../helpers/prettifyCost';
import { ITrip } from '../../typespaces/interfaces/ITrip';
import classes from './TripCard.module.scss';

type PropTypes = {
  trip: Omit<ITrip, '_id'>;
};

export const TripCard: FC<PropTypes> = ({ trip }) => {
  const { name, image, location, date, cargo, price } = trip;
  const prettyCargoTypes = cargo.join(', ');
  const prettyDate = format(new Date(date), 'dd MMM, eee', { locale: ru });

  return (
    <li className={classes.card}>
      <a href="">
        <div className={classes.imageContainer}>
          <img
            src={image}
            alt="Фотография транспортного средства"
            loading="lazy"
          />
        </div>
        <div className={classes.infoContainer}>
          <h3 className={classes.tripName}>{name}</h3>
          <div className={classes.details}>
            <address>{location}</address>
            &nbsp;&nbsp;&nbsp;
            <time dateTime={prettyDate}>{prettyDate}</time>
          </div>
          <div className={classes.cargoTypeContainer}>
            <p>
              <b>Тип груза: </b>
              <span>{prettyCargoTypes}</span>
            </p>
          </div>
        </div>
        <p className={classes.pricePerHour}>
          <span>за 1 час</span>
          <span>от {prettifyCost(price)} ₽</span>
        </p>
      </a>
    </li>
  );
};
