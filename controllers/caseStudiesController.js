import CaseStudy from "../schema/caseStudiesSchema.js";

export const addCaseStudy = async (request, response) => {
  const data = request.body;
  const newData = new CaseStudy(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getCaseStudies = async (request, response) => {
  try {
    const data = await CaseStudy.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getCaseStudyById = async (request, response) => {
  try {
    //    const data = await User.find({_id:request.params.id});
    const data = await CaseStudy.findById(request.params.id);
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateCaseStudy = async (request, response) => {
  let data = request.body;
  const editData = new CaseStudy(data);
  try {
    await CaseStudy.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteCaseStudy = async (request, response) => {
  let data = request.body;
  try {
    await CaseStudy.deleteOne({ _id: data._id });
    response.status(201).json("Case Study Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
