import MainLayout from './layouts/MainLayout/MainLayout';
import { TripsList } from './components/TripsList';
import { TripsCounter } from './components/TripsCounter';

export const App = () => {
  return (
    <MainLayout>
      <TripsCounter />
      <TripsList />
    </MainLayout>
  );
}
