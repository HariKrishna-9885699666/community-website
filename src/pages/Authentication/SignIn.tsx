import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="w-full p-4 sm:p-8 xl:p-12">
          <span className="mb-1 block font-medium text-center">Start for free</span>
          <h2 className="mb-6 text-xl font-bold text-center text-black dark:text-white sm:text-title-xl2">
            Sign In to Welfarehub
          </h2>

          <form className="text-left">
            <div className="mb-3 relative">
              <label className="mb-1 block font-medium text-black dark:text-white">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded border border-stroke bg-transparent py-2 px-4 pr-12 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                <span className="absolute right-4 top-2">
                  {/* Add your email icon here */}
                  <svg
                    className="fill-current text-gray-400"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Your email icon */}
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-3 relative">
              <label className="mb-1 block font-medium text-black dark:text-white">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded border border-stroke bg-transparent py-2 px-4 pr-12 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                <span className="absolute right-4 top-2">
                  {/* Add your password icon here */}
                  <svg
                    className="fill-current text-gray-400"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Your password icon */}
                  </svg>
                </span>
              </div>
            </div>

            <div className="mb-2 text-right">
              <Link to="/auth/reset-password" className="text-primary">
                Forgot Password?
              </Link>
            </div>

            <div className="mb-3">
              <input
                type="submit"
                value="Sign In"
                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-2 text-white transition hover:bg-opacity-90"
              />
            </div>

            <div className="mt-4 text-center">
              <p>
                Don’t have an account?{' '}
                <Link to="/auth/signup" className="text-primary">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
