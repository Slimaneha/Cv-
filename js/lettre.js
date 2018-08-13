
                 var selectElmtUn = document.getElementById("form2");
                 var web = "Intégrateur web"
                 post1 = ("Expérimenté dans le domaine de la télévente avec ou sans script, j’ai pu développer les techniques commerciales, un sens de l’argumentation, une aisance dans la communication et dans l’écoute nécessaires pour exercer le métier  dans des conditions optimales. Par ailleurs, j’ai acquis une bonne connaissance de la législation en vigueur relative à la vente à distance, ce qui me permet de travailler en toute sécurité pour mon entreprise et pour ses clients.     J’ai pu acquérir un regard juste sur  fonctionnement, des pratique et des exigences. Ainsi,  je suis certain de pouvoir m’adapter rapidement au sein de l’entreprise et aux cadences données. Attentif, organisé et rigoureux,  je saurai être au plus proche des attentes de vos clients tout en étant efficace et respectueux du règlement.  Ainsi, je suis certain de pouvoir m’adapter rapidement au sein de l’entreprise et aux cadences données.")
                 merci = "Je vous remercie par avance de l’intérêt que vous porterez à ma demande.   Je suis disponible de suite pour vous rencontrer lors d’un entretien au cours duquel je vous préciserai mes motivations de vive voix.Dans l’attente d’un retour, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées."
     
         // Poste 2 // 
         post2= ("Depuis toujours, les métiers de l’informatique me passionnent car ce sont des métiers dans lesquels rien n’est jamais acquis. En effet, il y aura toujours de nouvelles technologies qui feront évoluer le domaine. Résoudre les bugs, trouver la ligne qui a mal était écrite, comprendre l’erreur, voilà ce qui me plait!   Autodidacte et passionné, j’ai, au fil des années, développé des compétences techniques en informatique. En effet, je suis aujourd’hui parfaitement capable de maîtriser les langages HTML-5, CSS-3 et Javascript, je suis en mesure d’établir un cahier des charges avant la conception d’un site, de produire un wirefram et de concevoir un site internet statique. Par ailleurs, j’apprends depuis peu le langage php, ainsi je suis convaincu de gagner d’avantage d’autonomie dans la conception de sites.    D’autre part, mes expériences professionnelles m’ont donné la possibilité de développer une facilité à entrer dans le dialogue avec les clients, à comprendre leurs besoins, leurs envies et leurs préoccupations. Ainsi, je suis en mesure de guider le client vers un produit adapté  à ses besoins, tout en n’oubliant pas mes objectifs. Enfin, j’ai acquis les techniques commerciales, un sens de l’argumentation, une aisance dans la communication et dans l’écoute nécessaires pour exercer le métier dans des conditions optimales.  Doté d’un sens de l’adaptabilité, organisé et rigoureux, je saurai être au plus proche des attentes de vos clients, m’intégrer au sein de votre entreprise et travailler sur différents systèmes d’exploitation. <br>  ")
         post3= ("Mes expériences professionnelles passées, m’ont permis de développer des connaissances dans les règles d’hygiène et de sécurité et d’en développer la maîtrise. Elles m’ont permis, également, d’acquérir une vision juste du métier d’Agent de logistique et de ses exigences. Aujourd’hui, je suis capable d’utiliser le scanner à lecteur optique, le transpalette électrique ou manuel, de constituer des colis à partir d’un bon de commande, d’en contrôler la qualité et de les conditionner. Respectueux des cadences, dynamique et organisé je saurai mener l’ensemble des tâches qui me seront confiées. Le tout dans l’intérêt de la satisfaction de vos clients, du bon fonctionnement de votre entreprise et dans une volonté d’intégration au sein de vos équipes. Je suis disponible de suite pour vous rencontrer lors d’un entretien au cours duquel je vous préciserai mes motivations de vive voix.Dans l’attente d’un retour, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.  ")
     
     
     
                         function compar () {
                             choixUn = textselectionne = selectElmtUn.options[selectElmtUn.selectedIndex].text;
     
     
                             if (choixUn === téléconseiller){
                                 document.getElementById("one").style.display="none"
                                 document.getElementById("formation").style.display="none"
                                 document.getElementById("lettre-type").style.display="block"
                                 document.getElementById("entre").innerHTML=entreprise; 
                                 document.getElementById("postePe").innerHTML=posteDeux; 
                                 document.getElementById("nom5").innerHTML=nom; 
                                 document.getElementById("corp").innerHTML=post1
                                 document.getElementById("merci").innerHTML=merci
                                 document.getElementById("poste").innerHTML=téléconseiller
                                 document.getElementById("off-1").style.display="none"
                                 document.getElementById("one").style.display="none"
                                 document.getElementById("off-2").style.display="none"
                                 document.getElementById("off-3").style.display="none"
                                 
                                
     
                             }
     
                             else if (choixUn === web){
                                 document.getElementById("formation").style.display="none"
                                 document.getElementById("one").style.display="none"
                                 document.getElementById("lettre-type").style.display="block"
                                 document.getElementById("lettre-type").style.display="block"
                                 document.getElementById("entre").innerHTML=entreprise; 
                                 document.getElementById("postePe").innerHTML=posteDeux; 
                                 document.getElementById("nom5").innerHTML=nom; 
                                 document.getElementById("corp").innerHTML=post2
                                 document.getElementById("merci").innerHTML=merci
                                 document.getElementById("poste").innerHTML=web
                                 document.getElementById("off-1").style.display="none"
                                 document.getElementById("one").style.display="none"
                                 document.getElementById("off-2").style.display="none"
                                 document.getElementById("off-3").style.display="none"
            
     
     
     
     
                             }
     
                             else if (choixUn === manutentionnaire ){
                                 document.getElementById("formation").style.display="none"
                                 document.getElementById("one").style.display="none"
                                 document.getElementById("merci").innerHTML=merci
                                 document.getElementById("lettre-type").style.display="block"
                                 document.getElementById("lettre-type").style.display="block"
                                 document.getElementById("entre").innerHTML=entreprise; 
                                 document.getElementById("postePe").innerHTML=posteDeux; 
                                 document.getElementById("nom5").innerHTML=nom; 
                                 document.getElementById("corp").innerHTML=post3
                                 document.getElementById("poste").innerHTML=manutentionnaire
                                 document.getElementById("off-1").style.display="none"
                                 document.getElementById("one").style.display="none"
                                 document.getElementById("off-2").style.display="none"
                                 document.getElementById("off-3").style.display="none"
     
     
                                
     
     
     
                             }
                             
     
     
                         }




                         function afficheLettre () {
                             document.getElementById("lettre-modale").style.display="block"
                         }

                         afficheLettre()