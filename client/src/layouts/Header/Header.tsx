import classNames from 'classnames';
import Wrapper from '../Wrapper/Wrapper';
import logo from '../../assets/img/Logo.png';
import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classes.header}>
      <Wrapper>
        <div className={classes.franchise}>
          <img
            src={logo}
            width={164}
            height={40}
            alt="Едем.рф"
          />
          <h1 className={classes.mainHeading}>
            <span className={classes.visuallyHidden}>Едем.рф - </span>
            Лучший способ путешествовать дешевле
          </h1>
        </div>
        <div className={classes.userMenu}>
          <button
            className={classNames([classes.headerButton, classes.messages])}
            title="Сообщения"
          >
            <span className={classes.visuallyHidden}>Сообщения</span>
          </button>
          <button
            className={classNames([classes.headerButton, classes.notification])}
            title="Уведомления"
          >
            <span className={classes.visuallyHidden}>Уведомления</span>
            <span className={classes.notificationsCount}>54</span>
          </button>
          {/* Это может быть как ссылка, так и кнопка, зависит от реализации ЛК */}
          <button
            className={classes.personalAccountButton}
            title="Личный кабинет"
          >
            Оксана
          </button>
        </div>
      </Wrapper>
    </header>
  );
};
