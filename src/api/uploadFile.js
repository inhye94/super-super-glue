import axios from "axios";

export const uploadFile = async (file) => {
  const formdata = new FormData();
  formdata.append("file", file);
  formdata.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  formdata.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);

  return axios
    .post(process.env.REACT_APP_CLOUDINARY_URL, formdata)
    .then((response) => response.data)
    .then((data) => data.url)
    .catch((error) => console.log("error", error));
};
