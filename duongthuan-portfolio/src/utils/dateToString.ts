type DateToStringType =
  | "dd-mm-yyyy"
  | "dd-short_month-yyyy"
  | "short_month-yyyy";

const dateToString = function (
  date: Date,
  type: DateToStringType = "dd-mm-yyyy",
) {
  let result = "";
  if (type === "dd-short_month-yyyy") {
    result = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })
      .format(date)
      .replace(/ /g, "-");
  } else if (type === "short_month-yyyy") {
    result = new Intl.DateTimeFormat("en-US", {
      month: "short",
      year: "numeric",
    })
      .format(date)
      .replace(/ /g, "-");
  } else {
    result = new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
      .format(date)
      .replace(/ /g, "-");
  }

  return result;
};

export default dateToString;
