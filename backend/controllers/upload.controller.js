import ImageUpload from "../models/upload.model.js";
import fs from "fs";
import cloudinary from "../config/cloudinary.js";

export const uploadController = async (req, res) => {

    const {title, description, category} = req.body

  try {
    
    if(!req.files || req.files.length === 0) {
      return res.status(500).json({success: false, message: "No files Uploaded"});
    }

    const uploadedAssets = [];
    
    for (const file of req.files) {
      const isVideo = file.mimetype.startsWith("video/");
      const resourceType = isVideo ? "video" : "image";

      // upload the file to coudinary
      const cloudUpload = await cloudinary.uploader.upload(file.path, {
        folder: "photography", // the folder that you want to store the image in cloudinary (optional)
        resource_type: resourceType, // automatically detects image or video
      });

      // after we store the image we need to delete it from the file
      fs.unlinkSync(file.path);

      uploadedAssets.push(
        {
        url: cloudUpload.secure_url, // url that refers to the image
        public_id: cloudUpload.public_id, 
        resource_type: resourceType,
      }
    )
  }
  
  const newUpload = new ImageUpload({
    assets: uploadedAssets,
    thumbnail: uploadedAssets[0].url,
    category: category,
    description: description,
    title: title
  });

  await newUpload.save();

  res.status(200).json({
    success: true,
    message: "Files uploaded successfully",
  });

  } catch (error) {
    console.log("error uploading to cloudinary");
    res.status(500).json({ success: false, message: error.message });
  }
};


