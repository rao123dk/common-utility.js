# common-utility.js

### [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/rao123dk/common-utility.js/issues)

[![HitCount](http://hits.dwyl.io/rao123dk/common-utilityjs.svg)](http://hits.dwyl.io/rao123dk/common-utilityjs)



# Table of Contents
 * [Array](#array)
 * [Object](#object)
 * [String](#string)
 * [Number](#number)

 # Array
#### is Array Empty ?
Code:-
```javascript
[1,2,3].isEmpty();
```
Example:-
```javascript
const array = [];
console.log(array.isEmpty());
Output :- True
```
#### Remove duplicate items from array
Code:-
```javascript
[1,2,3,3].unique()
```
Example:-
```javascript
let data = ["a", "f", "e", "w", "r", "e", "o", "j", "j","w"];
console.log(data.unique());
Output :- ["a", "f", "e", "w", "r", "o", "j"]
```

#### Remove all falsy values: (undefined, null, 0, false, NaN and "") from array
Code:-
```javascript
[8, null, undefined,0].clean()
```
Example:-
```javascript
let data = [8, null, undefined,0, 6];
console.log(data.clean());
Output :- [8,6]
```

#### Deep copy array
Code:-
```javascript
[8, null, undefined,0].copyArray()
```
Example:-
```javascript
let data = [8, null, undefined,0];
let newArray = data.copyArray();
data.push(55)
console.log(newArray);
Output :- [8, null, undefined,0]
```


 # Object


 # String

 # Number

