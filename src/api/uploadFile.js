export const uploadFile = async (file) => {
  const formdata = new FormData();
  formdata.append("file", file);
  formdata.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  formdata.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);

  const requestOptions = {
    method: "POST",
    body: formdata,
    redirect: "follow",
  };

  return fetch(process.env.REACT_APP_CLOUDINARY_URL, requestOptions)
    .then((response) => response.json())
    .then((data) => data.url)
    .catch((error) => console.log("error", error));
};
