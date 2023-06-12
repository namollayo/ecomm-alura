use("ecomm");


const result = db.accounts.insertMany([
  {
    username: "kagura",
    email: "kagura@example.com",
    senha: "kagura123",
    dataCriacao: new Date(),
    cpf: "00000000011",
    telefone: "11999999999",
    endereco: {
      bairro: "Ipiranga",
      rua: "Rua 1",
      numero: "1",
      complemento: "Apt 1",
      cep: "00000000",
      cidade: "São Paulo",
      uf: "SP",
    },
  },
  {
    username: "jackson",
    email: "jackson@example.com",
    senha: "jackson777",
    dataCriacao: new Date(),
    cpf: "00000000012",
    telefone: "11999999998",
    endereco: {
      bairro: "Liberdade",
      rua: "Rua 2",
      numero: "2",
      complemento: "",
      cep: "00000011",
      cidade: "São Paulo",
      uf: "SP",
    },
  },
  {
    username: "billie",
    email: "billie.bl@example.com",
    senha: "bill1e321",
    dataCriacao: new Date(),
    cpf: "12376549813",
    telefone: "11999999998",
    endereco: {
      bairro: "Asa sul",
      rua: "SQS 102",
      numero: "3",
      complemento: "Apt 202",
      cep: "71000000",
      cidade: "Brasília",
      uf: "DF",
    },
  },
]);

console.log(result);