function sort(array) {
	var temp = 0;
	
  for(var i = 0; i < array.length; i++){
		for(var j = 0; j <array.length; j++){
			if(array[i] < array[j]){
				temp = array[j]
				array[j] = array[i]
				array[i] = temp
			}
		}
	}
	return array
}



///////  TEST  /////////

sort([8, 5, 2, 9, 5, 6, 3])

sort([
    -4,
    5,
    10,
    8,
    -10,
    -6,
    -4,
    -2,
    -5,
    3,
    5,
    -4,
    -5,
    -1,
    1,
    6,
    -7,
    -6,
    -7,
    8
  ])
