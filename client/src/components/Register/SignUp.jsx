import React, { useState } from 'react';
import { validateForm } from '../../utils/validateForm';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [profilePreview, setProfilePreview] = useState("https://img.myloview.com/posters/default-avatar-profile-flat-icon-social-media-user-vector-portrait-of-unknown-a-human-image-700-209987471.jpg");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, profilePhoto: file });
      const reader = new FileReader();
      reader.onload = () => setProfilePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Signing up with:', formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-6">
          Create an Account
        </h1>
        <form onSubmit={handleSignUp} className="space-y-4 flex flex-col items-center w-full">

          {/* Profile Photo Upload */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600 relative">
            {/* Profile Image Preview */}
            <img
              src={profilePreview} // Use preview or default image
              alt="Profile Preview"
              className="w-full h-full object-cover"
            />

            {/* Upload Label */}
            <label
              htmlFor="profilePhotoUpload"
              className="absolute bottom-2 left-0 right-0 bg-black bg-opacity-50 text-white text-center text-sm py-1 cursor-pointer"
            >
              Upload Photo
            </label>

            {/* Hidden File Input */}
            <input
              type="file"
              id="profilePhotoUpload"
              accept="image/*"
              onChange={handlePhotoChange}
              className="hidden"
            />
          </div>



          {/* Name Input */}
          <div className="w-full">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full mt-1 p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'
                } dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name}</p>
            )}
          </div>


          {/* Email Input */}
          <div className="w-full">
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
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full mt-1 p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'
                } dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>


          {/* Password Input */}
          <div className="w-full">
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
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full mt-1 p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'
                } dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password}</p>
            )}
          </div>


          {/* Confirm Password Input */}
          <div className="w-full">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className={`w-full mt-1 p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                } dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-red-500 mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-all w-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
