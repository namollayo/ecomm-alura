import mongoose from "mongoose";

// const localhost= '127.0.0.1'

mongoose.connect(`mongodb://admin:secret@127.0.0.1:27017/ecomm?authSource=admin`)

    

export const db = mongoose.connection