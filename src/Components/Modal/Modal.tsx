import React from 'react';
import './modal.css'
interface ModalProps {
    active: boolean;
    setActive:any;
}
const Modal:React.FC<ModalProps> = ({active, setActive, children}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
               <div className="children">{children}</div> 
                </div>
        </div>
    )
}

export default Modal;