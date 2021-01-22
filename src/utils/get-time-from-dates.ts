interface Times {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;

/**
 * Returns the time difference between two dates split in
 * days, hours, minutes and seconds
 *
 * Flips the params if the starting date is bigger than the ending date.
 *
 * @param dateStart - Start date in milliseconds
 * @param dateEnd - End date in milliseconds
 * @returns days, hours, minutes and seconds between the two dates
 */
const getTimeFromDates = (dateStart: number, dateEnd: number): Times => {
  if (dateStart > dateEnd) return getTimeFromDates(dateEnd, dateStart);

  let seconds = Math.round((dateEnd - dateStart) / 1000);
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
