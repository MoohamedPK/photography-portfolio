import ImageUpload from "../models/upload.model.js";
import fs from "fs";
import cloudinary from "../config/cloudinary.js";

export const uploadController = async (req, res) => {
  try {
    if (!req.file)
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });

    // upload the file to coudinary
    const cloudUpload = await cloudinary.uploader.upload(req.file.path, {
      folder: "test", // the folder that you want to store the image in cloudinary (optional)
    });

    // after we store the image we need to delete it from the file
    fs.unlinkSync(req.file.path);

    const uploadedImage = new ImageUpload({
      url: cloudUpload.url,
      category: req.body.category,
    });

    await uploadedImage.save();

    res.status(200).json({
      success: true,
      message: "file uploaded successfully",
    });
  } catch (error) {
    console.log("error uploading to cloudinary");
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getAllImages = async (req, res) => {

  try {

    const images = await ImageUpload.find({});

    res.status(200).json({success: true, data: images});
    
  } catch (error) {
    console.log('getting images error : ' ,error)
    res.status(500).json({success: false, message: error.message});
  }
}
