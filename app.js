// Copies the array for a given number
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
console.log(copyMachine(["Renu", "Renu"], 6));

// Function to check if a number exists in an array
function quickCheck(arr, elem) {
  // change code below this line
  if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// Function to see if nested array pass the test
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  for( let i= 0 ; i< arr.length; i++){
    if (arr[i].indexOf(elem) === -1){
      newArr.push(arr[i]);
    }
  }
  // change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));

// Append to strings
function appendToString (str1, str2) {

return str1  +  str2;
}
console.log(appendToString("Hello", "World"));

// prependToString
function prependToString(str1, str2) {
  return str2 + str1;
}
console.log(prependToString("awsome", "very"));

// character At

function charAt (string,index) {
  if (index > string.length){
    return '';
  } else {
    return string[index];
  }
}
console.log(charAt("awesome", 2));

// stringIncludes
function stringIncludes (word,character){

  for(i = 0;i <= word.length; i++) {
    if( word[i] === character){

      return true;
    }
  }
  return false;
}
console.log(stringIncludes("awesome", "e"));

// stringIndexOf
function stringIndexOf ( string, char) {
  for (var i = 0; i < string.length; i++) {
      if( string [i] === char) {
        return i;
      }
  }
  return -1;
}

console.log(stringIndexOf("awesome", "e"));
console.log(stringIndexOf("awesome", "z"));

// Maximum of an array
function max(array){
  let max = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max= array[i];
    }
  }
  return max;
}

console.log(max([5, 1, 4, 7, 1, 2]));

// Minimum in an filteredArray
function min(array){
  let min = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min= array[i];
    }
  }
  return min;
}

console.log(min([5, 1, 4, 7, 1, 2]));

// Reverse a string (Using built in methods)
function reverseString (str){
  let newStr = str.split("").reverse().join("");

  return newStr;

}
console.log(reverseString("hello"));

// Reverse a string using for loop
function reverseAString (str) {
  let finalStr = "";
  for ( let i = str.length-1; i>=0; i--) {
   // console.log(str[i]);
   finalStr = finalStr + str[i];
  }
  return finalStr;
}
console.log(reverseAString("Hello"));

// Factorialise a number

function factorial (num) {
  var result =1;
  if (num === 0 || num ===1) {
    return 1;
  }
  for( let i=1; i<=num; i++){
    result *= i
  }
  return result;
}
console.log(factorial(1));

// Countdown numbers

function countDown(num) {
   if (num === 0) {  // base condition
    return;
  } else {
   console.log(num);
   countDown(num-1);
  }
}
console.log(countDown(10));

// Palindrome check
function palindrome(str) {
  let regEx = /[\W_]/g; // non alphanumeric characters
  let regExLowcaseStr = str.toLowerCase().replace(regEx, "");
  let reverStr = regExLowcaseStr.split("").reverse().join("");

  if (reverStr === regExLowcaseStr) return true;
  return false;
}
console.log(palindrome("race car"));

// Longest word in a string

function findLongestWordLength(str) {
 let wordArray = str.split(" ");
   //console.log(wordArray);
  let longest = "";
  for ( let i=0; i< wordArray.length; i++) {
    if (wordArray[i].length > longest) {
      longest = wordArray[i].length;
    }
  }
  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));