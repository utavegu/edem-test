import Wrapper from '../Wrapper/Wrapper';
import classes from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Wrapper>
        <div className={classes.firstRow}>
          <div>
            <a href="">О проекте</a>
            <a href="">Блог</a>
            <a href="">Безопасность</a>
          </div>
          <div>
            <a href="">Способы оплаты</a>
            <a href="">Обратная связь</a>
            <a href="">Вопросы и ответы</a>
          </div>
          <div>
            <a href="">Автовокзалы России</a>
            <a href="">Автобусные направления</a>
            <a href="">Расписание автобусов</a>
          </div>
          <div>
            <a href="">Популярные маршруты</a>
            <a href="">СМИ и Рекламодателям</a>
          </div>
          <div>
            <a href="">Апстор</a>
            <a href="">Гугл плэй</a>
          </div>
          <div>
            <a href="">вк</a>
            <a href="">ок</a>
            <a href="">твиттер</a>
          </div>
        </div>
        <div>
          <span>© 2022 ООО «КОНТЕНТ»</span>
          <a>Политика конфиденциальности</a>
          <a>Пользовательское соглашение</a>
        </div>
      </Wrapper>
    </footer>
  )
}