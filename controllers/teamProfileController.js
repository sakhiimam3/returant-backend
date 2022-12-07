import TeamProfile from "../schema/teamProfileSchema.js"

export const addTeamProfile = async (request, response) => {
  const data = request.body;
  const newData = new TeamProfile(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getTeamProfiles = async (request, response) => {
  try {
    const data = await TeamProfile.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getTeamProfileById = async (request, response) => {
  try {
    //    const data = await User.find({_id:request.params.id});
    const data = await TeamProfile.findById(request.params.id);
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateTeamProfile = async (request, response) => {
  let data = request.body;
  const editData = new TeamProfile(data);
  try {
    await TeamProfile.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteTeamProfile = async (request, response) => {
  let data = request.body;
  try {
    await TeamProfile.deleteOne({ _id: data._id });
    response.status(201).json("Profile Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
