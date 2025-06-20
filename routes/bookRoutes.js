import express from "express";

import { getBookController,createBookController, updateBookController, deleteBookController } from "../Controllers/bookControllers.js";
import { checkAuthorization } from "../middleware/checkAuthorization.js";
import { checkStaffLevelPermissions } from "../middleware/checkPermission.js";

const bookRouter = express.Router();

bookRouter
  .route("/")
  .get(checkAuthorization, getBookController)
  .post(createBookController)
  .post(checkAuthorization, checkStaffLevelPermissions, createBookController);;


bookRouter
  .route("/:id")
  .put(updateBookController)
  .put(checkAuthorization, updateBookController)
  .delete(deleteBookController);


export default bookRouter;