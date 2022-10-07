import { generateMD5Hash } from "utilities";

const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

export function generateParamsForMarvelApis() {
  const timestamp = Date.now();

  let cipherText: any = timestamp;

  if (typeof PUBLIC_KEY !== "undefined" && typeof PRIVATE_KEY !== "undefined") {
    cipherText += PRIVATE_KEY + PUBLIC_KEY;
  }

  const hash = generateMD5Hash(cipherText);

  return {
    timestamp,
    hash
  };
}
