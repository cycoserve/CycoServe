import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FormState {
  email: string;
  password: string;
  rememberMe: boolean;
}

const useForm = (initialState: FormState) => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(formState.email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (formState.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    // Handle sign in logic here
    console.log('Sign in with:', formState.email, formState.password);
    setError('');
  };

  return { formState, handleChange, handleSubmit, error, setError };
};

const SignInComponent: React.FC = () => {
  const { formState, handleChange, handleSubmit, error, setError } = useForm({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSocialSignIn = (platform: string) => {
    // Handle social sign in logic here
    console.log('Sign in with:', platform);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="you@example.com"
              required
              aria-label="Email"
              aria-invalid={error.includes('email') ? 'true' : 'false'}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="********"
              required
              aria-label="Password"
              aria-invalid={error.includes('password') ? 'true' : 'false'}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="rememberMe"
                type="checkbox"
                checked={formState.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Forgot your password?</a>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mb-4" role="alert">{error}</p>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialSignIn('Facebook')}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Facebook</span>
              <FaFacebook className="w-5 h-5 text-blue-600" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialSignIn('Google')}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Google</span>
              <FaGoogle className="w-5 h-5 text-red-500" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSocialSignIn('Twitter')}
              className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Sign in with Twitter</span>
              <FaTwitter className="w-5 h-5 text-blue-400" />
            </motion.button>
          </div>
        </div>
        <p className="mt-8 text-xs text-center text-gray-500">
          By signing in, you agree to our{' '}
          <a href="#" className="text-blue-600 hover:text-blue-500">Terms of Service</a>{' '}
          and{' '}
          <a href="#" className="text-blue-600 hover:text-blue-500">Privacy Policy</a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignInComponent;