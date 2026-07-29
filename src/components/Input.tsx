import type { InputHTMLAttributes } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  registration?: UseFormRegisterReturn;
  icon?: React.ReactNode;
}

import type React from 'react';

export default function Input({
  label,
  error,
  registration,
  icon,
  ...rest
}: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">
        {label}
        {rest.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}
        <input
          {...registration}
          {...rest}
          className={[
            'w-full rounded-xl border px-4 py-3 text-gray-800 placeholder-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent',
            'transition-all duration-200 bg-white',
            icon ? 'pl-10' : '',
            error
              ? 'border-red-400 bg-red-50 focus:ring-red-400'
              : 'border-gray-300 hover:border-green-400',
            rest.className ?? '',
          ].join(' ')}
        />
      </div>
      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}
