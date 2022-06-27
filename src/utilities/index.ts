import CryptoJS from "crypto-js";

export const md5Hashing = (_data: any) => {
  let data = JSON.stringify(_data);

  let hash = CryptoJS.MD5(data).toString();

  return hash;
};
