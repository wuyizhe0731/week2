function stock(inputarr){
	var prof =[];
	var x = 0 ; //difference between element in arry
	for (var i = 0 ; i < inputarr.length ; i++){
		for (var index = i + 1; index < inputarr.length; index++){
			x = inputarr[index] - inputarr[i]
			prof.push(x)
		}

	}
	prof.sort(function (a,b){
		return b - a 
	})
	 return prof[0]
}
console.log(stock([45, 24, 35, 31, 40, 38, 11]))