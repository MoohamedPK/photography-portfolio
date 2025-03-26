import mongoose from "mongoose" 

const uploadSchema = new mongoose.Schema({
  assets: [
    {
      url: {
        type: String,
        required: true,
      },
      public_id: {
        type: String,
        required: true,
      },
      resource_type: {
        type: String,
        enum: ["image", "video"],
      },
    },
  ],

  thumbnail: String,

  category: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
  },

  type: {
    type: String,
    enum: ["image", "video"],
  },
});

const ImageUpload = mongoose.model("Images", uploadSchema);
export default ImageUpload;