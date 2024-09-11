 import { Link } from "react-router-dom";
 import useRegisterForm from "../../hooks/useRegisterForm";
const Register = () => {
  const { register, handleSubmit, errors, onSubmit } = useRegisterForm();
 
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center">
            Register for EventSphere
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control w-full"
          >
            <div className="form-control">
              <label className="label" htmlFor="username">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="input input-bordered w-full"
                placeholder="Enter your name"
              />
              {errors.name && (
                <span className="text-error text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="form-control mt-4">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="input input-bordered w-full"
                placeholder="Enter your email"
              />
              {errors.email && (
                <span className="text-error text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="form-control mt-4">
              <label className="label" htmlFor="password">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="input input-bordered w-full"
                placeholder="Enter your password"
              />
              {errors.password && (
                <span className="text-error text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="form-control mt-4">
              <label className="label" htmlFor="confirmPassword">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
                className="input input-bordered w-full"
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <span className="text-error text-sm mt-1">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
