export function findInputError(errors, name) {
  const filtered = Object.keys(errors)
    .filter((key) => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] });
    }, {});

  // console.log(filtered);
  return filtered;
}

export const isFormInvalid = (err) => {
  if (Object.keys(err).length > 0) return true;
  return false;
};

export const chkFileSize = (accSize, limitSize) => {
  if (accSize <= limitSize * 1024 * 1024) {
    return true;
  }

  return false;
};

export const getTotalFileSize = (filesOfDataTransfer) => {
  return Array.from(filesOfDataTransfer).reduce(
    (acc, cur) => acc + cur.size,
    0
  );
};

export const mergeFileList = ({
  _savedDataTrasfer,
  _selectedFiles,
  limitCount,
  limitSize,
}) => {
  let { files: savedFiles } = _savedDataTrasfer;
  let _savedFileSize = 0;
  let _savedFileCount = 0;

  if (limitCount > 1) {
    _savedFileSize = getTotalFileSize(savedFiles);
    _savedFileCount = savedFiles.length;
  } else {
    _savedDataTrasfer.clearData();
  }

  if (_savedFileCount + _selectedFiles.length > limitCount) {
    alert(`파일은 ${limitCount}개까지 첨부할 수 있어요.`);
  } else if (
    !chkFileSize(_savedFileSize + getTotalFileSize(_selectedFiles), limitSize)
  ) {
    alert(`파일의 용량은 ${limitSize}MB까지 첨부할 수 있어요.`);
  }

  Array.from(_selectedFiles)
    .slice(0, limitCount - _savedFileCount)
    .filter((file) => {
      if (chkFileSize(_savedFileSize + file.size, limitSize)) {
        _savedFileSize += file.size;
        return true;
      }
      return false;
    })
    .forEach((file) => _savedDataTrasfer.items.add(file));

  return _savedDataTrasfer;
};

export const transferFileToImageSrc = (_data) => {
  return [..._data.files].map((v) => URL.createObjectURL(v));
};
