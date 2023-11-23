import { FC } from 'react';
import classes from './TripCard.module.scss';

type PropTypes = {
  image: string;
};

export const TripCard: FC<PropTypes> = ({ image }) => {
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
          <h3 className={classes.tripName}>Газель фермер</h3>
          <p className={classes.details}>
            <address>Екатеринбург</address>
            &nbsp;&nbsp;&nbsp;
            <time dateTime="2000-01-01 00:01">26 сен, вс</time>
          </p>
          <div className={classes.cargoTypeContainer}>
            <p>
              <b>Тип груза: </b>
              <span>Тип груза: Личные вещи, Стройматериалы, Техника и оборудование и <a href="#">еще 5 типов</a> </span>
            </p>
          </div>
        </div>
        <p className={classes.pricePerHour}>
          <span>за 1 час</span>
          <span>от 500 ₽</span>
        </p>
      </a>
    </li>
  )
}