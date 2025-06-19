export default function SignupForm(){
    return(
        <>
            <form>
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>
                <input type="text" placeholder="Re-enter Password"></input>
                <button type="submit">Create Account</button>
            </form>
        </>
    );
}

