import mongoose from "mongoose" 

const uploadSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true,
    },

    title: {
        type: String,
        required: true,
    },

    description : {
        type: String,
        required : true,
    },

    type: {
        type: String,
        enum: ["image", "video"]
    }
    
})

const ImageUpload = mongoose.model("Images", uploadSchema);
export default ImageUpload;