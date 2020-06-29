import React, { FC, useState } from 'react';
import { Form, Image } from 'react-bootstrap';
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
    <>
      <Form.Group className="custom-file">
        <Form.File
          onChange={handledUpload}
          className="custom-file-input"
          id="image"
          data-browse="Cargar"
        />
        <Form.Label className="custom-file-label" htmlFor="image">
          Seleccionar Archivo
        </Form.Label>
      </Form.Group>
      <Image src={pictureFile} style={{ width: 150, height: 'auto' }} />
    </>
  );
};

export default FileUpload;
