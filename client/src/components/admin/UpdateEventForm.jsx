import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../config/axiosInstance";

const UpdateEventForm = () => {
  const [data, setData] = useState(null);
  const { eventId } = useParams();
  const navigate = useNavigate();
  const { control, handleSubmit, setValue } = useForm();

  const fetchEventById = async (id) => {
    try {
      const response = await axiosInstance.get(`/api/event/get/${id}`);
      setData(response.data.event);
    } catch (error) {
      console.error("Error fetching event", error);
    }
  };

  useEffect(() => {
    fetchEventById(eventId);
  }, [eventId]);

  useEffect(() => {
    if (data) {
      setValue("title", data.title);
      setValue("description", data.description);
      setValue("price", data.price);
      setValue("date", data.date?.split("T")[0]);
      setValue("time", data.time);
      setValue("venue", data.venue);
      setValue("category", data.category);
    }
  }, [data, setValue]);

  const onSubmit = async (formData) => {
    try {
      await axiosInstance.put(`/api/event/update/${eventId}`, formData);
      navigate(-1);  
    } catch (error) {
      console.error("Error updating event", error);
    }
  };

  const handleCancel = () => {
    navigate(-1);  
  };

  if (!data) return <div className="text-center">Loading...</div>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Update Event</h2>

      <div className="form-control">
        <label className="label" htmlFor="title">
          <span className="label-text">Event Title</span>
        </label>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Event title is required" }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                {...field}
                type="text"
                placeholder="Event Title"
                className="input input-bordered"
              />
              {error && (
                <span className="text-error text-sm">{error.message}</span>
              )}
            </>
          )}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="description">
          <span className="label-text">Description</span>
        </label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              className="textarea textarea-bordered h-24"
              placeholder="Event Description"
            ></textarea>
          )}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="price">
          <span className="label-text">Price</span>
        </label>
        <Controller
          name="price"
          control={control}
          rules={{ required: "Price is required" }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                {...field}
                type="number"
                step="0.01"
                placeholder="Price"
                className="input input-bordered"
              />
              {error && (
                <span className="text-error text-sm">{error.message}</span>
              )}
            </>
          )}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="date">
          <span className="label-text">Date</span>
        </label>
        <Controller
          name="date"
          control={control}
          rules={{ required: "Date is required" }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input {...field} type="date" className="input input-bordered" />
              {error && (
                <span className="text-error text-sm">{error.message}</span>
              )}
            </>
          )}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="time">
          <span className="label-text">Time</span>
        </label>
        <Controller
          name="time"
          control={control}
          rules={{ required: "Time is required" }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input {...field} type="time" className="input input-bordered" />
              {error && (
                <span className="text-error text-sm">{error.message}</span>
              )}
            </>
          )}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="venue">
          <span className="label-text">Venue</span>
        </label>
        <Controller
          name="venue"
          control={control}
          rules={{ required: "Venue is required" }}
          render={({ field, fieldState: { error } }) => (
            <>
              <input
                {...field}
                type="text"
                placeholder="Event Venue"
                className="input input-bordered"
              />
              {error && (
                <span className="text-error text-sm">{error.message}</span>
              )}
            </>
          )}
        />
      </div>

      <div className="form-control">
        <label className="label" htmlFor="category">
          <span className="label-text">Category</span>
        </label>
        <Controller
          name="category"
          control={control}
          rules={{ required: "Category is required" }}
          render={({ field, fieldState: { error } }) => (
            <>
              <select {...field} className="select select-bordered w-full">
                <option value="">Select a category</option>
                <option value="Conference">Conference</option>
                <option value="Workshop">Workshop</option>
                <option value="Social">Social</option>
                <option value="Other">Other</option>
              </select>
              {error && (
                <span className="text-error text-sm">{error.message}</span>
              )}
            </>
          )}
        />
      </div>

      <div className="form-control mt-6 flex-row justify-between">
        <button type="submit" className="btn btn-primary" >
          Update Event
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="btn btn-secondary"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateEventForm;
