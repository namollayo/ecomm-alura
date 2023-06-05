use('ecomm')

const result = db.products.find({$or: [
    {categoria: 'LIVROS'}, {categoria: 'CELULARES'}
]})

console.log(result)