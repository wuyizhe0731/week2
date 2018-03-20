function charaCount(input){
	var splitlis = input.split("");
	//console.log(splitlis)
	var result = {};
	var key = "";
	//var count = 1;	
	for (var x = 0; x < splitlis.length ; x++ ){
		key = splitlis[x]
		if (result[key] == undefined ){
			 result[key] = x.toString()
		}
		else{
			 result[key] =result[key] +"," +  x.toString()
			 console.log(x.toString())
			 console.log(result[key])
		}
	}
	return result

}
 console.log(charaCount("abcab"))
// // var a = {}
// // a["l"]=""
// // a["l"]="abd"
// // console.log(a)
// var a = 15
// var b = a.toString()
// var c = b + b
// console.log(c)