var words = ["ground", "control", "to", "major", "tom"];

function map(arr,cb){
	var newlis = []
	for(i in arr){
		newlis.push(cb(arr[i]))
	}
	console.log(newlis)
}

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


map(words,function(word) {
  return word.length;
});

