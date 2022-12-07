import Service from "../schema/ServiceSchema.js";

export const addService = async (request, response) => {
  const data = request.body;
  const newData = new Service(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getServices = async (request, response) => {
  try {
    const data = await Service.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getServiceById = async (request, response) => {
  try {
    //    const data = await User.find({_id:request.params.id});
    const data = await Service.findById(request.params.id);
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateService = async (request, response) => {
  let data = request.body;
  const editData = new Service(data);
  try {
    await Service.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteService = async (request, response) => {
  let data = request.body;
  try {
    await Service.deleteOne({ _id: data._id });
    response.status(201).json("Service Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
