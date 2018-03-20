// module.exports = {
// 	x : function(input){
// 		var arr=[];
// 		return function(){
// 			arr.push(input);
// 			return arr;
// 		}
// 	}
// }
function x (x){
	var id = 0
	return function(){
		id += x; 
		return id ;
		}
}
console.log('x:', x)


const caller = x(5)
console.log('x called:', caller)
console.log('x called:', caller())
console.log('x called:', caller())
console.log('x called:', caller())
