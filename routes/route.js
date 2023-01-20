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
import {
  addAboutHeader,
  getAboutHeaders,
  getAboutHeaderById,
  updateAboutHeader,
  deleteAboutHeader,
} from "../controllers/aboutHeaderController.js";
import {
  addTeamProfile,
  getTeamProfiles,
  getTeamProfileById,
  updateTeamProfile,
  deleteTeamProfile,
} from "../controllers/teamProfileController.js";
import {
  addContactInfo,
  getContactInformation,
  getContactInfoById,
  updateContactInfo,
  deleteContactInfo,
} from "../controllers/contactInfoController.js";
import {
  addFooter,
  getFooter,
  getFooterById,
  updateFooter,
  deleteFooter,
} from "../controllers/footerController.js";
import {
  addProjectCategory,
  getProjectCategories,
  updateProjectCategory,
  deleteProjectCategory,
} from "../controllers/projectCategoryController.js";
import {
  addProjectSubCategory,
  getProjectSubCategories,
  getProjectSubCategoryByParentId,
  updateProjectSubCategory,
  deleteProjectSubCategory,
  getProjectSubCategoriesWithName,
  getProjectByKeyId,
} from "../controllers/projectSubCategoryController.js";
import {
  deleteClient,
  updateClient,
  getClients,
  addClient,
} from "../controllers/clientController.js";
import {
  addClientReview,
  getClientReviews,
  getClientReviewByClientId,
  updateClientReview,
  deleteClientReview,
} from "../controllers/clientReviewController.js";
import {
  loginUser,
  registerUser,
  getUser,
} from "../controllers/userController.js";

import { sendEmail } from "../controllers/emailController.js";
import {
  sendUserMessage,
  getUserMessages,
  deleteUserMessage,
} from "../controllers/userMessageController.js";
import { addOptionData, getOptions } from "../controllers/optionController.js";
import {
  addReviewDescription,
  getReviewDescription,
  updateReviewDescription,
  deleteReviewDescription,
} from "../controllers/reviewDescriptionController.js";

const router = express.Router();

// Header Section One Routes
router.post("/addHeaderSectionOne", addHeaderOne);
router.get("/getHeaderSecOne", getHeaderOne);
// router.get("/:id", getHeaderOneById);
router.put("/updateHeaderSectionOne", updateHeaderSectionOne);
router.delete("/deleteHeaderSectionOne", deleteHeaderSectionOne);

// Header Section Two Routes
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

// About Header Routes
router.post("/addAboutHeader", addAboutHeader);
router.get("/getAboutHeaders", getAboutHeaders);
// router.get("/:id", getAboutHeaderById);
router.put("/updateAboutHeader", updateAboutHeader);
router.delete("/deleteAboutHeader", deleteAboutHeader);

// About Team Profile Routes
router.post("/addTeamProfile", addTeamProfile);
router.get("/getTeamProfiles", getTeamProfiles);
// router.get("/:id", getTeamProfileById);
router.put("/updateTeamProfile", updateTeamProfile);
router.delete("/deleteTeamProfile", deleteTeamProfile);

// Contact Page Information Routes
router.post("/addContactInfo", addContactInfo);
router.get("/getContactInformation", getContactInformation);
// router.get("/:id", getContactInfoById);
router.put("/updateContactInfo", updateContactInfo);
router.delete("/deleteContactInfo", deleteContactInfo);

// Footer Routes
router.post("/addFooter", addFooter);
router.get("/getFooter", getFooter);
// router.get("/:id", getFooterById);
router.put("/updateFooter", updateFooter);
router.delete("/deleteFooter", deleteFooter);

// Project Categories Routes
router.post("/addProjectCategory", addProjectCategory);
router.get("/getProjectCategories", getProjectCategories);
router.put("/updateProjectCategory", updateProjectCategory);
router.delete("/deleteProjectCategory", deleteProjectCategory);

// Project Sub Category Routes
router.post("/addProjectSubCategory", addProjectSubCategory);
router.get("/getProjectSubCategories", getProjectSubCategories);
router.get("/getProjectWithCategoryName", getProjectSubCategoriesWithName);
router.put("/updateProjectSubCategory", updateProjectSubCategory);
router.post(
  "/getProjectSubCategoryByParentId",
  getProjectSubCategoryByParentId
);
router.get("/getProjectSubCategories/:id", getProjectByKeyId);
router.delete("/deleteProjectSubCategory", deleteProjectSubCategory);

// Review Description Routes
router.post("/addReviewDescription", addReviewDescription);
router.get("/getReviewDescription", getReviewDescription);
router.put("/updateReviewDescription", updateReviewDescription);
router.delete("/deleteReviewDescription", deleteReviewDescription);

// Client's Logo Routes
router.post("/addClient", addClient);
router.get("/getClients", getClients);
router.put("/updateClient", updateClient);
router.delete("/deleteClient", deleteClient);

// Client Reviews Routes
router.post("/addClientReview", addClientReview);
router.get("/getClientReviews", getClientReviews);
router.put("/updateClientReview", updateClientReview);
router.get("/getClientReviewByClientId/:key", getClientReviewByClientId);
router.delete("/deleteClientReview", deleteClientReview);

// Authentication Routes
router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/getUser", getUser);

// Email Routes
router.post("/sendEmail", sendEmail, sendUserMessage);
router.get("/getUserMessages", getUserMessages);
router.delete("/deleteUserMessage", deleteUserMessage);
// Options
router.post("/addOptions", addOptionData);
router.get("/getOptions", getOptions);
export default router;
