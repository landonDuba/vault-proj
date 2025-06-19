import './Login.css'
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Modal from './Modal'

export default function Login() {
    const [modalType, setModalType] = useState(null); //null, login, or signup

    return (
        <>
        <h2>Welcome to Memory Vault</h2>
        <div className="login-btn-group">
            <button 
                className='login-btn' 
                onClick={() => setModalType('login')}>
                Login</button>
            <button 
                className='login-btn' 
                onClick={() => setModalType('signup')}>
                Sign Up</button>
        </div>

        {modalType && (
            <Modal onClose={() => setModalType(null)}>
                {modalType === 'login' ? <LoginForm/> : <SignupForm/>}
            </Modal>
        )}
        </>
    );
}