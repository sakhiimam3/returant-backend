import aboutHeader from "../schema/aboutHeaderSchema.js"

export const addAboutHeader = async (request, response) => {
  const data = request.body;
  const newData = new aboutHeader(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getAboutHeaders = async (request, response) => {
  try {
    const data = await aboutHeader.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getAboutHeaderById = async (request, response) => {
  try {
    //    const data = await User.find({_id:request.params.id});
    const data = await aboutHeader.findById(request.params.id);
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateAboutHeader = async (request, response) => {
  let data = request.body;
  const editData = new aboutHeader(data);
  try {
    await aboutHeader.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteAboutHeader = async (request, response) => {
  let data = request.body;
  try {
    await aboutHeader.deleteOne({ _id: data._id });
    response.status(201).json("About Header Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
