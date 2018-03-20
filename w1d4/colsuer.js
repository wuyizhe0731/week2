// var outer = function() {
//   var x = 10;

//   var inner = function() {
//     console.log("The value of x is: " + x);
//   }
//   return inner;
// };

// var foo = outer();
// foo();
function makeIdGenerator() {
  var id = 0;

  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  }
}


// makeIdGenerator returns a function which is assigned to
// the variable nextId
function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var id = -1

  return function() {
  	if (id < list.length - 1 ){
  		id += 1
  		//console.log("id number" + id)
  		return list[id] 
  	}
  	else {
  		id = -1 
  		id += 1
  		return list[id]
  	}
  	
    

    //return list[id]
  }
}
var output = makeLoadedDie()
console.log(output())
console.log(output())
console.log(output())
console.log(output())
console.log(output())
