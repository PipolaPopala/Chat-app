// export function extractTime(dateString) {
//   const date = new Date(dateString);
//   const hours = padZero(date.getHours());
//   const minutes = padZero(date.getMinutes());
//   return `${hours}:${minutes}`;
// }

// // Helper function to pad single-digit numbers with a leading zero
// function padZero(number) {
//   return number.toString().padStart(2, "0");
// }

export function extractDate(dateString) {
  const inputTime = dateString;
  const parsedTime = new Date(inputTime);
  const formattedTime = `${parsedTime.getDate()}.${parsedTime.getMonth() + 1}.${parsedTime.getFullYear()}, ${parsedTime.getHours()}:${parsedTime.getMinutes()}`;
  return formattedTime
}