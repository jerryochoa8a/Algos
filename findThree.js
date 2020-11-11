function findThreeLargestNumbers(array) {
	var newArr = array.sort((a, b) => a - b); //   .sort( (a,b) => a-b );   //sorts an Array from least to greatest
	var bigThreeArr = [];
	
	for(var i= newArr.length-3; i< newArr.length; i++){
		bigThreeArr.push(newArr[i])
    }
    console.log(bigThreeArr)
	// return(bigThreeArr)
}


findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])

findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7])