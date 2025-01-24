import React from 'react';

const Login = ({login}) => {
  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Logging in...');

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Login
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all"
          >
            Login
          </button>
        </form>
        {/* Additional Options */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?{' '}
            <a
              href="/signup"
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
              Sign Up
            </a>
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Or log in with:
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <button
              type="button"
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
              aria-label="Login with Google"
            >
              <img
                src="https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png"
                alt="Google Logo"
                className="w-6 h-6"
              />
            </button>
            <button
              type="button"
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full shadow-md hover:shadow-lg transition-all"
              aria-label="Login with GitHub"
            >
              <img
                src="https://pngimg.com/uploads/github/github_PNG40.png"
                alt="GitHub Logo"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
