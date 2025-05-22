export default function Alert({ text, textColor, bgColor, children }) {
    const alertText = text || `Si è verificato un errore`;
    const textClass = textColor ? `text-${textColor}` : `text-white`;
    const bgClass = bgColor ? `bg-${bgColor}` : `bg-red`;

    return (
        <div className={`alert ${textClass} ${bgClass}`}>
            {children || alertText}
        </div>
    );
}