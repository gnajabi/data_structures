function birthdayMsg(name, age, msg){
    return "Hi " + name + "! you are now " + 
    age + " years old. " + msg
}

document.getElementById('paragraph').innerHTML = birthdayMsg("Bob", 20, "yay!")
