import useCreateEvent from "../../hooks/useCreateEvent";

const CreateEvent = () => {
  const { isLoading, errors, handleSubmit, onSubmit, register } =
    useCreateEvent();

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">Create Event</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              {...register("title")}
              className="input input-bordered w-full"
            />
            {errors.title && (
              <span className="text-error text-sm">{errors.title.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered h-24 w-full"
            ></textarea>
            {errors.description && (
              <span className="text-error text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              {...register("date")}
              className="input input-bordered w-full"
            />
            {errors.date && (
              <span className="text-error text-sm">{errors.date.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Time</span>
            </label>
            <input
              type="time"
              {...register("time")}
              className="input input-bordered w-full"
            />
            {errors.time && (
              <span className="text-error text-sm">{errors.time.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Venue</span>
            </label>
            <input
              type="text"
              {...register("venue")}
              className="input input-bordered w-full"
            />
            {errors.venue && (
              <span className="text-error text-sm">{errors.venue.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              
              className="file-input file-input-bordered w-full"
            />
            {errors.image && (
              <span className="text-error text-sm">{errors.image.message}</span>
            )}
         
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              step="0.01"
              {...register("price")}
              className="input input-bordered w-full"
            />
            {errors.price && (
              <span className="text-error text-sm">{errors.price.message}</span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              {...register("category")}
              className="select select-bordered w-full"
            >
              <option value="">Select a category</option>
              <option value="Conference">Conference</option>
              <option value="Workshop">Workshop</option>
              <option value="Social">Social</option>
              <option value="Other">Other</option>
            </select>
            {errors.category && (
              <span className="text-error text-sm">
                {errors.category.message}
              </span>
            )}
          </div>

 
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Event"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;