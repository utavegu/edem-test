import MainLayout from './layouts/MainLayout/MainLayout';
import { TripsCounter } from './components/TripsCounter';
import { TripsList } from './components/TripsList';
import classes from './App.module.scss';

export const App = () => {
  return (
    <MainLayout>
      <section>
        <h2 className={classes.visuallyHidden}>Грузоперевозки</h2>
        <TripsCounter />
        <TripsList />
      </section>
    </MainLayout>
  );
};
