/** Checks to see if an array is valid and not empty */
export function arrayIsValid<T>(array: T[]): boolean {
  return Array.isArray(array) && array.length > 0;
}

/** Indexes an array by a key for fast lookup */
// export function indexArrayByKey<T>(array: T[], key: string): T[] | null { // {[index: string]: T}[]
//   if (!arrayIsValid<T>(array)) return null;
//
//   const newArray: T[] = [];
//   array.forEach(obj => {
//     const k: string = obj[key];
//     newArray[k] = obj;
//   });
//
//   return newArray;
// }

/** removes custom indices from an array */
// export function removeIndicesFromArray<T>(array: T[]): T[] {
//   // if (array.length === 0) return array;
//
//   let newArray = [];
//   Object.keys(array).forEach(function(key, index) {
//     newArray = [...newArray, this[key]];
//   }, array);
//
//   return newArray;
// }

/** Replaces a single object in an array */
// export function updateOneObjectInArray<T>(array: T[], obj: T, indexKey: string): T[] {
//
//   if (!Array.isArray(array)) return array;
//
//   let newItem = true;
//   let newArray: T[] = [...array];
//
//   newArray.forEach((item, index) => {
//     if (item[indexKey] === obj[indexKey]) {
//       // console.log('You\'re a match Harry');
//       newArray[index] = obj;
//       newItem = false;
//     }
//   })
//
//   if (newItem) { newArray = [...newArray, obj] }
//
//   // console.log(newArray);
//
//   return newArray;
// }

/** groups an array by a key and returns an OBJECT */
// export function groupBy<T>(array: T[], key) {
//
//   if (array.length === 0 || !array || !key || typeof array  !== 'object') {
//     return array;
//   }
//
//   const resArray = [...array];
//
//   return resArray.reduce((rv, x) => {
//     (rv[x[key]] = rv[x[key]] || []).push(x);
//     return rv;
//   }, {});
// }

/** groups an array by a key and returns an ARRAY */
// export function groupByArray<T>(array: T[], key) {
//
//   if (!array || !key || typeof array !== 'object' || array.length === 0) {
//     return array;
//   }
//
//   const resArray = [...array];
//
//   return resArray.reduce((rv, x) => {
//     const v = key instanceof Function ? key(x) : x[key];
//     const el = rv.find((r) => r && r.key === v);
//     if (el) {
//       el.values.push(x);
//     } else {
//       rv.push({key: v, values: [x]});
//     }
//     return rv;
//   }, []);
// }

/** Checks to see if a value or object is in an array */
// export function objectInArray<T>(array: T[], key: string, value: any = null): boolean {
//
//   if (!arrayIsValid<T>(array) || !key) {
//     return false;
//   }
//
//   return array.some(e => e[key] === value);
// }

/** Removes object(s) from array where array[key] matches value */
// export function removeObjectByKey<T>(array: T[], key: string, value: any = null): T[] {
//
//   if (!arrayIsValid<T>(array) || !key) {
//     return array;
//   }
//
//   const newArray = [...array];
//
//   return newArray.filter( obj => {
//     return obj[key] !== value;
//   });
// }

/** Removes one item from an array by it's index */
// export function removeByIndex<T>(array: T[], index: number): T[] {
//   if (!arrayIsValid<T>(array)) {
//     return array;
//   }
//
//   const resArray = [...array];
//
//   if (index > -1) { resArray.splice(index, 1); }
//
//   return resArray;
// }

/** sorts an array by a key value */
export function sortByKey<T>(array: T[], key: string, order: "asc" | "desc" = "asc"): T[] {
  // if the array is empty or not an array do nothing
  if (!arrayIsValid<T>(array)) {
    return array;
  }

  const resArray = [...array];

  // if the key is undefined or a blank string set the order and return
  if (key === undefined || key === "") {
    return order === "desc" ? resArray.reverse() : resArray;
  }

  // all good so far so lets sort the array by the key
  resArray.sort((a: T, b: T) => {
    if (a[key] < b[key]) {
      return -1;
    } else if (a[key] > b[key]) {
      return 1;
    } else {
      return 0;
    }
  });

  // return sorted array in ascending or descending order
  return (order === 'desc') ? resArray.reverse() : resArray;
}

/** Sorts an array by multiple keys */
// export function sortByKeys<T>(array: T[], keys: string[], order: 'asc' | 'desc' = 'asc'): T[] {
//
//   // if the array is empty or not an array do nothing
//   if (!arrayIsValid<T>(array)) {
//     return array;
//   }
//
//   let resArray = [...array];
//
//   keys.forEach(key => resArray = sortByKey(resArray, key, order));
//
//   return resArray;
// }

/** Remove Duplicates from array */
// export function removeDuplicates<T>(array: T[]): T[] {
//   return [...new Set(array)];
// }

/** Returns the first n number of items from an array */
// export function takeN<T>(array: T[], n: number = 1): T[] {
//   if (!arrayIsValid<T>(array)) {
//     return array;
//   }
//
//   return array.slice(0, (n - 1));
// }
