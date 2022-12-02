const year = 2022;
const holidays = ['01/06', '04/01', '12/25'];

function countHours(year, holidays) {
  const fullFormatHolidays = holidays.map(holiday => `${holiday}/${year}`);
  const notWeekendHolidays = fullFormatHolidays.filter(holiday => new Date(holiday).getDay() !== 0 && new Date(holiday).getDay() !== 6);
  const notWeekendHolidaysCount = notWeekendHolidays.length;
  const totalExtraHours = notWeekendHolidaysCount * 2;
  return totalExtraHours;
}

console.info(new Date('02/31/2020').getDay());

const totalExtraHours = countHours(year, holidays);
console.info(totalExtraHours);