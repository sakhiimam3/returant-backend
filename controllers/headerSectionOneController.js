import HeaderSectionOne from "../schema/headerSectionOneSchema.js";

export const addHeaderOne = async (request, response) => {
  const data = request.body;
  const newData = new HeaderSectionOne(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getHeaderOne = async (request, response) => {
  try {
    const data = await HeaderSectionOne.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getHeaderOneById = async (request, response) => {
  try {
    //    const data = await User.find({_id:request.params.id});
    const data = await HeaderSectionOne.findById(request.params.id);
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateHeaderSectionOne = async (request, response) => {
  let data = request.body;
  const editData = new HeaderSectionOne(data);
  try {
    await HeaderSectionOne.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteHeaderSectionOne = async (request, response) => {
  let data = request.body;
  try {
    await HeaderSectionOne.deleteOne({ _id: data._id });
    response.status(201).json("Header Section 1 Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
