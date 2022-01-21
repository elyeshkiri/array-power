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
 * Split an array into n parts.
 *
 * @param  {Array} array
 * @param  {Number} len > 0.
 * @return {Array} - Array of arrays .
 */
const splitTo = (array, n) => {
  if (Array.isArray(array) && parseInt(n) > 0) {
    var container = [];
    var len = array.length,
      i = 0,
      parts = parseInt(n),
      size;
    while (i < len) {
      size = Math.ceil((len - i) / parts--);
      container.push(array.slice(i, (i += size)));
    }
    return container;
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
/**
 * Shuffle an array (randomize).
 *
 * @param  {Array} arr
 * @return  {Array} Shuffled array.
 */
const shuffle = (arr) => {
  if (Array.isArray(arr)) {
    for (let i = arr.length - 1; i > 0; i--) {
      const r = Math.random();
      const tmp = Math.floor(r * (i + 1));
      [arr[tmp], arr[i]] = [arr[i], arr[tmp]];
    }
    return arr;
  }
  return null;
};
/**
 * Fill an array with multiple items, each of them repeated n times,  with ability to shuffle it.
 *
 * @param  {Array} array (array of values).
 * @param  {Number} n (n times).
 * @param  {Boolean} shuffled
 * @return {Array} Filled array with items n times that maybe shuffled.
 */
const filling = (array, n, shuffled) => {
  if (
    Array.isArray(array) &&
    parseInt(n) > 0 &&
    typeof shuffled === "boolean"
  ) {
    let arr = Array.prototype.concat.apply(
      [],
      array.map((el) => {
        return Array(parseInt(n)).fill(el);
      })
    );
    if (shuffled) {
      return shuffle(arr);
    }
    return arr;
  }
  return null;
};
/**
 * Arrange array by same items (keeping same order of the unque items inside array).
 *
 * @param  {Array} array (array of values).
 * @return {Array} Filled array with items n times that maybe shuffled.
 */
const arrange = (array) => {
  let cleanList = noDup(array);
  let occurences = occur(array);
  return Array.prototype.concat.apply(
    [],
    cleanList.map((el) => {
      let n = occurences.filter((obj) => {
        return obj.item == el;
      })[0].occurrence;
      return filling([el], n, false);
    })
  );
};
// Counts total of digits after decimals in number.
const countDecimals = (n) => {
  if (Math.floor(n.valueOf()) === n.valueOf()) return 0;
  return n.toString().split(".")[1].length || 0;
};
/**
 * Create array from a range of numbers with ability to skip.
 *
 * @param  {Number} start
 * @param  {Number} end
 * @param  {Number} skip
 * @return {Array}
 */
const numRange = (start, end, skip = 1) => {
  if (
    typeof start &&
    typeof end &&
    typeof skip === "number" &&
    end >= start &&
    skip > 0
  ) {
    var n = parseInt((end - start) / skip) + 1;
    var d = countDecimals(skip);
    return new Array(n)
      .fill()
      .map((_, i) => parseFloat((i * skip + start).toFixed(d)));
  }
  return null;
};
/**
 * Look for item indexes in array from start to end position.
 *
 * @param  {Array}  array
 * @param  {Any}    item Item to look for in the array.
 * @param  {Number} start The position from which to start searching for item in the array.
 * @param  {Number} end The position at which the search for item in the array stops.
 * @return {Array} Return array of indexes.
 */
const findAll = (array, item, start = 0, end = array.length) => {
  if (Array.isArray(array) && item && parseInt(start) <= parseInt(end)) {
    let arr = arrayStringify(array);
    let val = JSON.stringify({
      original: item,
      value: typeof item !== "string" ? JSON.stringify(item) : item,
      type: typeof item,
    });
    let firstIndex = start ? parseInt(start) : arr.indexOf(val);
    let lastIndex = end ? parseInt(end) : arr.lastIndexOf(val);
    let indexes = [];
    for (var i = firstIndex; i < lastIndex + 1; i++) {
      if (arr[i] === val) {
        indexes.push(i);
      }
    }
    return indexes;
  }
  return null;
};
/**
 * Remove (pops) the last item of an array without changing the original array.
 *
 * @param  {Array} array
 * @return {Array} Return new array without the removed item (the last one).
 */
const pop = (array) => {
  if (Array.isArray(array)) {
    return array.slice(0, -1);
  }
  return null;
};
/**
 * Shift (remove) the first item of the array without changing the original array.
 *
 * @param  {Array} array
 * @return {Array} Return new array without the removed item (the first one).
 */
const shift = (array) => {
  if (Array.isArray(array)) {
    return array.slice(1);
  }
  return null;
};
/**
 * Add new items to the beginning of an array without changing the original array.
 *
 * @param  {Array} array
 * @param  {Any} items The item(s) to add to the array. Minimum one item is required.
 * @return {Array} Return new array with the new items added to the beginning of the original array.
 */
const unshift = (array, ...items) => {
  if (Array.isArray(array)) {
    return [...items, ...array];
  }
  return null;
};
/**
 * Add new items to the end of an array without changing the original array.
 *
 * @param  {Array} array
 * @param  {Any} items The item(s) to add to the array. Minimum one item is required.
 * @return {Array} Return new array with the new items added to the end of the original array.
 */
const push = (array, ...items) => {
  if (Array.isArray(array)) {
    return [...array, ...items];
  }
  return null;
};
/**
 * Add and/or remove array items without changing the original array.
 *
 * @param  {Array} array
 * @param  {Number} start The position to add/remove items. Negative value defines the position from the end of the array.
 * @param  {Number} deleteCount Number of items to be removed.
 * @param  {Any} items New elements(s) to be added.
 * @return {Array} new array with added or/and without the removed elements from the original array.
 */
const splice = (array, start, deleteCount = 0, ...items) => {
  if (Array.isArray(array) && deleteCount >= 0) {
    return [
      ...array.slice(0, start),
      ...items,
      ...array.slice(start + deleteCount),
    ];
  }
  return null;
};
/**
 * Sort the array items as strings in alphabetical and ascending order without changing the original array.
 *
 * @param  {Array} array
 * @param  {Function} compareFunc A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments.
 * @return {Array} new array with the items sorted.
 */
const sort = (array, compareFunc) => {
  if (Array.isArray(array)) {
    return [...array].sort(compareFunc);
  }
  return null;
};
/**
 * Reverse the order of the items in an array without changing the original array.
 *
 * @param  {Array} array
 * @return {Array} return new array with the order of the elements in the original array is reversed.
 */
const reverse = (array) => {
  if (Array.isArray(array)) {
    return [...array].reverse();
  }
  return null;
};
/**
 * Sort the array items as strings in alphabetical and ascending order, then reverse the order of the items without changing the original array.
 *
 * @param  {Array} array.
 * @param  {Function} compareFunc A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments.
 * @return {Array} new array with the items sorted with reversed order.
 */
const reverseSort = (array, compareFunc) => {
  if (Array.isArray(array)) {
    return [...array].sort(compareFunc).reverse();
  }
  return null;
};
/**
 * Check whether array is dense or sparse.
 *
 * @param  {Array} array
 * @return {Boolean} if true, array is dense, else is sparse.
 */
const isDense = (array) => {
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      if (!(i in array)) {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = {
  noDup,
  getDup,
  getUniq,
  chunk,
  splitTo,
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
  shuffle,
  filling,
  arrange,
  numRange,
  findAll,
  pop,
  shift,
  unshift,
  push,
  splice,
  sort,
  reverse,
  reverseSort,
  isDense,
};
