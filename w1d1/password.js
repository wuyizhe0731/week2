var args = process.argv;
function test(x){
   var z = x.replace("a","4")
   var y = z.replace("e","3")
   var n = y.replace("o","0")
   var m = n.replace("l","1")
   return m
   

}
var word = "password"
console.log(test(args))



