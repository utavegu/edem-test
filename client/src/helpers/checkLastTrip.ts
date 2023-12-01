export const checkLastTrip = (currentTripsQuantity: number, allTripsQuntity: number) => {
  if (allTripsQuntity > 0 && currentTripsQuantity === allTripsQuntity) {
    alert('Поездок больше не найдено!');
  }
};
