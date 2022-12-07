import express from "express";
import {
  addUser,
  getUser,
  getById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import {
  addHeaderOne,
  getHeaderOne,
  getHeaderOneById,
  updateHeaderSectionOne,
  deleteHeaderSectionOne
} from "../controllers/headerSectionOneController.js";
const router = express.Router();

router.post("/add", addUser);
router.get("/get", getUser);
// router.get("/:id", getById);
// router.post("/:id", updateUser);
router.put("/update", updateUser);
// router.delete("/:id", deleteUser);
router.delete("/delete", deleteUser);

router.post("/addHeaderSectionOne", addHeaderOne);
router.get("/getHeaderSecOne", getHeaderOne);
router.get("/:id", getHeaderOneById);
router.put("/updateHeaderSectionOne", updateHeaderSectionOne);
router.delete("/deleteHeaderSectionOne", deleteHeaderSectionOne);
export default router;
