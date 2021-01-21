const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;

const getTimeFromDates = (dateStart: number, dateEnd: number) => {
  let seconds = Math.round((dateStart - dateEnd) / 1000);
  const days = Math.trunc(seconds / DAY_IN_SECONDS);
  seconds -= days * DAY_IN_SECONDS;
  const hours = Math.trunc(seconds / HOUR_IN_SECONDS);
  seconds -= hours * HOUR_IN_SECONDS;
  const minutes = Math.trunc(seconds / MINUTE_IN_SECONDS);
  seconds -= minutes * MINUTE_IN_SECONDS;

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export default getTimeFromDates;
