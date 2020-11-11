function isValidSubsequence(array, sequence) {
    // Write your code here.
      var tempNum = 0;
      var lengthNum = 0;
      for(var i=0; i< array.length; i++){
          if(sequence[tempNum] == array[i]){
              tempNum = tempNum + 1
              lengthNum = lengthNum + 1
          }
      }
      if(lengthNum == sequence.length){
          console.log(true)
          return true;
      }
      else{
          console.log(false)
          return false;
      }
  }



////////////   TEST  ////////////////

isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10], //array
    [5, 1, 22, 25, 6, -1, 8, 10, 12] //sequence
)

isValidSubsequence(
    [5, 1, 22, 25, 6, -1, 8, 10],  //array
    [1, 6, -1, 10]  //sequence
)

