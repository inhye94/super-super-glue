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

///////////////////////////////////////////////

const isFileSizeValid = (size, limitSize) => {
  if (size <= limitSize * 1024 * 1024) {
    return true;
  }

  return false;
};

const isFileCountValid = (count, limitCount) => {
  if (count <= limitCount) {
    return true;
  }

  return false;
};

const getTotalFileSize = (filesOfDataTransfer) => {
  return Array.from(filesOfDataTransfer).reduce(
    (acc, cur) => acc + cur.size,
    0
  );
};

const isFileExist = (data) => {
  return data && data.files.length > 0;
};

const transferFileToImageSrc = ({ files }) => {
  return [...files].map((v) => URL.createObjectURL(v));
};

export const genFileImageSrc = (data) => {
  if (isFileExist(data)) {
    return transferFileToImageSrc(data);
  }

  return null;
};

export const genNewData = (data) => {
  const newData = new DataTransfer();

  for (let file of data.files) {
    newData.items.add(file);
  }

  return newData;
};

export const mergeFileList = ({
  savedData,
  selectedFiles,
  limitCount,
  limitSize,
}) => {
  let savedFiles = savedData.files;
  let savedFileSize = getTotalFileSize(savedFiles);
  let savedFileCount = savedFiles.length;
  const selectedFileSize = getTotalFileSize(selectedFiles);
  const selectedFileCount = selectedFiles.length;

  // NOTE: 사용자에게 알림
  if (!isFileCountValid(savedFileCount + selectedFileCount, limitCount)) {
    alert(`파일은 ${limitCount}개까지 첨부할 수 있어요.`);
  } else {
    if (!isFileSizeValid(savedFileSize + selectedFileSize, limitSize)) {
      alert(`파일의 용량은 ${limitSize}MB까지 첨부할 수 있어요.`);
    }
  }

  // NOTE: 병합된 새 데이터 반환 (이전 선택 + 지금 선택)
  const newData = genNewData(savedData);

  Array.from(selectedFiles)
    .slice(0, limitCount - savedFileCount)
    .filter((file) => {
      savedFileSize += file.size;
      return isFileSizeValid(savedFileSize, limitSize);
    })
    .forEach((file) => newData.items.add(file));

  return newData;
};
