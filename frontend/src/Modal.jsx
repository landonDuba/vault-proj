import './Modal.css'

export default function Modal({children, onClose}){
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <button className="close-btn" onClick={onClose}>x</button>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
        </div>
    );
}