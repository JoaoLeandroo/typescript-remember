// Como deixar um valor por default ou deixar ele opcional

const cadastro = (email: string, senha: string, nome?: string, idade:(number | string) = "Nao enviou"): void => {
  let data = { email, senha, nome, idade };
  console.log(data);
};

cadastro("teste@teste.com", "2324",)
cadastro("joao@sss", "22222", "joao", 23)