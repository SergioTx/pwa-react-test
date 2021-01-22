import getTimeFromDates from '../get-time-from-dates';

describe('Get time from dates', () => {
  it.each([
    [
      1611305115551,
      1611305115551,
      { days: 0, hours: 0, minutes: 0, seconds: 0 },
    ],
    [
      1611305115551,
      1611305102854,
      { days: 0, hours: 0, minutes: 0, seconds: 13 },
    ],
    [
      1611405115551,
      1611305102854,
      { days: 1, hours: 3, minutes: 46, seconds: 53 },
    ],
  ])(
    'returns the date difference in days, hours, minutes and seconds',
    (testFrom, testTo, result) => {
      const times = getTimeFromDates(testFrom, testTo);

      expect(times).toEqual(result);
    }
  );
});
