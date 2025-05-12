export default function getFormatedDate(dateString) {
  const date = new Date(dateString);

  const days = ["Sn", "Mn", "Tu", "Wd", "Th", "Fr", "St"];

  const dayOfWeek = days[date.getDay()];

  const day = date.getDate();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${dayOfWeek}, ${day}.${month}.${year}`;
}
