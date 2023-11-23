import { FC } from 'react';
import classes from './TripCard.module.scss';
import { ITrip } from '../../typespaces/interfaces/ITrip';

type PropTypes = {
  trip: Omit<ITrip, '_id'>
};

export const TripCard: FC<PropTypes> = ({ trip }) => {
  const { name, image, location, date, cargo, price } = trip;
  const prettyCargoTypes = cargo.join(', ')
  
  return (
    <li className={classes.card}>
      <a href="">
        <div className={classes.imageContainer}>
          <img
            src={image}
            alt="Фотография транспортного средства"
            loading='lazy'
          />
        </div>
        <div className={classes.infoContainer}>
          <h3 className={classes.tripName}>{name}</h3>
          <p className={classes.details}>
            <address>{location}</address>
            &nbsp;&nbsp;&nbsp;
            <time
            // TODO: dateTime={date.toISOString}
            >
              {String(date.getDate)}
            </time>
          </p>
          <div className={classes.cargoTypeContainer}>
            <p>
              <b>Тип груза: </b>
              <span>{prettyCargoTypes}</span>
            </p>
          </div>
        </div>
        <p className={classes.pricePerHour}>
          <span>за 1 час</span>
          <span>от {price} ₽</span>
        </p>
      </a>
    </li>
  )
}