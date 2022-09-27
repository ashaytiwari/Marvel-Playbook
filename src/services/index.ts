import axios from "axios/axios";

import { generateMD5Hash } from "utilities";

const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;
const PRIVATE_KEY = process.env.REACT_APP_MARVEL_PRIVATE_KEY;

function generateParamsForMarvelApis() {
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

export const getSampleData = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const response = await axios.get(url);

  return response;
};

export const getCharacters = async () => {
  const { timestamp, hash } = generateParamsForMarvelApis();

  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;

  const response = await axios.get(url);

  return response;
};
