import Wrapper from '../Wrapper/Wrapper';
import classes from './Header.module.scss';

export const Header = () => {
  return (
    <header className={classes.header}>
      <Wrapper>
        <h1 className={classes.mainHeading}>
          <img src="" alt="Едем.рф" />
          <span className="visually-hidden">Едем.рф - </span>
          Лучший способ путешествовать дешевле
        </h1>
        <div className={classes.userMenu}>
          <button>Сообщения</button>
          <button>Уведомления</button>
          {/* На самом деле линк из Реакт роутера */}
          <a>Личный кабинет</a>
        </div>
      </Wrapper>
    </header>
  )
}