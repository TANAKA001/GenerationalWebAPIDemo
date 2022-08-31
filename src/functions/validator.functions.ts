/**
 * validate time string
 * @param {string} time - time in string format
 * @return {boolean} - is time string valid
 */
export function ValidateTime(time: string): boolean {
  const regex = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$");
  return regex.test(time);
}

/**
 * validate one email address
 * @param {string} email - email of users
 * @return {boolean} - is email valid
 */
export function validateEmail(email: string): boolean {
  // eslint-disable-next-line max-len
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
