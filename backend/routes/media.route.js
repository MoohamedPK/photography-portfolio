import {Router} from "express"
import { getAllMedia, getSpecificMedia } from "../controllers/media.controller.js";

const mediaRouter = Router();

mediaRouter.get("/", getAllMedia); // get all the images and videos;
mediaRouter.get("/:category", getSpecificMedia); // get all the images and videos;

export default mediaRouter;