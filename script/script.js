 
  document.getElementById('reponse').addEventListener("click", maFonction);
  document.getElementById('validCouleur').addEventListener("click", selectCouleur)
  document.getElementById('validImg').addEventListener("click", selectImg)
  document.getElementById('valildModulo').addEventListener("click", modulo)
  document.getElementById('exo5').addEventListener("click", exo5)
  document.getElementById('exo7').addEventListener("click", exo7)
  document.getElementById('exo8').addEventListener("click", exo8)
  document.getElementById('ajout').addEventListener("click", ajout)
  document.getElementById('exo10').addEventListener("click", exo10)
  
  
  
  function maFonction() {
    var val1=document.getElementById('saisie1').value;
    var val2=document.getElementById('saisie2').value;
    var result=val1*val2;
    alert(val1+' multiplié par '+val2+' vaut '+result);
  }

  function selectCouleur() {
    var val=document.getElementById('coul').value;
    document.body.style.backgroundColor=val;
  }

  function selectImg() {
    var val=document.getElementById('cheminImg').value;
    var img=document.createElement('img');
    img.setAttribute('src', val);
    img.setAttribute('alt', val);
    document.body.appendChild(img);
  }

  function modulo() { 
    var val=document.getElementById('nbrModulo').value;
    var result=val%5;
    alert('Si l\'on divise '+val+' par 5, le reste est de '+result+'')
   }

   function exo5() {  //exo 6 inclus
     var calc1=prompt("Entrez votre age :");
     var calc2=prompt("Entrez l'age visé :")
     if (calc2<calc1) {
       alert('L\'âge visé doit être > à votre age')
     } else {
      var result1=calc1*365;
      var result2=(calc2*365)-result1;
      alert('Vous avez vécu '+result1+' jours. Il y a encore '+result2+' jours avant vos '+calc2+' ans."')
     };
   }
 
   function exo7() { 
    var calc1=confirm("Cliquez sur oui ou annuler");
    var el=document.getElementById('resultConfirm');
      if (calc1) {
        el.src='./img/smiley-heureux.jpg';
      } else {
        el.src='./img/smiley-triste.jpg';
      }
    }
  
    function exo8() {
      var saisie1=prompt("Entrez un nombre entier entre 0 et 5 :");
      var tabl=['zéro','un','deux','trois','quatre','cinq'];
      
      if (!(saisie1>=0 && saisie1<=5)) {
        alert('Le nombre saisi doit être compris entre 0 et 5')
      } else {
        alert(saisie1+' => '+tabl[saisie1]);
      }
    }

    function ajout() {
      var contenu=document.getElementById('contenu').value;
      var ul=document.getElementsByTagName('ul')[0];//on recupere l'ul
      var li=document.createElement('li');//on crée une li
      var content=document.createTextNode(contenu)//on crée un noeud de contenu
      if (contenu!=='') {
        li.appendChild(content);//on ajoute le contenu à la li
        ul.appendChild(li);
        document.getElementById('contenu').value='';//on vide la textbox
      }
    }
    
    // <!-- ### EXERCICE 10
    // * définir un nombre à deviner (et pourquoi pas avec Math.random()?)
    // * récupérer un nombre entré par l'utilisateur
    // * si le nombre de l'utilisateur est plus grand que celui à deviner, afficher "Trop grand !"
    // * si le nombre de l'utilisateur est plus petit que celui à deviner, afficher "Trop petit !"
    // * si le nombre est identique au nombre à deviner, afficher "Gagné!" -->
    function exo10() {
      aleatoire();
    }
    function aleatoire() {
      var initArea=0;
      var endArea=10;
      var nbEssais=3
      var cpt=0;
      var nbAleatoire=Math.floor(Math.random()*endArea)
      console.log(nbAleatoire);
      info='';
      while (cpt<nbEssais) {
        var saisie=prompt('Saisir le nombre secret (Nombre entier compris entre '+initArea+' et '+endArea+'), il vous reste '+(nbEssais-cpt)+' essai(s)');

        if (saisie>endArea || saisie<initArea) {
          alert('Le nombre doit être compris '+initArea+' et '+endArea+'')
        } else {
          var ecart=Math.sign(parseInt(saisie)-parseInt(nbAleatoire));
          var info='';
          switch (ecart) {
            case -1:
            info='Nbre saisie est trop petit !';
              break;
            case 1:
            info='Nbre saisie est trop grand !';
              break;
            case 0:
              info='Gagné !';
              alert(info);
              return//pour sortir de la fonction
              break;  
            default:
              break;
          }
          if (cpt==nbEssais-1) {info+=', vous avez échoué !'        }
            alert(info);
        }
        cpt++;
      }
    }
    // <!-- ### EXERCICE 11
    // * reprendre l'exercice précédent
    // * l'utilisateur a trois essais pour deviner le nombre
    // * s'il n'y arrive pas, un nouveau nombre est choisi aléatoirement -->