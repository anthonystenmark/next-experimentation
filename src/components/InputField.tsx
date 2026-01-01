import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  className = '',
  ...props
}) => (
  <label htmlFor={id} className='flex-1'>
    {label && <span className='sr-only'>{label}</span>}
    <input
      id={id}
      className={`h-12 w-full rounded border-gray-300 shadow-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white p-2 ${className}`}
      {...props}
    />
  </label>
);
