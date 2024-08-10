import React from 'react';

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  ...props
}) => {
  const inputClasses = `w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${
    error ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'
  }`;

  return (
    <div className="mb-4">
      <input
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
};