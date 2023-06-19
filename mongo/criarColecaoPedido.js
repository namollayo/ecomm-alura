use("ecomm");

db.createCollection("orders", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["dataPedido", "account", "enderecoEntrega", "itens"],
      additionalProperties: false,
      properties: {
        _id: {
          description: "A unique id for an order",
          bsonType: "objectId",
        },
        dataPedido: {
          bsonType: "date",
          description: "Must be a date and is required",
        },
        account: {
          bsonType: "object",
          required: ["accountId", "username"],
          additionalProperties: false,
          properties: {
            accountId: {
              bsonType: "objectId",
              description: "Requires a valid Id Account",
            },
            username: {
              bsonType: "string",
              description: "Must be a string and is required",
            },
          },
        },
        enderecoEntrega: {
          bsonType: "object",
          description: "user's address details",
          required: [
            "bairro",
            "rua",
            "numero",
            "cep",
            "cidade",
            "uf"
          ],
          additionalProperties: false,
          properties: {
            bairro: {
              bsonType: "string",
              description: "Must be a string and is required (min 1 caracters)",
              minLength: 1
            },
            rua: {
              bsonType: "string",
              description: "Must be a string and is required (min 1 caracters)",
              minLength: 1
            },
            numero: {
              bsonType: "string",
              description: "Must be a string of number or s/n and is required (min 1 caracters)",
            },
            complemento: {
              bsonType: "string",
              description: "Must be a string."
            },
            cep: {
              bsonType: "string",
              description: "Must be a string of 8 numbers and is required",
              pattern: "^[0-9]{8}$"
            },
            cidade: {
              bsonType: "string",
              description: "Must be a string and is required (min 5 caracters)",
              minLength: 5
            },
            uf: {
              enum: [
                "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS",
                "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC",
                "SP", "SE", "TO"
              ],
              bsonType: "string",
              description: "Must be a string of 2 uppercase  letters and is required"
            }
          }
        },
        itens: {
          bsonType: "array",
          minItems: 1,
          items: {
            bsonType: "object",
            required: ["productId", "quantidade", "precoUnitario"],
            additionalProperties: false,
            properties: {
              productId: {
                bsonType: "objectId",
                description: "Requires a valid Id Product",
              },
              quantidade: {
                bsonType: "number",
                minimum: 1,
                description: "Must be a positive integer or 0, is required",
              },
              desconto: {
                bsonType: "number",
                minimum: 0,
                exclusiveMinimum: true,
                description: "Must be a positive number or 0",
              },
              precoUnitario: {
                bsonType: "number",
                minimum: 0,
                exclusiveMinimum: true,
                description: "Must be a positive number or 0, is required",
              },
            },
          },
        },
      },
    },
  },
});