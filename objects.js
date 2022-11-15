const person = {
    firstName : "Ebenezer",
    lastName: "Scrooge",
    fullName : function(){
        return "Merry Christmas " + this.firstName + " " + this.lastName
    }
}
document.getElementById("p3").innerHTML = person.fullName()