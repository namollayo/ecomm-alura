import { categories } from '../models/Category.js'

export class CategoryController {

    static getAllCategories = async (req, res) => {
      try {
        const result = await categories.find()

        res.status(200).json(result)
      } catch (error) {
        if (res.statusCode === 200){
            res.status(500)
        }
        if (error instanceof Error) {
            res.send(error.message);
        } else {
            res.send("Unexpected Error");
        }
        console.log(error)
      }
    }

    static getCategoryById = async (req, res) => {
        const { id } = req.params
        try {
            const result = await categories.findById(id)

            res.status(200).json(result)
        } catch (error) {
        if (res.statusCode === 200){
            res.status(500)
        }
        if (error.message.includes('_id')){
            res.status(404).send('Invalid ID')
        }
        if (error instanceof Error) {
            res.send(error.message);
        } else {
            res.send("Unexpected Error");
        }
        console.log(error)
        }
    }

    static createCategories = async (req, res) => {
      try {
        const category = new categories(req.body)
        await category.save()

        res.status(201).send(category.toJSON())
      } catch (error) {
        if (res.statusCode === 200){
            res.status(500)
        }
        if (error.message.includes('validation')){
            res.status(400)
        }
        if (error instanceof Error) {
            res.send(error.message);
        } else {
            res.send("Unexpected Error");
        }
        console.log(error)
      }
    }
}