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
    
})

const ImageUpload = mongoose.model("Images", uploadSchema);
export default ImageUpload;