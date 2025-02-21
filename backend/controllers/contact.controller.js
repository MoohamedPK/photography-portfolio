import Contact from "../models/contact.model.js";

const contactController = async(req, res) => {

    
    try {
        const info = req.body
        const newContact = new Contact({...info});

        await newContact.save();
        res.status(200).json({success: true, message: "Info sent successfully"})
        
    } catch (error) {
         res.status(400).json({success: false, message: "error to send info"})
        console.log("contact error : ", error )
    }
}

export default contactController;