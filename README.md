# array-power

## Description
This package includes a set of useful array methods that facilitates working with arrays, specifically the arrays that contain objects or arrays even falsy values (such as: 0, null, false, NaN...). This package is es5 supported.

## Usage
```
npm install array-power
```

## Methods && Action

| Method              | Action                                                                                  |
| --------------      | --------------------------------------------------------------------------------------- |
| [noDup]             |  Remove duplicated items from an array.                                                 |
| [getDup]            |  Find duplicated items in array.                                                        |
| [getUniq]           |  Find unique items in array.                                                            |
| [occur]             |  Get the occurrence of an array item (if provided),                                     |
|                     |  as well as all occurrences of array items.                                             |
| [chunk]             |  Chunks an array into arrays with length elements.                                      |
|                     |  The last chunk may contain less than length elements.                                  |
| [arrDiff]           |  Compare array to another arrays to find its unique items.                              |
| [diffs]             |  Get unique items in two arrays or more without duplicates.                             |
| [cmn]               |  Get common items in multiple arrays without duplicates.                                |
| [isArrayOfArrays]   |  Check if array is an array of arrays.                                                  |
| [isArrayOfStrings]  |  Check if array is an array of strings.                                                 |
| [isArrayOfNumbers]  |  Check if array is an array of numbers.                                                 |
| [isArrayOfObjects]  |  Check if array is an array of objects.                                                 |
| [itemIn]            |  Check if item exists in one array at least, or in all the provided arrays.             |
| [allIn]             |  Check if all of the items exist in one array at least, or in all the provided arrays.             |
| [oneIn]             |  Check if one item at least from the list exist in one array at least, or in all the provided arrays. |
| [splitTo]           |  Split an array into n parts.                                                                |
| [shuffle]           |  Shuffle an array (randomize).                                                                                      |
| [filling]           |  Fill an array with multiple items, each of them repeated n times, with ability to shuffle it.                                 |
| [arrange]           |  Arrange array by same items (keeping same order of the unque items inside array).                                                                                       |
| [numRange]          |  Create array from a range of numbers with ability to skip.                             |
| [findAll]           |  Look for item indexes in array from start to end position.                                                                                       |
| [pop]               |  Remove (pops) the last item of an array without changing the original array.                                                                                       |
| [shift]             |  Shift (remove) the first item of the array without changing the original array.       |
| [unshift]           |  Add new items to the beginning of an array without changing the original array. |
| [push]              |  Add new items to the end of an array without changing the original array. |
| [splice]            |  Add and/or remove array items without changing the original array.                                                                |
| [sort]              |  Sort the array items as strings in alphabetical and ascending order without changing the original array.                                                                                       |
| [reverse]           |  Reverse the order of the items in an array without changing the original array.                                 |
| [reverseSort]       |  Sort the array items as strings in alphabetical and ascending order, then reverse the order of the items without changing the original array.                                                                                      |
| [isDense]           |  Check whether array is dense or sparse.                             |
| [longStr]           |  Return the longest string(s) in array                            |


## Methods && Parameters

