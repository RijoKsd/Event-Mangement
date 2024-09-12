import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosInstance from "../config/axiosInstance";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import toast  from "react-hot-toast";


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
   } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axiosInstance.post("/api/auth/login", data);
      const result = await response.data;
       dispatch(login(result));
      //  reset(); // 

      if(result.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/auth");
      }
      toast.success(result.message)
      
    } catch (error) {
      if(error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }else{
        toast.error("Something went wrong");
      }
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
