import { TripsList } from './components/TripsList';
import { TripsCounter } from './components/TripsCounter';
import classes from './App.module.scss';

export const App = () => {
  return (
    <>
      <header className={classes.header}>
        Логотип там, навигация, все дела. Юзер меню.
      </header>
      <main className={classes.main}>
        <TripsCounter />
        <TripsList />
      </main>
      {/* TODO: Футер прилипает даже без контента в мэйне! */}
      <footer className={classes.footer}>
        Контакты, политика конфиденциальности и оферта, соцсети
      </footer>
    </>
  );
}
