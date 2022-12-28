export function getFormattedDate(value) {
  const date = new Date(value);
  let year = date.getFullYear();
  let month = (1 + date.getMonth()).toString().padStart(2, "0");
  let day = date.getDate().toString().padStart(2, "0");

  return year + "-" + month + "-" + day;
}
