 import { Link } from "react-router-dom";
 import useLoginForm from "../../hooks/useLoginForm";
const Login = () => {
   const { register, handleSubmit,onSubmit, errors } = useLoginForm();

 

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold text-center">
            Log in to EventSphere
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="form-control w-full">
            <div className="form-control">
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
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don&#39;t have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
