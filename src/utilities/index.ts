import CryptoJS from "crypto-js";

export const generateMD5Hash = (_data: string) => {
  let data = JSON.stringify(_data).replace(/"/g, "");

  let hash = CryptoJS.MD5(data).toString();

  return hash;
};

export const createImageURL = (url: string, extension: string) => {
  const imageURL = `${url}.${extension}`;
  return imageURL;
};
