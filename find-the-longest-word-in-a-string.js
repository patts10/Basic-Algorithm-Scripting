
// Return the length of the longest word in the provided sentence.

// Your response should be a number.

function findLongestWordLength(str) {

  let arrWords = str.split(' ');
  let longest = '';

  for( let i = 0; i < arrWords.length; i++ ) {
    if( arrWords[i].length > longest.length ) {
      longest = arrWords[i];
    }
  }
  return longest.length;
}

console.log( findLongestWordLength("The quick brown fox jumped over the lazy dog") );
