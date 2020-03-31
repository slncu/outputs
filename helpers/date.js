export const padStart = num =>
  String(num).length === 1 ? `0${num}` : String(num);

export const unixToLocaleDateString = unixtime => {
  const dateTime = new Date(unixtime * 1000);
  const localeDate = dateTime.toLocaleDateString().split("/");

  const formatted = {
    y: localeDate[0],
    m: padStart(localeDate[1]),
    d: padStart(localeDate[2])
  };

  console.log(formatted);

  return formatted;
};

export const dateStringToUnix = dateArray => {
  const formatted = `${dateArray[0]}-${padStart(dateArray[1])}-${padStart(
    dateArray[2]
  )}`;

  return Date.parse(formatted);
};
