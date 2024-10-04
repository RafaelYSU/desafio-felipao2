let saldoVitorias = calcularVitorias(100,50)
let elo = saldoVitorias
let total = rank(elo)
function calcularVitorias(vitorias, derrotas)
{
    let saldo = vitorias - derrotas
    return(saldo)
}

function rank(elo)
{
    if(elo <=10)
        return("Ferro")
    
    else if (elo >= 11 && elo <= 20)
        return("Bronze")
    
    else if (elo >= 21 && elo <= 50)
        return("Prata")
    
    else if (elo >= 51 && elo <= 80)
        return("Ouro")
    
    else if (elo >= 81 && elo <= 90)
        return("Diamante")
    
    else if (elo >= 91 && elo <= 100)
        return("Lendário")
    
    else 
        return("Imortal")  
}

   
console.log(`O Héroi tem o saldo de ${saldoVitorias}  e está no nivel ${total}`)
