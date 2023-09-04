export const checkIfWellWatered = (wateringInterval, lastWatered) => {
  const lastWateredDate = new Date(lastWatered);
  const todayDate = new Date();
  const dateDifference = todayDate - lastWateredDate;
  const dayDifference = dateDifference / 1000 / 86400;
  const isWellWatered = dayDifference < wateringInterval;

  return isWellWatered;
};
