function testArrays(arr){
    try{
        for(var i = 0; i < arr.length; i++){
            if(i == 1){
                continue
            }
            document.write(arr[i] + " ")
        }
    }
   
    catch(err){
        document.write(err)
    }
    
}
const arr = [2, 3, 4, 5, 6]
testArrays(arr)