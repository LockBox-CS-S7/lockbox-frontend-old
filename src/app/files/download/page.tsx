'use client'

import { FormEvent } from 'react';
import axios from 'axios';
import './download-style.css';


export default function DownloadFile() {
    return (
        <div className='container'>
            <h1>Download file</h1>
            <form className='download-form' onSubmit={onSubmit}>
                <label>file id:</label>
                <input id='file_id' type='text' name='file_id'/>
                
                <input type='submit' value='submit'/>
            </form>
        </div>
    );
    
    
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        const formData = new FormData(event.currentTarget);
        const fileId = formData.get('file_id') as string | null;
        if (!fileId) {
            console.error('entered file id was "null"');
            return;
        }
        
        try {
            const res = await axios.get('http://localhost:8080/api/' + fileId);
            console.log('response: ' + res);
        } catch {
            console.error('Failed to get file from server');
        }
    }
}