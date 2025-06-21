import './Modal.css'

export default function LoginForm(){
    return(
        <>
            <form className='authForm'>
                <input type="text" placeholder="Username" className='formElements'></input>
                <input type="text" placeholder="Password" className='formElements'></input>
                <button type="submit" className='formElements'>Login</button>
            </form>
        </>
    );
}

