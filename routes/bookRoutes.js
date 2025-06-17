import express from "express";

import { getBookController,createBookController, updateBookController, deleteBookController } from "../Controllers/bookControllers.js";
import { checkAuthorization } from "../middleware/checkAuthorization.js";

const bookRouter = express.Router();

bookRouter
.route('/')
.get(checkAuthorization,getBookController).post(createBookController);


bookRouter
  .route("/:id").put(updateBookController).delete(deleteBookController);


export default bookRouter;