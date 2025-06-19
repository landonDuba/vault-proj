import './Modal.css'

export default function Modal({children, onClose}){
    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>x</button>
                {children}
            </div>
        </div>
    );
}