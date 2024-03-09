import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import * as styles from './styles';

const FileUploader = () => {
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState('');
  
    const onDrop = (acceptedFiles) => {
      // Assuming only one file is accepted
      const uploadedFile = acceptedFiles[0];
      setFile(uploadedFile);
    };
  
    const handleSubmit = async () => {
      try {
        const formData = new FormData();
        if (file) {
          formData.append('file', file);
        }
        formData.append('description', description);
  
        // Replace 'your-api-endpoint' with your actual API endpoint
        await axios.post('your-api-endpoint', formData);
  
        console.log('Data submitted successfully!');
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    };
  
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
  
    return (
        <div style={styles.containerStyle}>
          <div {...getRootProps()} style={styles.dropzoneStyle}>
            <input {...getInputProps()} />
            <p style={styles.uploadText}>Drag 'n' drop a PDF file here, or click to select one</p>
          </div>
          <div style={styles.fileInfoContainer}>
            {file && (
              <p style={styles.fileInfo}>Selected File: {file.name}</p>
            )}
            <textarea
              placeholder="Enter a large paragraph for the description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textareaStyle}
            />
            <button onClick={handleSubmit} style={styles.submitButton}>Submit</button>
          </div>
        </div>
      );
    };
  

export default FileUploader;
