/**
 * Created by cglapto on 1/12/2015.
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