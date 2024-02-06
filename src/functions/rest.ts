const totalVendas = (...vendas: number[]): void => {
  let quantidade = vendas.length;
  let items = vendas;
  console.log(items);
  console.log(`Hoje voce fez ${quantidade} vendas`);
};

totalVendas(1, 32, 1);