| Method              | Parameter(s)                                                                                         |
| --------------      | ------------------------------------------------------------------------------------------------------- |
| [noDup]             |  Array (required)                                                                                       |
| [getDup]            |  Array (required)                                                                                       |
| [getUniq]           |  Array (required)                                                                                       |
| [occur]             |  Array (required) && item:Any (optional)                                                                |
|                     |                                                                                                         |
| [chunk]             |  Array (required) && len:Number (required)                                                              |
|                     |                                                                                                         |
| [arrDiff]           |  baseArray: Array(required) && Array of arrays or seperate arrays          (required)                                                       |
| [diffs]             |  Array of arrays or seperate arrays (required)                                                          |
| [cmn]               |  Array of arrays or seperate arrays (required)                                                          |
| [isArrayOfArrays]   |  Array (required)                                                                                       |
| [isArrayOfStrings]  |  Array (required)                                                                                       |
| [isArrayOfNumbers]  |  Array (required)                                                                                       |
| [isArrayOfObjects]  |  Array (required)                                                                                       |
| [itemIn]            |  item:Any(required) && oneArray:Boolean(required) && Array of arrays or seperate arrays(required)       |
| [allIn]             |  items:Array (required) && oneArray:Boolean (required) && Array of arrays or seperate arrays (required) |
| [oneIn]             |  items:Array (required) && oneArray:Boolean (required) && Array of arrays or seperate arrays (required) |
| [splitTo]           |  Array (required) && n:Number (required)                                                                |
| [shuffle]           |  Array (required)                                                                                       |
| [filling]           |  Array (required) && n:Number (required) && shuffled:Boolean (required)                                 |
| [arrange]           |  Array (required)                                                                                       |
| [numRange]          |  start:Number (required) && end:Number (required) && skip:Number (optional)                             |
| [findAll]           |  Array (required) && item:Any (required), start:Number (optional), end:Number (optional)                                                                                      |
| [pop]               |  Array (required)                                                                                       |
| [shift]             |  Array (required)       |
| [unshift]           |  Array (required) && items:Any (required) |
| [push]              |  Array (required) && items:Any (required)|
| [splice]            |  Array (required) && start:Number (required), deleteCount:Number (optional), items:Any (optional)                                                            |
| [sort]              |  Array (required) && compareFunc:Function (optional)                                                                                   |
| [reverse]           |  Array (required)                                |
| [reverseSort]       |  Array (required) && compareFunc:Function (optional)                                                                                      |
| [isDense]           |  Array (required)                             |
| [isDense]           |  Array (required) && order:Number (optional) default: 1;  order === 0 : return array of longest strings in array; order === 1 : return first longest string in array; order === -1 return last longest string in array.                 |

## Examples

