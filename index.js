let Crke = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let Stevila = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let Posebniznaki = ["+", "<", ")", "(", "?", ".", "!", "-", "@"]

Geslo1HTML = document.getElementById("prvo")
Geslo2HTML = document.getElementById("drugo")
Geslo3HTML = document.getElementById("tretje")
Geslo4HTML = document.getElementById("cetrto")

NapisGesla = document.getElementById("a3")


function ustvarigeslo() {
let Geslo1 = nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti()
let Geslo2 = nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti()
let Geslo3 = nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti()
let Geslo4 = nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti() + nakljucnipredmeti()

Geslo1HTML.textContent = Geslo1
Geslo2HTML.textContent = Geslo2
Geslo3HTML.textContent = Geslo3
Geslo4HTML.textContent = Geslo4
NapisGesla.textContent = "Vaša gesla:"
}

function NakljucnaCrka() {
 let KoeficientCrka = Math.floor( Math.random() * 51)
 return Crke[KoeficientCrka]
}
function NakljucnoStevilo() {
    let KoeficientStevilo = Math.floor( Math.random() * 10)
    return Stevila[KoeficientStevilo]
}

function Nakljucenznak() {
    let KoeficientZnak = Math.floor( Math.random() * 9)
    return Posebniznaki[KoeficientZnak]
}

function nakljucnipredmeti() {
    let kvota = Math.floor(Math.random() * 3)
    if (kvota === 0) {
    return NakljucnaCrka()
    } else if (kvota === 1) {
      return NakljucnoStevilo()
    } else if (kvota === 2) {
        return Nakljucenznak()
    }
}


