use('ecomm')

db.orders.insertMany([
    {
        dataPedido: new Date(),
        account: {
            accountId: ObjectId("6488cc644b07643e12a4e929"),
            username: "kagura"
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
                desconto: NumberDecimal("0.25"),
                precoUnitario: NumberDecimal("3523.00")
            }
        ]
    },
    {
        dataPedido: new Date(),
        account: {
            accountId: ObjectId("6488cc644b07643e12a4e92a"),
            username: "jackson"
        },
        enderecoEntrega: {
            bairro: "Liberdade",
            rua: "Rua 2",
            numero: "S/N",
            complemento: "apt101",
            cep: "00000011",
            cidade: "São Paulo",
            uf: "SP"
        },
        itens: [
            {
                productId: ObjectId("647e226e7ccfa13cbea48703"),
                quantidade: 1,
                desconto: NumberDecimal("0.25"),
                precoUnitario: NumberDecimal("102.9")
            }
        ]
    }
])

