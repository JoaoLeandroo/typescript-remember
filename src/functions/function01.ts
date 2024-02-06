const user = "Leandro"

const login = (userName: string) => {
    console.log(`Olá ${userName}`)
}

login(user)


// Tipando o retorno da função
const namePlayer = (player:string): string => {
    return player
}

namePlayer("x")

const soma = (num1: number, num2:number): number => {
    const soma = num1 + num2
    return soma
}

console.log(soma(10, 35))


const numMaior = (a: number, b:number): string => {
    const soma = a + b
    if(soma > 20) return "A SOMA É MAIOR QUE 20"

    return "A SOMA É MENOR QUE 20"
}

console.log(numMaior(15, 22))