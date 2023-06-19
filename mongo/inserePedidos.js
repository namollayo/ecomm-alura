use('ecomm')

const order = db.orders.insertMany([
    {
        dataPedido: new Date(),
        account: {
            accountId: ObjectId("648767dbf741a68bccac5403"),
            nomeCliente: "kagura"
        },
        enderecoEntrega: {
            bairro: "Ipiranga",
            rua: "Rua 1",
            numero: "1",
            complemento: "Apt 1",
            cep: "00000000",
            cidade: "São Paulo",
            uf: "SP"
        },
        itens: [
            {
                productId: ObjectId("647e226e7ccfa13cbea48701"),
                quantidade: 1,
                desconto: 0.25,
                precoUnitario: 3523.00
            }
        ]
    },
    {
        dataPedido: new Date(),
        account: {
            accountId: ObjectId("648767dbf741a68bccac5404"),
            nomeCliente: "jackson"
        },
        enderecoEntrega: {
            bairro: "Liberdade",
            rua: "Rua 2",
            numero: "2",
            complemento: "",
            cep: "00000011",
            cidade: "São Paulo",
            uf: "SP"
        },
        itens: [
            {
                productId: ObjectId("647e226e7ccfa13cbea48703"),
                quantidade: 1,
                desconto: 0.05,
                precoUnitario: 102.9
            }
        ]
    }
])

console.log(order)