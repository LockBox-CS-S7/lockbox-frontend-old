'use client'

import Button from '@/components/Button';
import './files-style.css';

export default function Files() {
    return (
        <div className="container">
            <h1>File actions</h1>
            <a href="/files/download">download a file</a>
            <a href="/files/upload">upload a file</a>
            <Button text='test button' action={null}/>
        </div>
    );
}
