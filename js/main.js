




// Messages 




var messagesUn=document.getElementById("messagesUn")
var messages2=document.getElementById("messages2")
var messages3=document.getElementById("messages3")
var messages4=document.getElementById("messages4")
var btnLoock = document.getElementById("loock")
var btnLoockDeux = document.getElementById("loockDeux")
var imgUn =document.getElementById("imgUn")
var imgDeux =document.getElementById("imgDeux")
var nom = document.getElementById("nomLettre")



var messagesName =""
var employeur =""



//Lettre de motivation // 


var DommaineUn = "Téléconseiller/Télévendeur"
var DommaineDeux = " Dévloppeur Web "
var Dommaine3 = "Manutentionnaire"




//Affiche dommaine 


document.getElementById("dommaineUn").innerHTML=DommaineUn
document.getElementById("dommaine2").innerHTML=DommaineDeux
document.getElementById("dommaine3").innerHTML=Dommaine3



function messagesBienvenue() {

    messagesName = document.getElementById("formalert").value ;
    document.getElementById("name").innerHTML=messagesName;

    messagesUn.style.display="none"
    messages2.style.display="block"
   
    



}


function messagesBienvenueDeux() {


    employeur = document.getElementById("formalertDeux").value ; 

    messages2.style.display="none"
    messages3.style.display="block"
    btnLoock.style.display="block"
    btnLoockDeux.style.display="none"
    imgUn.style.display="none"
    imgDeux.style.display="block"
    



    document.getElementById("MerciName").innerHTML=messagesName ;

    document.getElementById("nom").innerHTML=messagesName ;
    document.getElementById("boite").innerHTML=employeur ;






}





