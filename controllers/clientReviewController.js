import ClientReview from "../schema/ClientReviewSchema.js";


export const addClientReview = async (request, response) => {
  const data = request.body;
  const newData = new ClientReview(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const getClientReviews = async (request, response) => {
  try {
    const data = await ClientReview.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const getClientReviewByClientId = async (request, response) => {
  try {
    const data = await ClientReview.find({
      $or: [{ client_id: { $regex: request.params.key } }],
    });
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateClientReview = async (request, response) => {
  let data = request.body;
  const editData = new ClientReview(data);
  try {
    await ClientReview.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteClientReview = async (request, response) => {
  let data = request.body;
  try {
    await ClientReview.deleteOne({ _id: data._id });
    response.status(201).json("Client Review Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
