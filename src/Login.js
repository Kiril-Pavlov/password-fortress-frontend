import { useRef, useState, useEffect, useContext } from 'react';
import {Link} from 'react-router-dom'



function Login() {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // },[])

    useEffect(() => {
        setErrorMessage('');
    }, [user, password])

    // const handleSubmit = async (e) => {
    //     try {
    //         const response = await axios.post(LOGIN_URL,
    //             JSON.stringify({ user, password }),
    //             {
    //                 headers: { 'Content-Type': 'application/json' },
    //                 withCredentials: true
    //             })
    //         // console.log(response.data);
    //         // console.log(response.accessToken)
    //         // console.log(JSON.stringify(response))
    //         const accessToken = response.data.accessToken;
    //         const roles = response.data.roles;
    //         setAuth({user, password, roles, accessToken})
    //         setUser('');
    //         setPassword('')
    //         setSuccessMessage(true);
    //     } catch (error) {
    //         console.log(error);
    //         //set several if else if for errors
    //         //400 missing username or password
    //         //401 unauthorized
    //         // setErrorMessage
    //         errRef.current.focus();
    //     }
    // }

    return (
        <>
            {successMessage ? (
                <div className='login-container'>
                    <h1>Yo ar logged in</h1>
                    <p>
                        <a href="#">Go to Password Fortress</a>
                    </p>
                </div>
            ) : (
                <div className='login-container'>
                    <p className={errorMessage ? "errorMessage" : "offscreen"}>{errorMessage}</p>
                    <h1>Login</h1>
                    {/* onSubmit handleSubmit function in form bellow */}
                    <form>
                        <label htmlFor="username">Username:</label>
                        <br />
                        <input
                            type="text"
                            id="username-input-login"
                            onChange={(e) => setUser(e.target.value)}
                            required
                            value={user}
                            autoComplete="off"
                        />
                        <br />
                        <label htmlFor="password">Password:</label>
                        <br />
                        <input
                            type="password"
                            id="password-input"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            value={password}
                        />
                        <br />
                        <button>Sign In</button>
                        <br />
                        <p>
                            Not registered? <br />
                            <span className='line'>
                                {/* put router link here*/}
                                <Link to="/register">
                                    Sign Up
                                </Link>
                            </span>
                        </p>
                    </form>

                </div>
            )}
        </>
    )
}

export default Login