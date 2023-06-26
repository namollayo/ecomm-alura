import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        id:{type: mongoose.Schema.Types.ObjectId},
        name:{type: String, required: true}, match: /^[^0-9][a-zA-Z0-9]{2,}$/},
        status: {type: String, required: true}
    },
    {
        versionKey:false
    }
)

export const categories = mongoose.model('categories', categorySchema)

