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

/*
 Write a function called simpleSymbols that takes in a string parameter and determines if it is an acceptable sequence by
 either returning the string true or false. The str parameter will be composed of + and = symbols with several letters
 between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string
 to the left would be false. The string will not be empty and will have at least oe letter.
*/

var simpleSymbols = function(string){
    // Search through string until a letter is found
    for(var i = 0; i < string.length; i++){
        if(string[i] !== '+' && string[i] !== '='){
            if (string[i - 1] !== '+' || string[i + 1] !== '+') {
                return false;
            }
        }
    }
    return true;
}

//Given an arbitrary input string, return the first non-repeated character in the string. For example:
//
//firstNonRepeatedCharacter('ABA'); // =>'B'
//firstRepeatedCharacter('AABCABD'); // =>'C'

//Loop through string
//Compare values one at a time against remaining length of string
//Return value if duplicated

//Create object
//Create variable for current single value
//Check if value already on object
//If it is,

var firstNonRepeatedCharacter = function(string) {
    var hash = {};
    var answer = '';

    for (var i = 0; i < string.length; i++) {
        // If letter not in hash, add it with value 1
        if (!hash[string[i]]) {
            hash[string[i]] = 1;
        }
        // If letter is in hash, increment value
        else {
            hash[string[i]]++;
        }
    }
    for (var i = 0; i < string.length; i++) {
        if (hash[string[i]] === 1) {
            return string[i];
        }
    }
    return "No single characters";
};

//Write a function called ABCheck that takes a string parameter and returns the string true if the characters a and b
// are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because
// there is exactly three characters between a and b). Otherwise return the string false.

var ABCheck = function(str){
   //loop until you find an 'a'
   //check both directions to see if there is a 'b' at the fourth index from the 'a'
   for (var i = 0; i < str.length; i++){
       //debugger;
       if(str[i] === 'a'){
           if(str[i-4] === 'b' || str[i+4] === 'b'){
               return true;
           }
       }
   }
   return false;
}

// Write a function that generates an array of integers of the Fibonacci sequence, up to i = 100. The Fibonacci sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you ad the previous two numbers up. The first two numbers in the sequence are 0 and 1. Write a function to check if a given number is in the Fibonacci sequence, return "yes" if it is, if not return the string "no.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
//var fibonacci = function(max){
//    var num1 = 0;
//    var num2 = 1;
//    var fibArray = [];
//    fibArray.push(num1);
//
//    while((num1 + num2) < max){
//        fibArray.push(num2)
//        var temp = num2;
//        num1 = num2;
//        num2 = num1 + num2;
//    }
//    return fibArray;
//}

//Find the only item that occurs an even number of times in an array. If there is more than one item that occurs an even number of times, just return one of them. If there are no items that occur an even number of times, return null.

//var onlyEven = evenOccurence([1, 6, 2, 4, 4, 5, 6, 8, 9, 6]);
//console.log(onlyEven); // 4
//var onlyEven = evenOccurence([1, 1, 3, 4, 1]);
//console.log(onlyEven); // null

var onlyEven = function(arr){
    var temp = {};
    var tempArr = arr;
    tempArr.sort();
    debugger;
    for(var i = 0; i < tempArr.length; i++){
        // Check if the next value is different
        if(tempArr[i-1] != tempArr[i]){
            if(temp[tempArr[i-1]] % 2 === 0)
                return tempArr[i-1];
        }
        // Add
        if(temp[tempArr[i]] === undefined){
            temp[tempArr[i]] = 1;
        }
        // If it is already present, increment value by 1
        else{
            temp[tempArr[i]]++;
        }
    }
    return null;
}

// Write a function that accepts a number, n, and returns the nth Finonacci number. Use a recursive solution to this problem; if you finish with time left over, implement an iterative solution

// Iterative solution
var fibonacci = function(n){
    var sum = 0;
    var num1 = 0;
    var num2 = 1;
    for(var i = 1; i < n; i++){
        sum = num1+num2;
        num1 = num2;
        num2 = sum;
    }
    return sum;
}

// Recursive solution
var fibonacci = function(n){
    if(n <= 2){
        return 1;
    }
    return recursiveFib(n-1) + recursiveFib(n-2);
}

//Create a function that takes in three strings as parameters. The goal is to swap all X characters in the string for Y characters. For example: swapper('some string', 's', 'z') // returns 'zome ztring'

var swapper = function(string, oldChar, newChar){
    string = string.split('');
    for(var i = 0; i < string.length; i++){
        if(string[i] === oldChar){
            string[i] = newChar;
        }
    }
    return string.join('');
};

