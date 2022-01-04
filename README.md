# array-power

## Description
This package includes a set of useful array methods that facilitates working with arrays, specifically the arrays that contain objects or arrays even falsy values (such as: 0, null, false, NaN...).

## Usage
```
npm install array-power
```
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
```

<br>
<br>

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
