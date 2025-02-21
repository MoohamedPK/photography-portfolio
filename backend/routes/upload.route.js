import {Router} from "express"
import upload from "../middlewares/multer.middleware.js"
import uploadController from "../controllers/upload.controller.js"

const uploadRouter = Router();

uploadRouter.post("/", upload.single('image'),uploadController);

export default uploadRouter