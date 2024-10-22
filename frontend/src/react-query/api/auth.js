import { authAxios , unAuthAxios } from "../axios";
import axios from 'axios';

export async function  login(data) {

        const response =    await axios.post('http://localhost:3100/api/v1/auth/login' , data)
     

        // if(response.data.success)  return response.data.data;
        console.log(response.data)
        console.log(response.data.detail)
        localStorage.setItem("profile" , JSON.stringify(response.data.detail))
        
        // else{
        //     console.log("Wrong email id or password")
        //     return null;    
        // }
    

  return response.data;
  
}

export async function register(data) {
  try {
    const response = await axios.post('http://localhost:3100/api/v1/auth/register', data);
    console.log(response.data.data);
  } catch (error) {
    console.error("Error during registration:", error);
  }
}
