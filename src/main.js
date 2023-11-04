const cases = document.getElementsByClassName('cliquable')

for (let uneCase of cases){
    uneCase.addEventListener('click', jouer)
}

let joueurQuiJoue = 1
let tours = 0
let score1 = 0
let score2 = 0

function jouer(e){
    if (document.getElementById("popup").style.display == 'flex') {
        console.log("partie terminée")
    }
    else {
        const symbole = document.querySelector('input[name="symbole' + joueurQuiJoue + '"]:checked').value
        const laCase = e.target
        // si la case cliquée est vide
        if (laCase.textContent == ""){
            tours = tours + 1
            const inputs = document.querySelectorAll('div#symbole1 input, div#symbole2 input')
            for (let input of inputs){
                input.disabled = true
            }
            // on remplit la case avec un symbole
            laCase.textContent = symbole
            // on regarde si le joueur qui a joué a gagné
            if(verifierPresenceGagnant()){
                if (joueurQuiJoue == 1){
                    score1 = score1 + 1
                    const unite = score1 > 1 ? " points" : " point"
                    document.getElementById("score1").innerHTML = score1 + unite
                }
                else{
                    score2 = score2 + 1
                    const unite = score2 > 1 ? " points" : " point"
                    document.getElementById("score2").innerHTML = score2 + unite
                }
                document.querySelector('div#popup p.texte').innerHTML = "Vous avez gagné, " + document.getElementById("nomJoueur" + joueurQuiJoue).value + " !"
                document.getElementById("popup").style.display = 'flex'
            }
            else if (tours == 9){
                document.querySelector('div#popup p.texte').innerHTML = "Vous avez tous perdu !"
                document.getElementById("popup").style.display = 'flex'
            }
            // on change de joueur
            if (joueurQuiJoue == 1){
                joueurQuiJoue = 2
                document.querySelector("section.joueur2").style.backgroundColor = "#AC7D88"
                document.querySelector("section.joueur1").style.backgroundColor = "#DEB6AB"
            }
            else {
                joueurQuiJoue = 1
                document.querySelector("section.joueur1").style.backgroundColor = "#AC7D88"
                document.querySelector("section.joueur2").style.backgroundColor = "#DEB6AB"
            }
        }
        // si la case cliquée n'est pas vide
        else {
            console.log("NON !")
        }
    }
}

function verifierPresenceGagnant(){
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

document.querySelector('div#popup p.bouton').addEventListener('click', remettreZero)

function remettreZero(){
    const cases = document.getElementsByClassName('cliquable')
    for (let uneCase of cases){
        uneCase.textContent = ""
    }
    tours = 0
    const inputs = document.querySelectorAll('div#symbole1 input, div#symbole2 input')
    for (let input of inputs){
        input.disabled = false
    }
    document.getElementById("popup").style.display = 'none'
}