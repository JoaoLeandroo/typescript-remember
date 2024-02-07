
interface CadastroProps {
    nome?: string;
    email: string;
    status: boolean;
}

const newUser: CadastroProps = {
    // nome: "teste",
    email: "email@email.com",
    status: true
}

const testeUser = ({nome = "Não enviou o nome", email, status}: CadastroProps) => {
    console.log(nome)
}

testeUser({ nome: "Ana", email: "teste", status: true })