import React from "react";

export default function LoginPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
   <main className="w-full min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
  <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl space-y-6 text-gray-700">
    {/* Logo and Heading */}
    <div className="text-center">
      <img
        src="https://ossimg.cmdgametransit.com/OK.Win/other/h5setting_20240313155706n3d7.png"
        width="100"
        className="mx-auto"
        alt="Logo"
      />
      <h3 className="mt-4 text-2xl font-bold text-gray-800">Log in to your account</h3>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block font-medium mb-1">Email</label>
        <input
          type="email"
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
        />
      </div>
      <div>
        <label className="block font-medium mb-1">Password</label>
        <input
          type="password"
          required
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <input type="checkbox" id="remember-me-checkbox" className="accent-red-600" />
          <label htmlFor="remember-me-checkbox">Remember me</label>
        </div>
        <a href="#" className="text-red-600 hover:text-red-500">Forgot password?</a>
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg shadow-md transition duration-200"
      >
        Sign in
      </button>
    </form>

    {/* Divider or Google Sign-In */}
    <div className="flex items-center gap-2">
      <div className="flex-grow h-px bg-gray-300" />
      <span className="text-sm text-gray-500">or</span>
      <div className="flex-grow h-px bg-gray-300" />
    </div>

    <button className="w-full flex items-center justify-center gap-3 py-2.5 border rounded-lg text-sm font-medium hover:bg-gray-50 transition">
      <img
        src="https://raw.githubusercontent.com/sidiDev/remote-assets/7cd06bf1d8859c578c2efbfda2c68bd6bedc66d8/google-icon.svg"
        alt="Google"
        className="w-5 h-5"
      />
      Continue with Google
    </button>

    {/* Sign Up Link */}
    <p className="text-center text-sm">
      Don't have an account?{" "}
      <a href="#" className="font-medium text-red-600 hover:text-red-500">Sign up</a>
    </p>
  </div>
</main>

  );
}
