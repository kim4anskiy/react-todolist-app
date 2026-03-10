import { useEffect } from 'react';
import cl from './Modal.module.css'

const Modal = ({active, setActive, children}) => {
    const modalClasses = [cl.modal, active ? cl.active : ''];
    const contentClasses = [cl.modal__content, active ? cl.active : ''];

    useEffect(() => {
        active 
            ? document.body.style.overflow = 'hidden' 
            : document.body.style.overflow = 'auto'
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [active])

    return (
        <div 
            className={modalClasses.join(' ')} 
            onClick={() => setActive(false)}>
            <div 
                className={contentClasses.join(' ')} 
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
}

export default Modal;