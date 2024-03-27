
function formatDays(date) {
  let days = date.getDate();
  if (date.getDate() < 10) {
    days = `0${date.getDate()}`
  };
  return days
};

function formatMonths(date) {
  let months = date.getMonth();
  if (date.getMonth() < 10) {
    months = `0${date.getMonth()}`
  };

  return months
};