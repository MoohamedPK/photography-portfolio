import multer from "multer"

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads") // the file that we need to store the image temporarly
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`) // we will make a unique name for the file 
  },
})

const upload = multer({ storage, limits: { fileSize: 100 * 1024 * 1024 } });
export default upload;