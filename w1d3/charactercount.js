function charaCount(input){
	var splitlis = input.split("");
	//console.log(splitlis)
	var result = {};
	var key = "";
	//var count = 1;	
	for (var x = 0; x < splitlis.length ; x++ ){
		key = splitlis[x]
		if (result[key] == undefined ){
			 result[key] = 1
		}
		else{
			 result[key] +=1
			 console.log(result[key])
		}
	}
	return result

}
console.log(charaCount("eric is a chinese"))
// var a = {}
// a["l"]=""
// a["l"]="abd"
// console.log(a)