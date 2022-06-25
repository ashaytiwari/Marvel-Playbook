import axios from "axios/axios";

export const getSampleData = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const response = await axios.get(url);

  return response;
};
