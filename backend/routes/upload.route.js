import {Router} from "express"
import upload from "../middlewares/multer.middleware.js"
import {
  uploadController,
  getAllImages,
} from "../controllers/images.controller.js";

const uploadRouter = Router();

uploadRouter.post("/", upload.single("image"), uploadController);
uploadRouter.get("/", getAllImages);

export default uploadRouter