//Write a function that accepts a multi dimensional array and returns a flattened version
//flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]
//
// ******Works for single-digit numbers
// -- Need to have an inner-test of some sort that grabs all numbers between commas and pushes them together
//    and then increments i by the number of characters read

var flatten = function(arr){
    var str = arr.join();
    var newArr = [];
    for(var i = 0; i < str.length; i++){
        if(str[i] !== ',') {
            var count = 0;
            var temp = '';
            while(str[i + count] !== ',' && (i + count) < str.length) {
                temp += str[i+count];
                count++;
            }
            newArr.push(+temp);
            i += count;
        }
    }
    return newArr;
}

//given the above object, write a function that returns an object whose keys are the fields found below and whose values are objects containing all the values as keys and a count for how many times that value occurs

//e.g.
//{
//    kingdom: {Animalia: 6}
//    phylum: {Chordata: 6},
//    class: {Mammalia: 4, Reptilia: 1, Aves: 1}
//}

var animals = [
    {
        name: 'Dog',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Canidae',
        species: 'Canis lupus'
    },
    {
        name: 'Cat',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Carnivora',
        family: 'Felidae',
        species: 'Felis catus'
    },
    {
        name: 'Hippopotamus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Artiodactyla',
        family: 'Hippopotamidae',
        species: 'Hippopotamus amphibius'
    },
    {
        name: 'Playtpus',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mammalia',
        order: 'Monotremata',
        family: 'Ornithorhynchidae',
        species: 'Ornithorhynchus anatinus'
    },
    {
        name: 'Lizard',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Reptilia',
        order: 'Squamata',
        family: 'Agamidae',
        species: 'Pogona vitticeps'
    },
    {
        name: 'Blackbird',
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Aves',
        order: 'Passeriformes',
        family: 'Turdidae',
        species: 'Turdus merula'
    }
];

//  { kingdom: {Animalia: 6}
//    phylum: {Chordata: 6},
//    class: {Mammalia: 4, Reptilia: 1, Aves: 1
//  }


//code here
var getClassification = function(arr){
    newObj = {};
    for(var i = 0; i < arr.length; i++) {
        // Loop through each object in array
        for (var key in arr[i]) {
            debugger;
            if(!newObj[key]){
                newObj[key] = {};
            }
            //debugger;
            // If the key isn't found
            item = arr[i][key];
            if (!newObj[key][item]) {
                newObj[key][item] = 1;
            } else {
                newObj[key][item]++;
            }
        }
    }
    return newObj;
}

//create a function that takes an array of objects as an argument and a string that represents a property of an object contained in the array and returns an object whose keys are the properties and whose values are arrays of objects that match that property.

//e.g.
var arr = [
    {name: 'Joe Montana', team: '49ers'},
    {name: 'Jerry Rice', team: '49ers'},
    {name: 'Steve Young', team: '49ers'},
    {name: 'Tony Romo', team: 'Cowboys'},
    {name: 'Fred Biletnikoff', team: 'Raiders'},
    {name: 'Dick Butkus', team: 'Bears'},
    {name: 'Emmitt Smith', team: 'Cowboys'},
];

//code here

//should return:
{
    '49ers': [{name: 'Joe Montana', team: '49ers'}, {name: 'Jerry Rice', team: '49ers'}, {name: 'Steve Young', team: '49ers'}],
    'Cowboys': [{name: 'Tony Romo', team: 'Cowboys'}, {name: 'Emmitt Smith', team: 'Cowboys'}],
    'Bears': [{name: 'Dick Butkus', team: 'Bears'}],
    'Raiders': [{name: 'Fred Biletnikoff', team: 'Raiders'}]
}

var sort = function(arr, prop){
    var obj = {};
    for(var i = 0; i < arr.length; i++){
        if(!obj[arr[i][prop]]){
            obj[arr[i][prop]] = [];
        }
        obj[arr[i][prop]].push(arr[i]);
    }
    return obj;
}

// Write a function that can only be invoked once that can accept an arbitrary number of arguments

var once = (function(){
    var count = 0;
    return function(){
        if(count === 0) {
            console.log("Arguments passed in were: ")
            for(var i = 0; i < arguments.length; i++){
                console.log(arguments[i]);
            }
            count++;
        }
    }
})()

// Make the following code work:
/*
var counter = getCounter();
counter(); //2
counter(); //4
counter(); //6

 */
var getCounter = function(){
    var count = 0;
    return function(){
        return count += 2;
    }
}

