/** Checks to see if something is an object */
export function isObject(obj): boolean {
  return obj !== null && typeof obj === "object";
}

/** update/patch object */
export function patchObject<T>(oldObj: T, newObj: T): T {
  const res: T = oldObj;
  const keys = Object.keys(newObj);
  keys.forEach((key) => {
    res[key] = newObj[key];
  });
  return res;
}

/** Returns an array of keys of a single object */
export function getKeys<T>(obj): T[] | string[] {
  return Object.keys(obj);
}
