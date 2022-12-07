import headerSecTwo from "../schema/headerSecTwo.js";

export const addHeaderSecTwo = async (request, response) => {
  const data = request.body;
  const newData = new headerSecTwo(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getHeaderSecTwo = async (request, response) => {
  try {
    const data = await headerSecTwo.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getHeadeSecTwoById = async (request, response) => {
  try {
    //    const data = await User.find({_id:request.params.id});
    const data = await headerSecTwo.findById(request.params.id);
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateHeaderSecTwo = async (request, response) => {
  let data = request.body;
  const editData = new headerSecTwo(data);
  try {
    await headerSecTwo.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteHeaderSecTwo = async (request, response) => {
  let data = request.body;
  try {
    await headerSecTwo.deleteOne({ _id: data._id });
    response.status(201).json("Header Section 2 Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
