/** converts an array to a string formatted as CSS */
export function toCSSString(params) {
  return params && params.length > 0
    ? Object.keys(params)
        .map(key => key + ":" + params[key])
        .join(";")
    : null;
}

/** Converts any string to kebab-case */
export function toKebabCase(str: string) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
    .replace(/[\s_]+/g, "-") // replace all spaces and low dash
    .toLowerCase(); // convert to lower case
}

/** normalizes values for more accurate comparisons */
export function normalizeValue(value: string | number): string {
  return value?.toString().toLowerCase().replace(/\s/g, "");
}

/** Converts an object of type QueryOptions into a query string */
// export function toQueryString(params): string | null {
//   return params ? Object.keys(params).map(key => key + '=' + params[key]).join('&') : null;
// }

/** converts a string to a url friendly slug */
export function slugify(str: string | number) {
  return str
    .toString()
    .replace(/[&/\\#,+()$~%.'":*?<>{}]/g, "") // removes special characters
    .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
    .replace(/[\s_]+/g, "-") // replace all spaces and low dash
    .toLowerCase(); // convert to lower case
}

/** normalizes string for comparison */
export function normalize(str: string | number): string {
  return str.toString().trim().toLowerCase().normalize();
}

/** formats a phone number */
export function formatPhoneNumber(str: string | number) {
  /**
   * @param {Number | String} number - Number that will be formatted as telephone number
   * Returns formatted number: (###) ###-####
   *   if number.length < 4: ###
   *   else if number.length < 7: (###) ###
   * Does not handle country codes that are not '1' (USA)
   */

  if (!str) {
    return "n/a";
  }

  // Strip any pre-existing formatting
  let phoneNumber = String(str).replace(/[- ()]/g, "");

  // Will return formattedNumber.
  // If phone number isn't longer than an area code, just show number
  let formattedNumber = phoneNumber;

  // if the first character is '1', strip it out and add it back
  const c = phoneNumber[0] === "1" ? "1 " : "";
  phoneNumber = phoneNumber[0] === "1" ? phoneNumber.slice(1) : phoneNumber;

  // # (###) ###-#### as c (area) front-end
  const area = phoneNumber.substring(0, 3);
  const front = phoneNumber.substring(3, 6);
  const end = phoneNumber.substring(6, 10);

  if (front) {
    formattedNumber = c + "(" + area + ") " + front;
  }
  if (end) {
    formattedNumber += "-" + end;
  }
  return formattedNumber;
}

/** Returns a random string */
export function randomString(len = 16): string {
  return Math.random().toString(36).substr(2, len).toString();
}

/** Returns the extension on the end of a file name */
// export function getFileExtension(filename: string): string | null {
//   return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename).toString().toLowerCase() : null;
// }

/** formats the input into a comma seperated string */
export function numberWithCommas(x: string | number): string {
  return x
    .toString()
    .trim()
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/** Check to see if input is a number */
export function isNumber(x): boolean {
  return typeof x === "number";
}

/** Checks to see if input is a string */
export function isString(x): boolean {
  return typeof x === "string";
}
