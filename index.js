/**
 * Convert an array to array of strings contains the value of each item associated with its type.
 *
 * @param  {Array} array
 * @return {Array} - Array of strings.
 */
const arrayStringify = (array) => {
  if (Array.isArray(array)) {
    return array.map((item) => {
      return JSON.stringify({
        original: item,
        value: typeof item !== "string" ? JSON.stringify(item) : item,
        type: typeof item,
      });
    });
  }
  return null;
};
/**
 * Remove duplicated items from an array.
 *
 * @param  {Array} array
 * @return {Array} - Array with no duplicates.
 */

const noDup = (array) => {
  if (Array.isArray(array)) {
    var arrayOfStrings = arrayStringify(array);
    return array.filter((item, pos) => {
      if (arrayOfStrings.indexOf(arrayOfStrings[pos]) == pos)
        return Boolean(item) === false || true;
    });
  }
  return null;
};
/**
 * Find duplicated items in array.
 *
 * @param  {Array} array
 * @return {Array} - Array with no duplicates containing duplicated item.
 */
const getDup = (array) => {
  if (Array.isArray(array)) {
    var arrayOfStrings = arrayStringify(array);
    let duplicates = array.filter((item, pos) => {
      if (
        arrayOfStrings.indexOf(arrayOfStrings[pos]) !==
        arrayOfStrings.lastIndexOf(arrayOfStrings[pos])
      )
        return Boolean(item) === false || true;
    });
    return noDup(duplicates);
  }
  return null;
};
/**
 * Find unique items in array.
 *
 * @param  {Array} array
 * @return {Array} -Array with unique items.
 */
const getUniq = (array) => {
  if (Array.isArray(array)) {
    var arrayOfStrings = arrayStringify(array);
    return array.filter((item, pos) => {
      if (
        arrayOfStrings.indexOf(arrayOfStrings[pos]) ==
        arrayOfStrings.lastIndexOf(arrayOfStrings[pos])
      )
        return Boolean(item) === false || true;
    });
  }
  return null;
};
/**
 * Chunks an array into arrays with length elements. The last chunk may contain less than length elements.
 *
 * @param  {Array} array
 * @param  {Number} len > 0.
 * @return {Array} - Array of arrays .
 */
const chunk = (array, len) => {
  if (Array.isArray(array) && parseInt(len) > 0) {
    var result = [],
      i,
      j;
    for (i = 0, j = array.length; i < j; i += parseInt(len)) {
      result.push(array.slice(i, i + parseInt(len)));
    }
    return result;
  }
  return null;
};
/**
 * Get the occurrences of an array item(s) (if provided) as well as all occurrences of array elements.
 *
 * @param  {Array} array
 * @param  {(Array || Any):Optional} items (Array of values or seperate values).
 * @return {Array} - Array of objects containing the occurrences of one or multiple items in the provided array.
 */
const occur = (array, ...args) => {
  if (Array.isArray(array)) {
    var arrayOfStrings = arrayStringify(array);
    var list = [];
    arrayOfStrings.map((el, i) => {
      if (
        !list.some((item) => {
          return item.value === el;
        })
      ) {
        list.push({ item: array[i], value: el, occurrence: 1 });
      } else {
        let filteredArr = list.filter((item) => {
          return item.value === el;
        })[0];
        let index = list.indexOf(filteredArr);
        list[index] = {
          item: array[i],
          value: el,
          occurrence: filteredArr.occurrence + 1,
        };
      }
    });
    if (args.length > 0) {
      let items = args.length == 1 && isArrayOfArrays(args) ? args[0] : args;
      return items.map((item) => {
        let itemOcc = list.filter((val) => {
          return (
            val.value ==
            JSON.stringify({
              original: item,
              value: typeof item !== "string" ? JSON.stringify(item) : item,
              type: typeof item,
            })
          );
        });
        if (itemOcc.length > 0) {
          delete itemOcc[0].value;
          return itemOcc[0];
        } else return { item, occurrence: 0 };
      });
    }
    let arrayOcc = list.map((item) => {
      delete item.value;
      return item;
    });
    return arrayOcc;
  }
  return null;
};

/**
 * Compare array to another arrays to extract its unique items without duplicates.
 * @param  {Array} array (Array to be compared with other arrays).
 * @param  {Array} args (Array of arrays or seperate arrays).
 * @return {Array} - Array of different item(s).
 */
const arrDiff = (array, ...args) => {
  if (!Array.isArray(array) || !isArrayOfArrays(args)) {
    return null;
  } else {
    let list =
      args.length == 1 && isArrayOfArrays(args[0])
        ? Array.prototype.concat.apply([], args[0])
        : Array.prototype.concat.apply([], args);
    var arrayofStrings = arrayStringify(list);
    var result = arrayStringify(array).filter((val) => {
      return arrayofStrings.every((arr) => {
        return arr.indexOf(val) == -1;
      });
    });
    return noDup(
      result.map((el) => {
        return JSON.parse(el).original;
      })
    );
  }
};
/**
 * Get unique items in two arrays or more without duplicates.
 *
 * @param  {Array} args (Array of arrays or seperate arrays).
 * @return {Array} - Array of different item(s).
 */
const diffs = (...args) => {
  if (
    !isArrayOfArrays(args) ||
    (args.length === 1 && !isArrayOfArrays(args[0])) ||
    args.length < 2
  ) {
    return null;
  } else {
    let list = args.length == 1 ? args[0] : args;
    let comparingList = list.map((arr) => {
      return noDup(arr);
    });
    return getUniq(Array.prototype.concat.apply([], comparingList));
  }
};
/**
 * Get common items in two arrays or more without duplicates.
 *
 * @param  {Array} args (Array of arrays or seperate arrays).
 * @return {Array} - Array of common items.
 */
