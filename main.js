const cases = document.getElementsByClassName('cliquable')
console.log(cases)

for (let uneCase of cases){
    uneCase.addEventListener('click', jouer)
}

let symbole = "X"

function jouer(e){
    const laCase = e.target
    // si la case cliquée est vide
    if (laCase.innerHTML == ""){
        // on remplit la case avec un symbole
        laCase.innerHTML = symbole
        // opn change de joueur donc de symbole
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

}

