'use client';

import { useCallback, useRef, useState, ChangeEvent, FormEvent } from 'react';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import { Button } from "@/components/ui/button"

type FileUploadFormProps = {
  onSubmit: (file: File) => Promise<void>;
  accept?: string;
  maxSizeMB?: number;
  buttonText?: string;
  className?: string;
};

export default function FileUploadForm({
  onSubmit,
  accept = '.csv',
  maxSizeMB = 2,
  buttonText = 'Predict',
  className = '',
}: FileUploadFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [sizeMB, setSizeMB] = useState<number | null>(null);

  const validateFile = (selected: File) => {
    const sizeMB = selected.size / (1024 * 1024);
    if (sizeMB > maxSizeMB) {
      setErrorMsg(`File size exceeds limit.`);
      setSizeMB(null);
      return false;
    }
    setSizeMB(sizeMB);
    return { isValid: true, sizeMB };
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected && validateFile(selected)) {
      setErrorMsg('');
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const selected = acceptedFiles[0];
    if (selected && validateFile(selected)) {
      setErrorMsg('');
      setFile(selected);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: accept ? { 'text/csv': [accept] } : undefined,
    multiple: false,
  });

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!file) {
      setErrorMsg('Please select your file first.');
      return;
    }

    try {
      setIsLoading(true);
      await onSubmit(file);
    } catch (err) {
      console.error(err);
      setErrorMsg('Something happened when uploading.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={clsx('flex flex-col h-full w-full', className)} >
      <div className='mb-auto h-[70%]'>
        <div className="flex flex-col w-full h-full justify-center">
          {file ? (
            <div className="flex items-center justify-between h-[100%] rounded-md p-2 border-2 border-gray-500 bg-[var(--utility-translucent)]">
              <div className='flex flex-col truncate'>
                <div className="truncate pointer-events-none cursor-default">{file.name}</div>
                {sizeMB !== null && (
                  <p className="text-xs text-gray-400">{sizeMB.toFixed(2)}MB</p>
                )}
              </div>
              <Button type="button" onClick={clearFile} className="cursor-pointer bg-transparent text-[var(--accent-foreground)] hover:opacity-85 hover:bg-transparent rounded-sm shadow-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
          ) : (
            <div
              {...getRootProps()}
              className={clsx(
                'border-2 rounded-md p-2 transition duration-200 cursor-pointer h-[100%]',
                {
                  'border-gray-500 border-dashed': !isDragActive,
                  'border-gray-400 bg-[var(--utility)]': isDragActive,
                }
              )}
            >
              <input
                type="file"
                accept={accept}
                onChange={handleFileChange}
                ref={fileInputRef}
                disabled={isLoading}
                {...getInputProps()}
                className="hidden"
              />
              <div
                className={`flex flex-col items-center justify-evenly cursor-pointer transition-opacity p-2 w-full h-full ${
                  isDragActive ? 'opacity-100' : 'opacity-60'
                }`}
              >
                <div className='flex flex-col justify-center items-center w-full h-[60%]'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="block w-[85%] h-[85%] sm:w-[90%] sm:h-[90%] md:w-[95%] md:h-[95%] lg:w-[100%] lg:h-[100%] text-gray-400"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                    />
                  </svg>
                </div>
                <div className='text-center'>
                  <p className="font-medium">Drag & drop your file here</p>
                  <p className="text-sm text-gray-500">or click to select</p>
                </div>
              </div>  
            </div>
          )}
        </div>
        <p className="mt-1 text-xs text-gray-500">
          Supported file: {accept}. Max {maxSizeMB}MB.
        </p>
      </div>
      <div>
        {errorMsg && (
          <p className="mb-1 text-xs text-red-500 font-medium">{errorMsg}</p>
        )}
        <Button
          type="submit"
          className="bg-[var(--foreground)] text-[var(--background)] cursor-pointer hover:opacity-85 hover:bg-[var(--foreground)] h-full rounded-md shadow-none"
        >
          {isLoading ? 'Uploading...' : buttonText}
        </Button>
      </div>
    </form>
  );
}
