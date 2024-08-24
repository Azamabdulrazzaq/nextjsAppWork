// pages/index.js

import { useState, Image } from 'react';

export default function Home() {
    const [base64, setBase64] = useState(null);
    const [fileName, setFileName] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first selected file
        if (file) {
            const reader = new FileReader();

            // Event listener to handle file load
            reader.onloadend = () => {
                setBase64(reader.result); // Set the Base64 string
                setFileName(file.name); // Set the file name
            };

            reader.readAsDataURL(file); // Convert the file to Base64
        }
    };

    return (
        <div>
            <h1>Upload and Convert to Base64</h1>
            <input type="file" onChange={handleFileChange} /> {/* File input element */}

            {base64 && (
                <div>
                    <h2>File: {fileName}</h2>
                    {fileName.match(/\.(jpeg|jpg|gif|png)$/) ? ( // Check if the file is an image
                        <img src={base64} alt={fileName} style={{ maxWidth: '500px', maxHeight: '500px' }} />

                    ) : (
                        <pre>{base64}</pre> // Display Base64 string for non-image files
                    )}
                </div>
            )}
        </div>
    );
}
