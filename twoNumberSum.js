function twoNumberSum(array, targetSum) {
	var tempArr = [];
	var tempNum = 0;
	var num1 = 0;
	var num2 = 0;
	for(i=0; i<array.length; i++){
		for(j=1; j<array.length; j++){
			 tempNum = array[i] + array[j]
			if(tempNum == targetSum){
				num1 = array[i]
				num2 = array[j]
			}
		}
	}
	if(targetSum != num1 + num2 ){
			return []
		}
	else{
		tempArr.push(num1);
		tempArr.push(num2);
    }
    console.log(tempArr)
	// return tempArr
}

//////////////////  TEST  //////////////

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)

twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)

