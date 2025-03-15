import ImageUpload from "../models/upload.model.js";

export const getAllMedia = async (req, res) => {

    try {

    const media = await ImageUpload.find({});
    res.status(200).json({ success: true, data: media });

    } catch (error) {

    res.status(500).json({ success: false, message: error.message });
    }
}

export const getSpecificMedia = async (req, res) => {
    try {
        const targetMedia = await ImageUpload.find({category: req.params.category})
        res.status(200).json({success: true, data: targetMedia});

    } catch (error) {
        console.log(error.message)
        res.status(500).json({success: false, message: error.message});
    }
} 