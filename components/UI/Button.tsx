import React from 'react';

interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  label,
  onClick,
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-full cursor-pointer inline-block';
  const sizeClasses = {
    small: 'text-xs py-2 px-4',
    medium: 'text-sm py-2.5 px-5',
    large: 'text-base py-3 px-6',
  };
  const colorClasses = primary
    ? 'text-white bg-blue-500 hover:bg-blue-600'
    : 'text-gray-800 bg-transparent border border-gray-300 hover:bg-gray-100';

  const classes = `${baseClasses} ${sizeClasses[size]} ${colorClasses}`;

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};