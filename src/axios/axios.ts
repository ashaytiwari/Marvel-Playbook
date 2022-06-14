import axios from "axios";

const customAxios: any = axios.create({});

const requestHandler = (request: any) => {
  return request;
};

const responseHandler = (response: any) => {
  return response;
};

const errorHandler = (error: any) => {
  const _window: Window = window;
  console.log(error, " <<<<<<<<<<<<<<<<<<error ");
  _window.location = "/error";
};

customAxios.interceptors.request.use(
  (request: any) => requestHandler(request),
  (error: any) => errorHandler(error)
);

customAxios.interceptors.response.use(
  (response: any) => responseHandler(response),
  (error: any) => errorHandler(error)
);

export default customAxios;
