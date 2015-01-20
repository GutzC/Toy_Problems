/**
 * Problem One
 * Write a function called finder that accepts two parameters, the first one is a string and the second is an array.
 * Have your function return true if the string is found in the array and false if i is not.
 */
var finder = function(word, collection){
    if(collection.indexOf(word) !== -1){
        return true;
    }
    else{
        return false;
    }
}

var nums = ["hello", "javascript", "awesome"];
finder("javascript", nums);
finder("lame", nums);

/*
Write a function called Reverse that takes in a string and returns the string reversed. Do NOT use .reverse() method
on the Arrays prototype
 */

var reverse = function(string){
    var newString = "";
    for(var i = string.length; i > 0; i--){
        newString += string[i-1];
    }
    return newString;
}

/*
 Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.
 plusOneSum([1, 2, 3, 4]); // 14
 */
var plusOneSum = function(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += (arr[i] + 1);
    }
    return sum;
}


/*
 Write a function that accepts a multi dimensional array and returns a flattened version.
 flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]
 */

var flatten = function(arr){
    var flattenedArray = [];
    return flattenedArray.concat.apply(flattenedArray, arr);
}


/*
 Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to
 [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]
 */

/*
 Sample patterns with values I used to decide how to solve
 A1 a2 a3 a4 a5
 B1 b2 b3 b4 b5
 C1 c2 c3 c4 c5
 0 1 2 3 4
 5 6 7 8 9
 10 11 12 13 14
 Each letter has size/3 values
 A1 = i
 B1 = i + size/3
 C1 = i + (size/3) * 2
 0, 5, 10
 1, 6, 11
 2, 7, 12
 */
var rearrangeInThirds = function(arr){
    var newArr = [];
    var multiplier = arr.length / 3;
    for(var i = 0; i < multiplier; i++){
        newArr.push(arr[i], arr[i + multiplier], arr[i + multiplier * 2]);
    }
    return newArr;
}

/*
 There is an array of non-negative integers. A second array is formed by shuffling the elements of
 the first array and deleting a random element. Given these two arrays, find which element is missing in
 the second array.
 */
var findMissingValue = function(originalArray, changedArray){
    for(var i = 0; i < originalArray.length; i++){
        if(changedArray.indexOf(originalArray[i]) === -1){
            return originalArray[i];
        }
    }
}


/*
 Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate
 words (case-insensitive).
 Example
 longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
 longestWords("I gave a present to my parents") // ["present", "parents"]
 longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]
 */
var longestWords = function(arr){
    //debugger;
    var longest = 0;
    var words = {};
    var longestWords = [];
    arr = arr.toLowerCase().split(" ");
    for(var i = 0; i < arr.length; i++){
        if(words[arr[i]] > 0){
            continue;
        } else {
            if(arr[i].length >= longest){
                longest = arr[i].length;
            }
            words[arr[i]] = arr[i].length;
        }
    }
    for(var key in words){
        if(words[key] === longest){
            longestWords.push(key);
        }
    }
    return longestWords;
}

/*
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of
 these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
 */

var multiplesOfThreeOrFive = function(limit){
    var sum = 0;
    for(var i = 1; i < limit; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum += i;
        }
    }
    return sum;
}


/*
 Remove duplicate characters in a given string keeping only the first occurrences. For example, if the
 input is ‘tree traversal’ the output will be "tre avsl".
 */
var removeDuplicates = function(string){
    var tempArray = [];
    debugger;
    string = string.split("");
    for(var i = 0; i < string.length; i++){
        if(tempArray.indexOf(string[i]) === -1){
            tempArray.push(string[i]);
        }
    }
    return tempArray.join("");;
}


/*
 Write a sum method which will work properly when invoked using either syntax below.
 console.log(sum(2,3));   // Outputs 5
 console.log(sum(2)(3));  // Outputs 5
 */
var sum = function(x){
    if(arguments.length == 2){
        return arguments[0] + arguments[1];
    } else {
        return function(y){
            return x + y;
        }
    }
}

/*
 Write a function named replaceOdd that takes in an array of numbers and changes all of the odd numbers to the letter 'O'.
 */
var replaceOdd = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i] = 'O';
        }
    }
}

/*
    Write a function that returns the factorial of a number.
 */

var factorial = function(num){
    if(num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
}