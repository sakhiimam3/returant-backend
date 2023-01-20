import Review from "../schema/reviewDescriptionSchema.js";

export const addReviewDescription = async (request, response) => {
  const data = request.body;
  const newData = new Review(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getReviewDescription = async (request, response) => {
  try {
    const data = await Review.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const updateReviewDescription = async (request, response) => {
  let data = request.body;
  const editData = new Review(data);
  try {
    await Review.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteReviewDescription = async (request, response) => {
  let data = request.body;
  try {
    await Review.deleteOne({ _id: data._id });
    response.status(201).json("Review Description Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
