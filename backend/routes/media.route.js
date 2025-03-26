import {Router} from "express"
import {
  getAllMedia,
  getMediaByCategory,
  getMediaByType,
} from "../controllers/media.controller.js";

const mediaRouter = Router();

mediaRouter.get("/", getAllMedia); // get all the images and videos;
mediaRouter.get("/:id", getMediaByCategory); // get all the images and videos ;
// mediaRouter.get("/type/:type", getMediaByType); // get all the images and videos;

export default mediaRouter;