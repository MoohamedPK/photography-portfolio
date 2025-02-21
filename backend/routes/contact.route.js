import {Router} from "express"
import contactController from "../controllers/contact.controller.js"

const contactRoute = Router();

contactRoute.post("/", contactController);

export default contactRoute;
