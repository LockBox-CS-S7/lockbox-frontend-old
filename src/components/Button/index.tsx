import './button-style.css';

export default function Button({text, action}: {text: string, action: ((event: any) => void) | null}) {
    if (action) {
        return (
            <button onClick={action} className='button'>{text}</button>
        );
    } else {
        return (
            <button className='button'>{text}</button>
        );
    }
}