```javascript
const array = require("array-power");

var list= [1, {foo: "loo"}, 3, 1, [1,2], 1, 2, [1, 2], false, 2, 2, 4, 3, 5, "1", 8, {"foo": "loo"} ];

// noDup(array):Remove duplicates from an array.
array.noDup(list);

// Output: [ 1, { foo: 'loo' }, 3, [ 1, 2 ], 2, false, 4, 5, '1', 8 ]

// getDup(array): Get duplicated items in array (return an array of items with no duplicates).
array.getDup(list);

// Output: [ 1, { foo: 'loo' }, 3, [ 1, 2 ], 2 ]

// getUniq(array): Get unique items in array.
array.getUniq(list);

// Output: [ false, 4, 5, '1', 8 ]

// chunk(array, length): Chunks an array into arrays with length elements. The last chunk may contain less than length elements.
array.chunk(list, 3);

// Output: [
//   [ 1, { foo: 'loo' }, 3 ],
//   [ 1, [ 1, 2 ], 1 ],
//   [ 2, [ 1, 2 ], false ],
//   [ 2, 2, 4 ],
//   [ 3, 5, '1' ],
//   [ 8, { foo: 'loo' } ]
// ]

// occur(array, items): Get the occurrences of an array item(s) (if provided) as well as all occurrences of array elements. Items can be an array of values or seperate values (example: array(list, 3, "1", 2)).
array.occur(list)

// Output: [
//  { item: 1, occurrence: 3 },
//  { item: { foo: 'loo' }, occurrence: 2 },
//  { item: 3, occurrence: 2 },
//  { item: [ 1, 2 ], occurrence: 2 },
//  { item: 2, occurrence: 3 },
//  { item: false, occurrence: 1 },
//  { item: 4, occurrence: 1 },
//  { item: 5, occurrence: 1 },
//  { item: '1', occurrence: 1 },
//  { item: 8, occurrence: 1 }
// ]

array.occur(list, 3);

// Output: [{ item: 3, occurrence: 2 }]

array.occur(list, 3, 1);

// Output: [ { item: 3, occurrence: 2 }, { item: 1, occurrence: 3 } ]

array.occur(list, [3, 1]);

// Output: [ { item: 3, occurrence: 2 }, { item: 1, occurrence: 3 } ]

array.occur(list, [1, 2]);

// Output: [ { item: 1, occurrence: 3 }, { item: 2, occurrence: 3 } ]

array.occur(list, [[1, 2]]);

// Output: [ { item: [ 1, 2 ], occurrence: 2 } ]

// arrDiff(baseArray, array of arrays or seperate arrays): Compare array to another arrays to extract its unique items (without duplicates).
array.arrDiff(list, [1, 3, 5,{"foo": "loo"},  6, 7]);

// Output: [ [ 1, 2 ], 2, false, 4, '1', 8 ]

array.arrDiff(list, [0, 3], [4, 5]);
// Output: [ 1, { foo: 'loo' }, [ 1, 2 ], 2, false, '1', 8 ]

array.arrDiff(list, [[0, 3], [4, 5]]);

// Output: [ 1, { foo: 'loo' }, [ 1, 2 ], 2, false, '1', 8 ]

// diffs(arrays of arrays or seperate arrays): Get unique items in two arrays or more (without duplicates).
array.diffs(list, [3, 9, 5, 1, 2, false, "home"]);

// Output: [ { foo: 'loo' }, [ 1, 2 ], 4, '1', 8, 9, 'home' ]

array.diffs(diffs(list, [1, 4,{foo: "loo"}, 5], [2, "Dog", 5]));

// Output: [ 3, [ 1, 2 ], false, '1', 8, 'Dog' ]

// cmn(array of arrays or seperate arrays): Get common items in two arrays or more.
array.cmn(list, [1, 4,{foo: "loo"}, 5], [2, "Dog", 5]);

// Output: [ 5 ]

array.cmn([[1, 3, "white"], [3, "red", 1], ["black", 6, 4]]);

// Output: []

// Check if array is an array of arrays.
array.isArrayOfArrays([[1, 2, 3], [], [23, "star", 12]]);

// Output: true

array.isArrayOfArrays([11, [1, 3, 5 ], ["keyboard", "flower", "football"]]);

// Output: false

// Check if array is an array of strings.
array.isArrayOfStrings(["BWM", "FORD", "Testla", "Google", "Facebook"]);

// Output: true

array.isArrayOfStrings(["BWM", "FORD", "Testla", 25, "Google", "Facebook"]);

// Output: false

// check if array is an array of numbers.
array.isArrayOfNumbers(["2", 3, 4, "1", 9]);

// Output: false

array.isArrayOfNumbers([2, 3, 4, 1, 9]);

// Output: true

// Check if array is an array of objects (arrays and null values are excluded).
array.isArrayOfObjects([{"firstName": "Elyes", "age":"28"}, {"firstName": "John", "age":"25"}, {"firstName": "Sarah", "age":"21"}]);

// Output: true

array.isArrayOfObjects([{"firstName": "Elyes", "age":"28"}, [2, 3, 5], {"foo": "loo"}]);

// Output: false

// itemIn(item: any value, oneArray: Boolean, array of arrays or seperate arrays): if oneArray is true, check if item exists in one array at least, else check that exists in all arrays.
array.itemIn(1, false, ["3", 1, 2], [1, 4, 25, 6], [2, 4, 8, 9, 1]);

// Output: true; 1 is included in all of the arrays;

array.itemIn(1, false, ["3", 1, 2], [2, 4], [1, 4, 25, 6], [2, 4, 8, 9, 1]);

// Output: false;

array.itemIn(1, true, ["3", 1, 2], [2, 4], [1, 4, 25, 6], [2, 4, 8, 9, 1]);

// Output: true; 1 is included in one array at least;

array.itemIn(7, true, ["3", 1, 2], [2, 4], [1, 4, 25, 6], [2, 4, 8, 9, 1]);

// Output: false;

// allIn(items: array of values, oneArray: Boolean, array of arrays or seperate arrays): if oneArray is true, check if all the items exist in one array at least, else check that exist in all arrays.
array.allIn([1, 2], false, [[4, 3, 5, 2, 1], [23, 99, 2, 12, 1, 3], [8, 1, 5, 2]]);

// Output: true; 1 and 2 are included in all of the arrays.

array.allIn([1, 2], false, [[3, 2, 5], [1, 2, 3, 4, 5], [1, 2, 9, 12]);

// Output: false 

array.allIn([1, 2], true, [[3, 2, 5], [1, 2, 3, 4, 5], [1, 2, 9, 12]);

// Output: true; 1 and 2 are included in one array at least.

array.allIn([1, 2], true, [3, 5, 6], [2, 3, 6], [1, 4, 4]);

// Output: false

// oneIn(items: array of values, oneArray: Boolean, array of arrays or seperate arrays): if oneArray is true, check if on item at least from the list exists in one array at least, else check that one item exist in all arrays.
array.oneIn(["white", "blue", "red"], false, ["yellow", "green", "red"], ["white", "red", "black"], ["red", "blue", "purple"]);

// Output: true; at least one item is included in all arrays, which is in this case the "red".

array.oneIn(["white", "blue", "red"], true, ["yellow", "green"], ["orange", "black"], ["pink", "purple"]);

// Output: false; no item is included in one array at least.

array.oneIn(["white", "blue", "red"], true, ["yellow", "white", "green"], ["orange", "black"], ["pink", "purple"]);

// Output: true; at least one item is included in one array, which is in this case the "white".

// splitTo(array, n): Split an array into n parts of non-empty arrays. Return an array of arrays. Maximum number of generated arrays is equal to the length of the initial array even n is superior to the array's length.

array.splitTo([1, 3, 5, 7, 9, 11, 13, 15], 3);

// Output: [[1, 3, 5], [7, 9, 11], [13, 15]]

// shuffle(array): Shuffle an array (randomize).

array.shuffle([3, 4, 5, 6, 7, 8]);

// Output: [5, 3, 8, 7, 4, 6]

// filling(array, n, shuffled): Fill an array with multiple items, each of them repeated n times,  with ability to shuffle it.

array.filling([1, 2, 3], 3, false);

// Output: [1, 1, 1, 2, 2, 2, 3, 3, 3]

array.filling([1, 2, 3], 3, true);

// Output: [3, 1, 1, 2, 3, 2, 1, 3, 2]

// arrange(array): Arrange array by same items (keeping same order of the unque items inside array).

array.arrange([1, 5, 3, 5, 2, 1, 1, 4, 5, 3, 3, 3, 6]);

// Output: [1, 1, 1, 5, 5, 5, 3, 3, 3, 3, 2, 4, 6]

// numRange(start, end, skip): Create array from a range of numbers with ability to skip.

array.numRange(5, 12);

// Output: [5, 6, 7, 8, 9, 10, 11, 12];

array.numRange(5, 12, 2);

// Output: [5, 7, 9, 11]

// findAll(array, item, start, end).
/**
 * Look for item indexes in array from start to end position.
 *
 * @param  {Array}  array
 * @param  {Any}    item Item to look for in the array.
 * @param  {Number} start The position from which to start searching for item in the array.
 * @param  {Number} end The position at which the search for item in the array stops.
 * @return {Array} Return array of indexes.
 */
array.findAll([2, 3, 1, 7, 4, 9, 1, 4], 1);

// Output: [2, 6]

array.findAll([2, 3, 1, 7, 4, 9, 1, 4], 1, 3 , 5);


// Output: [] there is no item = 1 between the index  3 and the index 5.

let exampleArray = [4, 2, 3, 1, 7];
// pop(array).
/**
 * Remove (pops) the last item of an array without changing the original array.
 *
 * @param  {Array} array
 * @return {Array} Return new array without the removed item (the last one).
 */

array.pop(exampleArray);

// Output: [4, 2, 3 ,1]

// shift(array).
/**
 * Shift (remove) the first item of the array without changing the original array.
 *
 * @param  {Array} array
 * @return {Array} Return new array without the removed item (the first one).
 */

array.shift(exampleArray);

// Output: [2, 3, 1, 7];

// unshift(array, ...items).
/**
 * Add new items to the beginning of an array without changing the original array.
 *
 * @param  {Array} array
 * @param  {Any} items The item(s) to add to the array. Minimum one item is required.
 * @return {Array} Return new array with the new items added to the beginning of the original array.
 */

array.unshift(exampleArray, 5);

// Output: [5, 4, 2, 3, 1, 7];

// push(array, ...items).
/**
 * Add new items to the end of an array without changing the original array.
 *
 * @param  {Array} array
 * @param  {Any} items The item(s) to add to the array. Minimum one item is required.
 * @return {Array} Return new array with the new items added to the end of the original array.
 */

array.push(exampleArray, 5);

// Output: [4, 2, 3, 1, 7, 5];

// splice(array, start, deleteCount = 0, ...items).
/**
 * Add and/or remove array items without changing the original array.
 *
 * @param  {Array} array
 * @param  {Number} start The position to add/remove items. Negative value defines the position from the end of the array.
 * @param  {Number} deleteCount Number of items to be removed.
 * @param  {Any} items New elements(s) to be added.
 * @return {Array} new array with added or/and without the removed elements from the original array.
 */

array.splice(exampleArray, 2, 0, 5, 6);

// Output: [4, 2, 5, 6, 3, 1, 7]

// sort(array, compareFunc).
/**
 * Sort the array items as strings in alphabetical and ascending order without changing the original array.
 *
 * @param  {Array} array
 * @param  {Function} compareFunc A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments.
 * @return {Array} new array with the items sorted.
 */

array.sort(exampleArray);

// Output: [1, 2, 3, 4, 7];

// reverse(array).
/**
 * Reverse the order of the items in an array without changing the original array.
 *
 * @param  {Array} array
 * @return {Array} return new array with the order of the elements in the original array is reversed.
 */

array.reverse(exampleArray);

// Output: [7, 1, 3, 2, 4];

// reverseSort(array, compareFunc).
/**
 * Sort the array items as strings in alphabetical and ascending order, then reverse the order of the items without changing the original array.
 *
 * @param  {Array} array.
 * @param  {Function} compareFunc A function that defines a sort order. The function should return a negative, zero, or positive value, depending on the arguments.
 * @return {Array} new array with the items sorted with reversed order.
 */

array.reverseSort(exampleArray);

// Output: [7, 4, 3, 2, 1]

// isDense(array).
/**
 * Check whether array is dense or sparse.
 *
 * @param  {Array} array
 * @return {Boolean} if true, array is dense, else is sparse.
 */

array.isDense(exampleArray);

//Output: true

exampleArray[100] = 8;
array.isDense(exampleArray);

//Output: false array is sparse.

// longStr(arr, order);
/**
 * get the longest sting(s) in array
 *
 * @param  {Array} arr
 * @param  {Number} order define the value to be returned, 0 = array of longests string in array; 1 = return the first longest string if there are multiple strings with same length; -1 = return the last longest string if there are multiple strings with same length.
 * @return {Array | String} the longest string(s) in array.
 */

const randomList = ["John Doe", 1, "My name is Elyes", 25, "How are you?",  "25d", "Hello world", "foo",  "My name is Sarra", "str"]

longStr(randomList, 0) // Output: [ 'My name is Elyes', 'My name is Sarra' ];
longStr(randomList, 1) // Output: 'My name is Elyes'
longStr(randomList, -1) // Output: 'My name is Sarra'
```