import './Modal.css'

export default function SignupForm(){
    return(
        <>
            <form className='authForm'>
                <input type="text" placeholder="Username" className='formElements'></input>
                <input type="text" placeholder="Password" className='formElements'></input>
                <input type="text" placeholder="Re-enter Password" className='formElements'></input>
                <button type="submit" className='formElements'>Create Account</button>
            </form>
        </>
    );
}

