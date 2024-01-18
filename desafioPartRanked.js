//******CÓDIGO 1.0******\\

/*let result = amountVictoryDefeat(323, 234)
let finalResultLevel = logicRankedLevel()

function amountVictoryDefeat(amountVictory, amountDefeat) {
    
}

function logicRankedLevel() {
    let rankedLevel
    let finalResult = amountVictory - amountDefeat
    return finalResult
    if (result < 10) {
        rankedLevel = "Ferro"
    } else if (result >= 10 && result < 20) {
        rankedLevel = "Bronze"
    } else if (result >= 20 && result < 50) {
        rankedLevel = "Prata"
    } else if (result >= 50 && result < 80) {
        rankedLevel = "Ouro"
    } else if (result >= 80 && result < 90) {
        rankedLevel = "Diamante"
    } else if (result >= 90 && result < 100) {
        rankedLevel = "Lendário"
    } else {
        rankedLevel = "Imortal"
    }
        return rankedLevel
}

console.log(`O Herói tem saldo de ${result} Vitórias e está Rankeado no Nível: ${finalResultLevel}`) */

//******CÓDIGO 2.0******\\

/*
let amountVictory = 144
let amountDefeat = 23
const resultado = amountVictoryDefeat(amountVictory, amountDefeat);

function amountVictoryDefeat(amountVictory, amountDefeat) {
let resultFinal = amountVictory - amountDefeat;

let nivel
   switch (true) {
        case resultFinal >= 0 && resultFinal < 10:
            nivel = "Ferro";
            break;
        case resultFinal >= 10 && resultFinal < 20:
            nivel = "Cobre";
            break;
        case resultFinal >= 20 && resultFinal < 50:
            nivel = "Ferro";
            break;
        case resultFinal >= 50 && resultFinal < 80:
            nivel = "Ouro";
            break;
        case resultFinal >= 80 && resultFinal < 90:
            nivel = "Diamente";
            break;
        case resultFinal >= 90 && resultFinal < 100:
            nivel = "Lendário"
            break
        default: 
            nivel = "Imortal"
    }

    return console.log(`O Heroi tem saldo de ${resultFinal} vitórias e está no Nível ${nivel}`)
} */
