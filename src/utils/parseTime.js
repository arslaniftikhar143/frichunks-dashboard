export function parseTime(isoString) {
  const hours = isoString.split("T")[1].split(".")[0].split(":")[0];
  const hoursINt = parseInt(hours) + 5;
  const hoursString = hoursINt.toString();
  const minutes = isoString.split("T")[1].split(".")[0].split(":")[1];
  return hours > 12
    ? hoursString % 12
    : hoursString + ":" + minutes + " " + (hoursINt >= 12 ? "PM" : "AM");
}
