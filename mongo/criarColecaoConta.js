use("ecomm");

let result = db.createCollection("accounts", {
    validator: {
        $jsonSchema: {
            title: "Users' accounts",
            bsonType: "object",
            required: [
                "_id",
                "username",
                "email",
                "senha",
                "dataCriacao",
                "cpf",
                "telefone",
                "endereco",
            ],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "A unique identifier for an account"
                },
                username: {
                    bsonType: "string",
                    description: "Must be a string and is required(min 5 caracters)",
                    minLength: 5
                },
                email: {
                    bsonType: "string",
                    description: "Must be a string and is required. Should be a valid email address.",
                    pattern: "^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$",
                    minLength: 5
                },
                senha: {
                    bsonType: "string",
                    description: "Must be a string and is required (min 5 caracters)",
                    minLength: 5
                },
                dataCriacao: {
                    bsonType: "date",
                    description: "Must be a date and is required",
                },
                cpf: {
                    bsonType: "string",
                    description: "Must be a string of exactly 11 digits and is required",
                    pattern: "^[0-9]{11}$"
                },
                telefone: {
                    bsonType: "string",
                    description: "Must be a string of numbers.",
                    pattern: "^[0-9]{10,}$"
                },
                endereco: {
                    bsonType: "object",
                    description: "user's adress details",
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
                            pattern: '^d{1}|[S/N]'
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
                }
            }
        }
    }
});

console.log(result);