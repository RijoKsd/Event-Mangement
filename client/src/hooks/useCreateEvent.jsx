import axiosInstance from "../config/axiosInstance";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  date: yup.date().required("Date is required"),
  time: yup.string().required("Time is required"),
  venue: yup.string().required("Venue is required"),
  image: yup.mixed().test("required", "Image is required", (value) => {
    return value && value.length > 0;
  }),

  price: yup
    .number()
    .positive("Price must be positive")
    .required("Price is required"),
  category: yup
    .string()
    .oneOf(["Conference", "Workshop", "Social", "Other"])
    .required("Category is required"),
});

const useCreateEvent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      Object.keys(data).forEach((key) => {
        if (key === "image") {
          formData.append("image", data.image[0]);
        } else {
          formData.append(key, data[key]);
        }
      });
 
      const response = await axiosInstance.post("api/event/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setIsLoading(false);
      navigate("/auth/events");


      return response.data;
    } catch (err) {
      setIsLoading(false);
      throw err;
    }
  };

  return { onSubmit, isLoading, errors, handleSubmit, register };
};

export default useCreateEvent;
