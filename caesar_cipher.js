function cipher(string, key) {
	var strEnd = 0;
	var newChr = string
	
    strEnd = string[string.length-1].charCodeAt() + 1
    
    // Part 1 -- uses the keys number to add characters.
	for(var i = 1; i<key+1; i++){
		if(strEnd == 123){
			strEnd = 97
			newChr = newChr + String.fromCharCode(strEnd ++)
		}
		else{
			newChr = newChr + String.fromCharCode(strEnd ++)
		}
	}
		
			
	
	// Part 2 -- Trims the String down to 3 characters.
	if(newChr.length > 3){
		newChr = newChr.split(newChr[newChr.length-4]).pop()
		console.log(newChr)
		return newChr
	}
	else{
		console.log(newChr)
		return newChr
	}
}

//////////////////  TEST ///////////////

//String, Key

cipher("abc", 3)

cipher("xyz", 25)