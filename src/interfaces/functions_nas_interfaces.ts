interface CursoProps {
  id: string;
  nome: string;
  preco: number;

  // Definir apenas a função e o que ela está retornando
  promacao: (preco: number) => void;
}


function mostrarPromocao(preco: number): void {
    console.log("teste" + preco)
}

const novoCurso: CursoProps = {
  id: "1",
  nome: "Analise de Software",
  preco: 997.88,
  promacao: mostrarPromocao,
};

novoCurso.promacao(450)

