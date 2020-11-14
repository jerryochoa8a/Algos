function isPalindrome(string) {
	var tempStr = ""
  for (var i = string.length - 1; i >= 0; i--){
		tempStr = tempStr + string[i]
	}
	if(tempStr == string){
		return true;
	}
	else{
		return false;
	}
}


/////  TEST   ///////// 

isPalindrome("racecar") //true

isPalindrome("abcdefg") //false