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
    const name = formData.get('uploader-name') as string | null;
    const file = formData.get('file') as File | null;
    
    
    if (!name) {
        console.error('no name entered');
        return;
    }
    if (!file) {
        console.error('no file selected');
        return;
    }
    
    const fileContents = getFileContents(file);
}


function getFileContents(file: File) {
    let fileContents: string | ArrayBuffer = '';
    const reader = new FileReader();
    
    reader.onload = (e) => {
        if (!e.target?.result) {
            console.error('failed to read file contents');
            return;
        }
        
        fileContents = e.target?.result;
    }
    
    reader.readAsText(file);
    
    if (fileContents.length < 1) {
        console.error('file content length is less than 1');
        return;
    }
    
    return fileContents;
}
