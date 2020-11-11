function InOrder(array) {
    var temp = 0;
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array.length; j++) {
            temp = array[i]
            while (array[i] < array[j]) {
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    console.log(array)
    //   return(array)
}

////////////////////////////////////////////////////  

function InOrder2(array) {
    var newArr = array.sort((a, b) => a - b)

    console.log(newArr);
    return (newArr);
}



///////////////////////  TEST  //////////////////////////// 

InOrder([-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8])

InOrder2([-7, 2, 3, 8, -10, 4, -6, -10, -2, -7, 10, 5, 2, 9, -9, -5, 3, 8])


