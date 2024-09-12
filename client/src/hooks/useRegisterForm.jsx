import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosInstance from "../config/axiosInstance";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const useRegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  

  const onSubmit = async (data) => {
     try {
       const response = await axiosInstance.post("/api/auth/register", data);
       const result = await response.data;
       dispatch(login(result));
       if (result.role === "admin") {
         navigate("/admin");
       } else {
         navigate("/auth");
       }
       toast.success(result.message);
     } catch (error) {
       if (error?.response?.data?.message) {
         toast.error(error.response.data.message);
       } else {
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

export default useRegisterForm;
