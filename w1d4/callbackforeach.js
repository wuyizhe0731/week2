 //var x =["a","b","c","d",1,2,3,4]


// function myforeach(list,cb){
// 	cb(list)

// }
// function callback(list){
// 	for (var i = 0 ; i < list.length ; i ++){
// 		console.log(list[i])
// 	}
// }

// 	 myforeach(x,callback)
// console.log(x.forEach(function(element)){
// 	console.log(element)
// });
function findWaldo(arr, found) {
	findindex(arr,found)
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i); 
  // arr.forEach(function(element){
  // 	if (element ==="Waldo"){
  // 		found(arr.indexOf(element))

  // 	}
  // })
}
//  }
//}
function findindex(list, x){
	list.forEach(function(element){
		if (element ==="Waldo"){
			 x (list.indexOf(element))
			}
		})
	
}

function actionWhenFound(index) {
  console.log("Found him! at index :" , index );
}

 findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound)
// x.forEach(function(element){
// 	if (element === 1){ 
// 	  console.log(x.indexOf(element)) 
//     }
// })


