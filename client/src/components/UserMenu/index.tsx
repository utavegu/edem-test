import classNames from 'classnames';
import classes from './UserMenu.module.scss';

export const UserMenu = () => {
  return (
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
  );
};
