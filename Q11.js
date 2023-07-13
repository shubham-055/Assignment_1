var Input = ["check", "wait", "work", "check", "go"];
const freq=new Set();
for(item of Input){
        freq.add(item,1);
}
console.log(freq);


//For notes purpose

// insert: Inserts a value into the set.
// contains: Checks if a value exists in the set.
// erase: Removes a value from the set.
// size: Retrieves the number of elements in the set.
// clear: Removes all elements from the set.
// values: Retrieves an array of all values in the set.
// forEach: Iterates over each value in the set.

// set.forEach((value) => {
//     console.log("Value:", value);
//   });