




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





var A2018 = document.getElementById("Ab2018")
var A2017 = document.getElementById("Ab2017")
var A2016 = document.getElementById("Ab2016")
var A2015 = document.getElementById("Ab2015")
var A2014 = document.getElementById("Ab2014")

var back = document.getElementById("backCV")


// carte 

 var B2018 = document.getElementById("Ac2018")
 var B2017 = document.getElementById("Ac2017")
 var B2016 = document.getElementById("Ac2016")
 var B2015 = document.getElementById("Ac2015")
 var B2014 = document.getElementById("Ac2014")





function G2018 () {


    A2018.style.backgroundColor="#FFE599"
    A2018.style.color="#5B4841"
    A2018.style.borderColor ="#5B4841"

    // Changement de couleur text séléctioner 

    A2017.style.display="none"
    A2016.style.display="none"
    A2015.style.display="none"
    A2014.style.display="none"
    back.style.display = "block"

    B2018.style.display="block"
   



    
}

function G2017 () {


    A2017.style.backgroundColor="#FFE599"
    A2017.style.color="#5B4841"
    A2017.style.borderColor ="#5B4841"

    // Changement de couleur text séléctioner 

    A2018.style.display="none"
    A2016.style.display="none"
    A2015.style.display="none"
    A2014.style.display="none"
    back.style.display = "block"

    B2017.style.display="block"
   



    
}

function G2016 () {


    A2016.style.backgroundColor="#FFE599"
    A2016.style.color="#5B4841"
    A2016.style.borderColor ="#5B4841"

    // Changement de couleur text séléctioner 

    A2018.style.display="none"
    A2017.style.display="none"
    A2015.style.display="none"
    A2014.style.display="none"
    back.style.display = "block"

    B2016.style.display="block"
   



    
}

function G2015 () {


    A2015.style.backgroundColor="#FFE599"
    A2015.style.color="#5B4841"
    A2015.style.borderColor ="#5B4841"

    // Changement de couleur text séléctioner 

    A2018.style.display="none"
    A2017.style.display="none"
    A2016.style.display="none"
    A2014.style.display="none"
    back.style.display = "block"

    B2015.style.display="block"
   



    
}

function G2014 () {


    A2014.style.backgroundColor="#FFE599"
    A2014.style.color="#5B4841"
    A2014.style.borderColor ="#5B4841"

    // Changement de couleur text séléctioner 

    A2018.style.display="none"
    A2016.style.display="none"
    A2015.style.display="none"
    A2017.style.display="none"
    back.style.display = "block"

    B2014.style.display="block"
   



    
}



// Fuction Retour 


function retour () {
    A2018.style.display="block"
    A2017.style.display="block"
    A2016.style.display="block"
    A2015.style.display="block"
    A2014.style.display="block"
  
  
 // none  
    B2018.style.display="none "
    B2017.style.display="none "
    B2016.style.display="none "
    B2015.style.display="none "
    B2014.style.display="none "
    
    
    back.style.display = "none"
}