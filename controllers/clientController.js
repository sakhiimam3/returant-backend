import Client from "../schema/clientSchema.js"

export const addClient = async (request, response) => {
  const data = request.body;
  const newData = new Client(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const getClients = async (request, response) => {
  try {
    const data = await Client.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateClient = async (request, response) => {
  let data = request.body;
  const editData = new Client(data);
  try {
    await Client.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteClient = async (request, response) => {
  let data = request.body;
  try {
    await Client.deleteOne({ _id: data._id });
    response.status(201).json("Client's Company Logo Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
