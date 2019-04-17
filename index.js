/*
 Returns a [parts]-length array of equal or nearly equal
  integers that add up to [num].
 */
var splitInteger = function(num, parts) {
    // Complete this function
    // let's declare and assign our variables with their respective values
    let [i, total, j = i] = [num, parts];
  
    /* I don't want to change 'min' & 'arr', so i will declare them as constants
     and 'min' assigned avalue 2 & arr with an empty array list .
     But we will update it with a new values in the list
    */ 
    const [min, arr] = [2, []];
  
    // Am using a do-while loop here to text the condition and end the list if 'total' has reached 10
  
    do {
      i -= min; // Let's subtract 'min' from 'i'
      arr.push(i > min ? min : j - total); // push 'min' or remainder
      total += arr[arr.length - 1]; // Let's keep track of total
    } while (i > min); 
  
    // I want to return the new 'arr'
    return arr;
  }
  
  // oh wawoo... let's call our function to take on num = 10, parts = 5
  var result = splitInteger(10, 5);
  var result = splitInteger(20, 6);
  // Try to log some result into the console
  console.log(result);