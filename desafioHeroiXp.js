let heroiNomeXp = [["Homem-aranha", 55],
["Hulk", 1233],
["Wolverine", 3433],
["Mulher Maravilha", 6544],
["Superman", 7432],
["Batman", 8768],
["Deadpool", 9663],
["Ciclope", 23233]
]

for (let i = 0; i < heroiNomeXp.length; i++) {
    let nivel = heroiNomeXp[i][1]

    if (nivel < 1000) {
        console.log (heroiNomeXp[i][0] + " Você está no Nível FERRO")
    } else if (nivel > 1000 && nivel <= 2000) {
        console.log (heroiNomeXp[i][0] + " Você está no Nivel COBRE")
    } else if (nivel > 2000 && nivel <= 5000) {
        console.log (heroiNomeXp[i][0] + " Você está no Nível PRATA")
    } else if (nivel > 5000 && nivel <= 7000) {
        console.log (heroiNomeXp[i][0] + " Você está no Nível OURO")
    } else if (nivel > 7000 && nivel <= 8000) {
        console.log (heroiNomeXp[i][0] + " Você está no Nível PLATINA")
    } else if (nivel > 8000 && nivel <= 9000) {
        console.log (heroiNomeXp[i][0] + " Você está no Nível ASCENDENTE")
    } else if (nivel > 9000 && nivel <= 10000) {
        console.log (heroiNomeXp[i][0] + " Você está no Nível IMORTAL")
    } else {
        console.log (heroiNomeXp[i][0] + " Você superou tudo e todos e está no Nível RADIANTE")
    }
}