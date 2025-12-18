import axios from "axios";

const axiosFetch = axios.create({
  baseURL: "http://192.168.1.104:3000",
});
const useAxios = () => {
  return axiosFetch;
};

export default useAxios;
