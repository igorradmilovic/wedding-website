export const daysUntilWedding = () => {
  var currentDate = new Date().toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  var endDateUS = new Date("07/16/2022, 12:00 PM").toLocaleString("en-US", {
    timeZone: "America/New_York",
  });
  var startDate = new Date(currentDate);
  var endDate = new Date(endDateUS);

  // One day in milli
  const oneDay = 1000 * 60 * 60 * 24;

  // Day difference between two dates
  const diffInTime = endDate.getTime() - startDate.getTime();

  const diffInDays = Math.round(diffInTime / oneDay);

  return diffInDays;
};
