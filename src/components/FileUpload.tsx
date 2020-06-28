import React, { FC, useState } from 'react';
import { storage } from '../services/firebase';

const FileUpload: FC = () => {
  const [pictureFile, setPicture] = useState('');
  const [uploadValue, setUploadValue] = useState(0);

  const handledUpload = (event: any): void => {
    const file = event.target.files[0];
    const storageRef = storage.ref(`/fotos/${file.name}`);
    const task = storageRef.put(file);

    task.on(
      'state_changed',
      snapshot => {
        const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadValue(percentage);
      },
      error => {
        console.log(error.message);
      },
      () => {
        storageRef.getDownloadURL().then(ulr => {
          setPicture(ulr);
        });
        setUploadValue(100);
      },
    );
  };

  return (
    <div>
      <input type="file" onChange={handledUpload} />
      <br />
      <img width={360} src={pictureFile} />
      <br />
      <progress value={uploadValue} max={100} />
    </div>
  );
};

export default FileUpload;
