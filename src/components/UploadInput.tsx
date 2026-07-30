import { useRef, useState } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { FiUploadCloud, FiImage, FiX } from 'react-icons/fi';

interface UploadInputProps {
  label: string;
  error?: string;
  registration: UseFormRegisterReturn;
  onChange?: (files: FileList | null) => void;
  
}

export default function UploadInput({
  label,
  error,
  registration,
  onChange,
 
}: UploadInputProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
    registration.onChange(e);
    onChange?.(e.target.files);
  };

  const handleClear = () => {
    setPreview(null);
    setFileName(null);
    
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>

      <div
        onClick={() => inputRef.current?.click()}
        className={[
          'relative border-2 border-dashed rounded-2xl p-6 cursor-pointer transition-all duration-200',
          'flex flex-col items-center justify-center gap-3 min-h-[160px]',
          error
            ? 'border-red-400 bg-red-50'
            : 'border-gray-300 bg-gray-50 hover:border-green-500 hover:bg-green-50',
        ].join(' ')}
      >
        <input
          type="file"
          accept="image/jpeg,image/jpg,image/png,image/webp"
          className="hidden"
          {...registration}
          ref={(el) => {
            registration.ref(el);
            inputRef.current = el;
          }}
          onChange={handleChange}
        />

        {preview ? (
          <div className="relative w-full flex flex-col items-center gap-2">
            <img
              src={preview}
              alt="Preview"
              className="max-h-36 rounded-xl object-contain shadow"
            />
            <p className="text-xs text-gray-500 truncate max-w-full px-4">
              {fileName}
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleClear();
              }}
              className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
            >
              <FiX size={14} />
            </button>
          </div>
        ) : (
          <>
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
              <FiUploadCloud className="text-green-600 text-2xl" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-700">
                Click to upload screenshot
              </p>
              <p className="text-xs text-gray-400 mt-1">
                JPG, JPEG, PNG, WEBP — max 5MB
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <FiImage size={16} />
              <span className="text-xs">Facebook share screenshot</span>
            </div>
          </>
        )}
      </div>

      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1">
          <span>⚠</span> {error}
        </p>
      )}
    </div>
  );
}

import type React from 'react';
