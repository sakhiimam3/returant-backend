import UserMessage from "../schema/userMessageSchema.js";

export const sendUserMessage = async (request, response) => {
  const data = request.body;
  const newData = new UserMessage(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getUserMessages = async (request, response) => {
  try {
    const data = await UserMessage.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
