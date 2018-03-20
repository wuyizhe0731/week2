//var input = process.argv[2];
var input = "avxz"
function x(original) {
  var list=[];
  var joinList=""
  joinList = original.split("").reverse().join('');
  // joinlist = list.join(list.reverse(original.split("")))
  console.log(list)
  console.log(original)
  return joinList
}

//if (input)
 console.log(x(input));


