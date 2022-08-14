const cases = document.getElementsByClassName('cliquable')

for (let uneCase of cases){
    uneCase.addEventListener('click', jouer)
}

let symbole = "X"
let tours = 0

function jouer(e){
    const laCase = e.target
    // si la case cliquée est vide
    if (laCase.textContent == ""){
        tours = tours + 1
        // on remplit la case avec un symbole
        laCase.textContent = symbole
        // on regarde si le joueur qui a joué a gagné
        if(verifierFinDePartie()){
            setTimeout(function(){
                alert("vous avez gagné")
                remettreZero()
            }, 100)
        }
        // on change de joueur donc de symbole
        if (symbole == "X"){
            symbole = "O"
        }
        else {
            symbole = "X"
        }
    }
    // si la case cliquée n'est pas vide
    else {
        alert("NON !")
    }
    if (tours == 9){
        alert("Vous avez tous perdu !")
        remettreZero()
    }
}

function verifierFinDePartie(){
    const cases = document.getElementsByClassName('cliquable')
    // première colonne
    if (cases[0].textContent != "" && cases[0].textContent==cases[1].textContent && cases[0].textContent==cases[2].textContent){
        return true
    }
    // deuxième colonne
    else if (cases[3].textContent != "" && cases[3].textContent==cases[4].textContent && cases[3].textContent==cases[5].textContent){
        return true
    }
    // troisième colonne
    else if (cases[6].textContent != "" && cases[6].textContent==cases[7].textContent && cases[6].textContent==cases[8].textContent){
        return true
    }
    // première ligne
    else if (cases[0].textContent != "" && cases[0].textContent==cases[3].textContent && cases[0].textContent==cases[6].textContent){
        return true
    }
    // deuxième ligne
    else if (cases[1].textContent != "" && cases[1].textContent==cases[4].textContent && cases[1].textContent==cases[7].textContent){
        return true
    }
    // troisième ligne
    else if (cases[2].textContent != "" && cases[2].textContent==cases[5].textContent && cases[2].textContent==cases[8].textContent){
        return true
    }
    // première diagonale
    else if (cases[0].textContent != "" && cases[0].textContent==cases[4].textContent && cases[0].textContent==cases[8].textContent){
        return true
    }
    // deuxième diagonale
    else if (cases[6].textContent != "" && cases[6].textContent==cases[4].textContent && cases[6].textContent==cases[2].textContent){
        return true
    }
    else{
        return false
    }
}

function remettreZero(){
    const cases = document.getElementsByClassName('cliquable')
    for (let uneCase of cases){
        uneCase.textContent = ""
    }
    tours = 0
}