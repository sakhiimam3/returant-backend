import Model from "../schema/optionSchema.js";

export const addOptionData = async (request, response) => {
  const data = request.body;
  const newData = new Model(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getOptions = async (request, response) => {
  try {
    const data = await Model.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
