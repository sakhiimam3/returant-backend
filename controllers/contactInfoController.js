import ContactInfo from "../schema/contactInfoSchema.js"

export const addContactInfo = async (request, response) => {
  const data = request.body;
  const newData = new ContactInfo(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getContactInformation = async (request, response) => {
  try {
    const data = await ContactInfo.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getContactInfoById = async (request, response) => {
  try {
    //    const data = await User.find({_id:request.params.id});
    const data = await ContactInfo.findById(request.params.id);
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateContactInfo = async (request, response) => {
  let data = request.body;
  const editData = new ContactInfo(data);
  try {
    await ContactInfo.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteContactInfo = async (request, response) => {
  let data = request.body;
  try {
    await ContactInfo.deleteOne({ _id: data._id });
    response.status(201).json("Contact Info Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
