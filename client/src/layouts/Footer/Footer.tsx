import classNames from 'classnames';
import Wrapper from '../Wrapper/Wrapper';
import classes from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Wrapper>
        <div className={classes.firstRow}>
          <ul>
            <li>
              <a href="">О проекте</a>
            </li>
            <li>
              <a href="">Блог</a>
            </li>
            <li>
              <a href="">Безопасность</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Способы оплаты</a>
            </li>
            <li>
              <a href="">Обратная связь</a>
            </li>
            <li>
              <a href="">Вопросы и ответы</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Автовокзалы России</a>
            </li>
            <li>
              <a href="">Автобусные направления</a>
            </li>
            <li>
              <a href="">Расписание автобусов</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Популярные маршруты</a>
            </li>
            <li>
              <a href="">СМИ и Рекламодателям</a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                className={classNames([classes.getApp, classes.appStore])}
                href=""
                title="AppStore"
              >
                <span className={classes.visuallyHidden}>AppStore</span>
              </a>
            </li>
            <li>
              <a
                className={classNames([classes.getApp, classes.googlePlay])}
                href=""
                title="GooglePlay"
              >
                <span className={classes.visuallyHidden}>GooglePlay</span>
              </a>
            </li>
          </ul>
          <ul className={classes.socialList}>
            <li>
              <a
                className={classNames([classes.socialItem, classes.vk])}
                title="VK"
                href=""
              >
                <span className={classes.visuallyHidden}>VK</span>
              </a>
            </li>
            <li>
              <a
                className={classNames([classes.socialItem, classes.ok])}
                title="Одноклассники"
                href=""
              >
                <span className={classes.visuallyHidden}>Одноклассники</span>
              </a>
            </li>
            <li>
              <a
                className={classNames([classes.socialItem, classes.tg])}
                title="Telegram"
                href=""
              >
                <span className={classes.visuallyHidden}>Telegram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={classes.secondRow}>
          <span>© 2022 ООО «КОНТЕНТ»</span>
          <a href="">Политика конфиденциальности</a>
          <a href="">Пользовательское соглашение</a>
        </div>
      </Wrapper>
    </footer>
  );
};
