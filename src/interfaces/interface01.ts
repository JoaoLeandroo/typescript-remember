interface PersonProps {
    nome: string;
    age: number;
    city: string;
    car?: string;
}

const obj: PersonProps = {nome: "joao", age: 25, city: "recife"}
console.log(obj)

const userTeste = ({nome, age, city, car}: PersonProps) => {
    console.log(`
        ${nome}
        ${age}
        ${city}
        ${car}
    `)
}

userTeste({nome: "joao", age: 43, city: "RJ", car: "sim"})