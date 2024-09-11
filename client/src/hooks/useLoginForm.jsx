import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosInstance from "../config/axiosInstance";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";


// Define the login schema
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup.string().required("Password is required"),
});



const useLoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/api/auth/login", data);
      const result = await response.data;
      console.log(result)
      dispatch(login(result));
      //  reset(); // 

      if(result.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/events");
      }
      
    } catch (error) {
      console.error("Login failed:", error.message);
      throw error;
    }
  };
   

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useLoginForm;
