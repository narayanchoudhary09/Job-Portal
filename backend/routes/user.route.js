import express from "express";
import {
  login,
  logout,
  regiater,
  updateProfile,
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();

router.route("/register").post(singleUpload, regiater);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthenticated,singleUpload, updateProfile);

export default router;