const cmn = (...args) => {
  if (
    !isArrayOfArrays(args) ||
    (args.length === 1 && !isArrayOfArrays(args[0]))
  ) {
    return null;
  } else {
    let list = args.length == 1 ? args[0] : args;
    var arrays = list.map((el) => {
      return arrayStringify(el);
    });

    var result = arrays.shift().filter((val) => {
      return arrays.every((arr) => {
        return arr.indexOf(val) !== -1;
      });
    });
    return noDup(
      result.map((el) => {
        return JSON.parse(el).original;
      })
    );
  }
};
/**
 * Check if array is an array of arrays.
 *
 * @param  {Array} array
 * @return {Boolean} - Array is an array of arrays
 */
const isArrayOfArrays = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
};
/**
 * Check if array is an array of strings.
 *
 * @param  {Array} array
 * @return {Boolean} - Array is an array of strings
 */
const isArrayOfStrings = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== "string") {
        return false;
      }
    }
    return true;
  }
  return false;
};
/**
 * Check if array is an array of numbers.
 *
 * @param  {Array} array
 * @return {Boolean} - Array is an array of numbers.
 */
const isArrayOfNumbers = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (typeof array[i] !== "number") {
        return false;
      }
    }
    return true;
  }
  return false;
};
/**
 * Check if array is an array of objects.
 *
 * @param  {Array} array
 * @return {Boolean} - Array is an array of objects.
 */
const isArrayOfObjects = (array) => {
  if (Array.isArray(array) && array.length > 0) {
    for (var i = 0; i < array.length; i++) {
      if (
        typeof array[i] !== "object" ||
        Array.isArray(array[i]) ||
        array[i] === null
      ) {
        return false;
      }
    }
    return true;
  }
  return false;
};
/**
 * Check if item exists in one array at least, or in all the provided arrays.
 *
 * @param  {Any} item
 * @param  {Boolean} oneArray If true check if item exists in one array at least, if false check if item exists in all arrays.
 * @param  {Array} args Array of arrays or seperate arrays.
 * @return {Boolean} - Item exists.
 */
const itemIn = (item, oneArray, ...args) => {
  if (
    (Boolean(item) === false || item) &&
    typeof oneArray === "boolean" &&
    isArrayOfArrays(args)
  ) {
    var itemToBeChecked = JSON.stringify({
      original: item,
      value: typeof item !== "string" ? JSON.stringify(item) : item,
      type: typeof item,
    });
    if (oneArray) {
      let list = args.length == 1 && isArrayOfArrays(args[0]) ? args[0] : args;
      let fullList = list.map((arr) => {
        return arrayStringify(noDup(arr));
      });
      return Array.prototype.concat.apply([], fullList).some((el) => {
        return el === itemToBeChecked;
      });
    } else {
      let list = args.length == 1 && isArrayOfArrays(args[0]) ? args[0] : args;
      let arrayOfStrings = arrayStringify(cmn(list));
      return arrayOfStrings.some((el) => {
        return el === itemToBeChecked;
      });
    }
  }
  return null;
};
/**
 * Check if items exist in one array at least, or in all the provided arrays.
 *
 * @param  {Array} items
 * @param  {Boolean} oneArray If true check if items exist in one array at least, if false check if items exist in all arrays.
 * @param  {Array} args Array of arrays or seperate arrays.
 * @return {Boolean} - Items exist.
 */
const allIn = (items, oneArray, ...args) => {
  if (
    Array.isArray(items) &&
    typeof oneArray === "boolean" &&
    isArrayOfArrays(args)
  ) {
    var itemsToBeChecked = arrayStringify(items);
    var list = args.length == 1 && isArrayOfArrays(args[0]) ? args[0] : args;
    if (oneArray) {
      for (var i = 0; i < list.length; i++) {
        if (
          cmn(itemsToBeChecked, arrayStringify(noDup(list[i]))).length ===
          itemsToBeChecked.length
        ) {
          return true;
        }
      }
      return false;
    } else {
      return list.every((arr) => {
        return (
          cmn(itemsToBeChecked, arrayStringify(noDup(arr))).length ===
          itemsToBeChecked.length
        );
      });
    }
  }
  return null;
};
/**
 * Check if one item at least exist in one array at least, or in all the provided arrays.
 *
 * @param  {Array} items
 * @param  {Boolean} oneArray If true check if one item exists in one array at least, if false check if one item at least exists in all arrays.
 * @param  {Array} args Array of arrays or seperate arrays.
 * @return {Boolean} - One item exist.
 */
const oneIn = (items, oneArray, ...args) => {
  if (
    Array.isArray(items) &&
    typeof oneArray === "boolean" &&
    isArrayOfArrays(args)
  ) {
    var itemsToBeChecked = arrayStringify(items);
    var list = args.length == 1 && isArrayOfArrays(args[0]) ? args[0] : args;
    if (oneArray) {
      for (var i = 0; i < list.length; i++) {
        if (cmn(itemsToBeChecked, arrayStringify(noDup(list[i]))).length > 0) {
          return true;
        }
      }
      return false;
    } else {
      let fullList = list.map((arr) => {
        return arrayStringify(arr);
      });
      fullList.push(itemsToBeChecked);
      if (cmn(fullList).length > 0) return true;
      return false;
    }
  }
  return null;
};
module.exports = {
  noDup,
  getDup,
  getUniq,
  chunk,
  occur,
  arrDiff,
  diffs,
  cmn,
  isArrayOfArrays,
  isArrayOfStrings,
  isArrayOfNumbers,
  isArrayOfObjects,
  itemIn,
  allIn,
  oneIn,
};
