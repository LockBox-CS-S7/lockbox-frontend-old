import './help.css';


export default function Help() {
    return (
        <div className="help-container">
            <h2>About this app</h2>
            <p>LockBox is a a secure file storage solution. It allows its users to securely store files in the cloud.</p>
            <p>All stored files are encrypted using AES-GCM, so nobody can read their content without the correct passphrase.</p>
        </div>
    );
}
