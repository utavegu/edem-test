import MainLayout from './layouts/MainLayout/MainLayout';
import { TripsCounter } from './components/TripsCounter';
import { TripsList } from './components/TripsList';

export const App = () => {
  return (
    <MainLayout>
      <section>
        <h2 className='visually-hidden'>Грузоперевозки</h2>
        <TripsCounter />
        <TripsList />
      </section>
    </MainLayout>
  );
}
