// components/UploadComponent.tsx
import React, { useState } from 'react';
import { store } from '@/utils/firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface UploadComponentProps {
  onUploadComplete: (url: string) => void;
}

const UploadComponent: React.FC<UploadComponentProps> = ({ onUploadComplete }) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (file) {
      setUploading(true);
      const storageRef = ref(store, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress
        },
        (error) => {
          toast.error(`Error: ${error.message}`);
          setUploading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            toast.success('Uploaded to Firebase Storage!');
            setUploading(false);
            onUploadComplete(downloadURL);
          });
        }
      );
    } else {
      toast.error('No file selected.');
    }
  };

  return (
    <div>
      <ToastContainer />
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default UploadComponent;
