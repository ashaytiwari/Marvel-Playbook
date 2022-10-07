import axios from "axios/axios";
import { generateParamsForMarvelApis } from "./utilities";

const PUBLIC_KEY = process.env.REACT_APP_MARVEL_PUBLIC_KEY;

export const getSampleData = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const response = await axios.get(url);

  return response;
};

export const getCharacters = async (limit: number, page: number) => {
  const { timestamp, hash } = generateParamsForMarvelApis();

  const offset = limit * page;

  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${offset}`;

  const response = await axios.get(url);

  return response;
};
