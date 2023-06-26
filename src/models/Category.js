import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
    {
        id:{type: mongoose.Schema.Types.ObjectId},
        name:{type: String, required: true},
        status: {type: String, required: true}
    },
    {
        versionKey:false
    }
)

export const categories = mongoose.model('categories', categorySchema)