//Given an amount of money as a float, format it as a string.
//formatMoney(2310000.159897); // '2 310 000.16'
//formatMoney(1600); // '1 600.00'

var formatMoney = function(num){
    num = [(num > 0) ? Math.floor(num) : Math.ceil(num), num % 1];

    num[0] = num[0].toString().split('');
    num[1] = num[1].toString().split('');
    var i = num[0].length - 3;
    while(i > 0){
        num[0].splice(i, 0, ' ');
        i -= 3;
    }

    num[0] = num[0].join('');
    num[1] = num[1].join('');
    num[1] = +num[1];
    num[1] = num[1].toFixed(2);
    num[1] = num[1].toString().split('');
    num[1].splice(0, 1);
    num[1] = num[1].join('');
    num = num.join('');

    return num;
}

//Make a function that takes a string with parens, brackets, braces

// Loop through string
// If I find a left bracket, push onto stack
// If I find a right bracket, check that it matches the top stack item and pop if it does, break if it doesn't
// Once end of string is reached, check that stack is empty or break

var checkString = function(str){
    var leftbrackets = ['(', '{', '<', '['];
    var rightbrackets = [')', '}', '>', ']'];
    var rightvalues = {
        ')': '(',
        '}': '{',
        '>': '<',
        ']': '['
    };
    var stack = [];

    for(var i = 0; i < str.length; i++){
        if(leftbrackets.indexOf(str[i]) !== -1){
            stack.push(str[i]);
        }
        if(rightbrackets.indexOf(str[i]) !== -1){
            if(stack[stack.length-1] === rightvalues[str[i]]){
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return (stack.length === 0) ? true :  false;
};

/* Create a function that takes a string of letters and returns them as a new string that has been sorted in alphabetical order */

var AlphabetSoup = function(str){
    //convert str to array
    //convert to lower-case
    //double loop through checking value against next value to see if it is higher, rearrange if so

    var newstr = str.toLowerCase().split("");
    console.log(newstr);
    for(var i = 1; i < newstr.length; i++){
        for(var j = 0; j < i; j++){
            //debugger;
            if(newstr[j] > newstr[i]){
                var temp = newstr[i];
                newstr[i] = newstr[j];
                newstr[j] = temp;
            }
        }
    }
    return newstr.join("");
}

// A Triangle has n number of rows. Each row has one less block than the row below it. Create a function that takes n and calculates the total number of blocks in the triangle.

// Example: triangle with 3 rows:
// Function returns 6

// Bonus create the triangle with asterisks

// Loop over number decrementing by 1 each time

var triangle = function(int){
    var total = 0;
    for (var i = 1; i <= int; i++){
        total += i;
    }
    return total;
}

var printit = function(num){
    for (var i=1; i<=num; i += 2)
    {
        var line = "";
        for (var k=0; k < ((num / 2) - i / 2); k++)
        {
            line += " ";
        }
        for (var j=0; j<i; j++)
        {
            line += "*";
        }
        console.log(line);
    }
}

// FIZZ BUZZ
// Write a function that console.logs numbrs from 1 to 100.
// But for multiples of 3, print 'fizz', for multiples of 5 print 'buzz', and for multiples of both 3 and 5, print 'fizz buzz'
//eg '1, 2, fizz, 4, buzz' etc

var fb = function(){
    var string = "1";
    for(var i = 2; i < 100; i++){
        if(i%15 === 0){
            string += ", fizzbuzz";
        } else if(i%3 === 0){
            string += ", fizz";
        } else if(i%5 === 0){
            string += ", buzz";
        } else {
            string += ", " + i;
        }
    }
    console.log(string);
}

// Palindrome
// Write a function that takes a string as an argument and determines whether or not the given string is a palindrome.
// Example: Acrobats stab orca

var palindrome = function(str){
    var string = str.split(' ').join('').split('').reverse().join('').toLowerCase();
    str = str.split(' ').join('').toLowerCase();
    if(string === str) {
        return true;
    } else {
        return false;
    }
}

//balancing brackets
var balance = function(string){
    var left = {
        "{": "}",
        "[": "]",
        "(": ")"
    }
    //debugger;
    var stack = [];
    for(var i = 0; i < string.length; i++){
        if(left.hasOwnProperty(string[i])){
            stack.push(string[i]);
        } else {
            for(var key in left){
                if(string[i] === key)
                    stack.pop();
                else {
                    return false;
                }
            }
        }
    }
    return true;
}

    // If current character is an open brackt, push it
    // If current character is a close bracket, check that it matches what is on top of stack.. if not, false
    // Return true at the end