/** Check to see if a date is in the past */
export function isExpired(date): boolean | null {
  if (!date) return null;

  return new Date(date) < new Date();
}
