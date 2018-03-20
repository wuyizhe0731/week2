function printInFrame(list) {
  var x = list.split(' ');
  var longest = longestStr(list).length;
  //console.log(longest)
  var borderstarts = longest + 4
  var border = repeat('*', borderstarts);

  console.log(border);
  for (word of x) {
    console.log('* ' + word + repeat(' ', longest - word.length + 1  ) + '*');
  }
  console.log(border);
}

function repeat(str, times) {
  var result = str;

  for (var i = 0; i < times; i++) {
    result += str;
  }
  return result;
}

function longestStr(list) {
  var input = list.split(" "); 
  var longest = input[0];
  
  for (var i = 0 ; i < input.length ; i++) {
    if (input[i].length > longest.length){
      longest = input [i]
    }
    
  }

  return longest;
}

//console.log(longestStr("abc ade adsefg"))


//Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');



printInFrame('123 khlkhklhljl oo hjh jhj');


printInFrame('sakldjfla akjfdl ks dfjkalsa ');
printInFrame('Lost, like tears in the rain');
printInFrame('Lost, like tears in the rain');
printInFrame('Lost, like tears in the rain');