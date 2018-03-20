var list = [1,2,3,4,5]
var a = list.reduce(function(a,b){
	return a - b
})
console.log(a)

function firsttry(lis,callback){
	var result = 0
	for (i in lis){
		// result += lis[i]//console.log(lis[i])
		return callback(result,lis[i],i,lis)
	}
	
}

function test(result, x){
	console.log("result", result);
	console.log("x ",x);
	var a 
	return  a = result + x;

}
//console.log(b)
var result = firsttry(list, test);
console.log(result);