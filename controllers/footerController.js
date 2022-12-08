import Footer from "../schema/footerSchema.js"

export const addFooter = async (request, response) => {
  const data = request.body;
  const newData = new Footer(data);
  try {
    await newData.save();
    response.status(201).json(newData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getFooter = async (request, response) => {
  try {
    const data = await Footer.find({});
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getFooterById = async (request, response) => {
  try {
    //    const data = await User.find({_id:request.params.id});
    const data = await Footer.findById(request.params.id);
    response.status(200).json(data);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};
export const updateFooter = async (request, response) => {
  let data = request.body;
  const editData = new Footer(data);
  try {
    await Footer.updateOne({ _id: data._id }, editData);
    response.status(201).json(editData);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
export const deleteFooter = async (request, response) => {
  let data = request.body;
  try {
    await Footer.deleteOne({ _id: data._id });
    response.status(201).json("Footer Deleted Successfully");
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
