function testArrays(){
    let arr = [1, 2 , 3, 4]
    for(i = 0; i < arr.length; i++){
        if(i == 1){
            continue
        }
        document.write(arr[i] + " ")
    }
}