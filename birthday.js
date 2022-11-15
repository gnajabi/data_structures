function birthdayMsg(name, age, msg){
    return "Hi " + name + "! you are now " + 
    age + " years old. " + msg
}

document.getElementById('p1').innerHTML = birthdayMsg("Bob", 20, "Yay!")
document.getElementById('p2').innerHTML = birthdayMsg