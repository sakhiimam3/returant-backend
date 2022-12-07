import User from "../schema/userSchema.js";

export const addUser = async (request, response) => {
  const user = request.body;

  const newUser = new User(user);

  try {
    await newUser.save();
    response.status(201).json(newUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getUser = async (request, response) => {
  try {
    const data = await User.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const getById = async (request, response) => {
  try {
    //    const data = await User.find({_id:request.params.id});
    const data = await User.findById(request.params.id);
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateUser = async (request, response) => {
  let user = request.body;
  const editUser = new User(user);
  try {
    // await User.updateOne({ _id: request.params.id }, editUser);
    await User.updateOne({ _id: user._id }, editUser);
    response.status(201).json(editUser);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteUser = async (request, response) => {
  let user = request.body;
  try {
    await User.deleteOne({ _id: user._id });
    response.status(201).json("User Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
