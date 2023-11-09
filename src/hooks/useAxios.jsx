import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
    // baseURL: 'https://library-management-server-gamma.vercel.app/api/v1',
    baseURL: 'https://library-management-server-gamma.vercel.app/api/v1',
    withCredentials: true,
  });

const useAxios = () => {
  const {logoutUser} =useAuth()

  instance.interceptors.response.use(
    function (response) {  
    return response;
  }, function (error) {
    if(error.response.status === 401 || error.response.status === 403){
      logoutUser()
    }
  });
    return instance;
};

export default useAxios;