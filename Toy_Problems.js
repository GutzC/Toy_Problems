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