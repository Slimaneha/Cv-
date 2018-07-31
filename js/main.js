




// Messages 




var messagesUn=document.getElementById("messagesUn")
var messages2=document.getElementById("messages2")
var messages3=document.getElementById("messages3")
var messages4=document.getElementById("messages4")


var messagesName =""

function messagesBienvenue() {

    messagesName = document.getElementById("formalert").value ;
    document.getElementById("name").innerHTML=messagesName;

    messagesUn.style.display="none"
    messages2.style.display="block"



}

