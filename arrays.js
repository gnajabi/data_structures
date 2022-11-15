function testArrays(){
    const person = {name: "Bernie", age: 25}
    person.msg = "Happy birthday!"
    const arr = [2, 3, 4, 5, 6]
    try{
        for(var i = 0; i < arr.length; i++){
            if(i == 1){
                continue
            }
            console.log(arr[i] + " ")
        }
        console.log(typeof(person))

        return "Hi " + person.name + "! you are now " + 
        person.age + " years old. " + person.msg
    }
    catch(err){
        document.write(err)
    }
    
}
document.write(testArrays())