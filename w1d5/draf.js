function mode(arr){
	var result = {};
	var key = null;
	var comp =null;
	var winner =null;

	for (var i = 0; i < arr.length; i++){
		key = arr[i];
		if (result[key] ==undefined) {
			result[key] = 1 
		}
		else{
			result[key] +=1
		}
	}
	for (x in result){
		if (result[x] > comp){
			comp = result[x];
			winner = x;
		}
	}
	return winner	 
}

//var playob = mode([6,6,2,3])
console.log(mode([6,6,2,3]))

// var newar= [];
// var comp = playob[]
// for (i in playob){
// 	if (playob[i] > comp){
// 		comp = playbo[i]
// 	}

// }



// console.log(comp)