import express from "express";
import {
  addHeaderOne,
  getHeaderOne,
  getHeaderOneById,
  updateHeaderSectionOne,
  deleteHeaderSectionOne,
} from "../controllers/headerSectionOneController.js";
import {
  addHeaderSecTwo,
  getHeaderSecTwo,
  getHeadeSecTwoById,
  updateHeaderSecTwo,
  deleteHeaderSecTwo,
} from "../controllers/headerSecTwoController.js";
import {
  addService,
  getServices,
  getServiceById,
  updateService,
  deleteService,
} from "../controllers/ServiceController.js";
import {
  addCaseStudy,
  getCaseStudies,
  getCaseStudyById,
  updateCaseStudy,
  deleteCaseStudy,
} from "../controllers/caseStudiesController.js";

const router = express.Router();

// Header Section One Routes
router.post("/addHeaderSectionOne", addHeaderOne);
router.get("/getHeaderSecOne", getHeaderOne);
// router.get("/:id", getHeaderOneById);
router.put("/updateHeaderSectionOne", updateHeaderSectionOne);
router.delete("/deleteHeaderSectionOne", deleteHeaderSectionOne);

// Header Section One Routes
router.post("/addHeaderSecTwo", addHeaderSecTwo);
router.get("/getHeaderSecTwo", getHeaderSecTwo);
// router.get("/:id", getHeadeSecTwoById);
router.put("/updateHeaderSecTwo", updateHeaderSecTwo);
router.delete("/deleteHeaderSecTwo", deleteHeaderSecTwo);

// Home Services Routes
router.post("/addService", addService);
router.get("/getServices", getServices);
// router.get("/:id", getServiceById);
router.put("/updateService", updateService);
router.delete("/deleteService", deleteService);

// Case Studies Routes
router.post("/addCaseStudy", addCaseStudy);
router.get("/getCaseStudies", getCaseStudies);
// router.get("/:id", getCaseStudyById);
router.put("/updateCaseStudy", updateCaseStudy);
router.delete("/deleteCaseStudy", deleteCaseStudy);

export default router;
