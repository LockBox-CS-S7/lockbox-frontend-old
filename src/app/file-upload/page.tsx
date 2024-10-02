'use client'

import { FormEvent } from 'react';
import './file-upload.css';

export default function FileUpload() {
    return (
        <div className="file-upload-container">
            <h2>Upload a file</h2>
            
            <form className="upload-form" onSubmit={handleFormSubmit}>
                <label>uploader name</label>
                <input id="uploader-name" name="uploader-name" type="text"/>
                
                <label>select file</label>
                <input id="file" name="file" type="file"/>
                
                <input type="submit" value="submit" className='submit-btn'/>
            </form>
        </div>
    );
}


function handleFormSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const file = formData.get('file');
    if (file) {
        
    }
    
}
