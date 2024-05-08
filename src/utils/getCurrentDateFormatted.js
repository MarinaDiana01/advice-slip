export const getCurrentDateFormatted = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; 
  let dd = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  if (hour < 10) hour = '0' + hour;
  if (minute < 10) minute = '0' + minute;


  const formattedToday = `${dd}/${mm}/${yyyy} at ${hour}:${minute}`;

  return formattedToday;
};