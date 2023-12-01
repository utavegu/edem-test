import Wrapper from '../Wrapper/Wrapper';
import { SocialNetworks } from '../../components/SocialNetworks';
import { MobileApplications } from '../../components/MobileApplications';
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
          <MobileApplications />
          <SocialNetworks />
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
