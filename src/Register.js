import { useState, useEffect, useRef } from 'react';
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


//REGEX USER DESCRIPTION
// must start with a small or big letter and then it can have from 7 to 23  characters involving
// small letter, big letter, number and _
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{7,23}$/;

//REGEX PASSWORD DESCRIPTION
//must have at least one small letter, one big letter, one digit and one special character
//it can be from 8 to 24 characters long
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = '/register';


function Register() {
    const userRef = useRef();
    const errRef = useRef();

    //states for user value, validation and focus
    const [user, setUser] = useState('');
    const [validUser, setValidUser] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    //states for password value, validation and focus
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    //states for matching password value, validation and focus
    const [matchPassword, setMatchPassword] = useState('');
    const [validMatchPassword, setValidMatchPassword] = useState(false);
    const [matchPasswordFocus, setMatchPasswordFocus] = useState(false);

    //states for error or cuccess messages
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(false);

    // useEffect that sets the focus on the user input
    // useEffect(() => {
    //     userRef.current.focus();
    // },[])

    // useEffect when validating the user
    useEffect(() => {
        const isValidUser = USER_REGEX.test(user);
        console.log(isValidUser);
        console.log(user);
        setValidUser(isValidUser);
    }, [user])

    // useEffect when validating the password and the matching password
    useEffect(() => {
        const isValidPassword = PASSWORD_REGEX.test(password);
        console.log(isValidPassword);
        console.log(password);
        setValidPassword(isValidPassword);
        const arePasswordsMatching = password === matchPassword;
        setValidMatchPassword(arePasswordsMatching);
    }, [password, matchPassword])

    //useEffect for error message
    useEffect(() => {
        setErrorMessage('');
    }, [user, password, matchPassword])

    const handleSubmit = async (e) => {
        setSuccessMessage(true)
        console.log('success message',successMessage)
        console.log(user, password)

        //axios call

        // try {
        //     const response = await axios.post(
        //         REGISTER_URL,
        //         JSON.stringify({user, password}), //check if the backend expects the same names
        //         {
        //             headers: {'Content-Type': 'application/json'},
        //             withCredentials:true
        //         }
        //         )
        //         console.log(response.data);
        //         console.log(response.accessToken)
        //         console.log(JSON.stringify(response))
        //         setSuccessMessage(true)
        // } catch (error) {
        //     console.log(error)
        //     //409 username already taken
        //     //put several if elseif statements for errors
        // }
    }
    
    return (
        <>
            {successMessage ? (
                <div className='register-container'>
                    <h1>Success</h1>
                    <p>
                        <a href="#">SignIn</a>
                    </p>
                </div>
            ):(

        <div className='register-container'>
            <p className={errorMessage ? "errorMessage" : "offscreen"}>{errorMessage}</p>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <span className={validUser ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validUser || !user ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <br />
                <input
                    type="text"
                    id="username-input"
                    onChange={(e) => setUser(e.target.value)}
                    required
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    autoComplete="off"
                />
                <p
                    id='valid-username-instructions'
                    className={userFocus && user && !validUser ? "instructions" : "offscreen"}
                >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters <br />
                    must begin with letter <br />
                    letters, numbers, underscores, hyphens allowed.

                </p>

                <br />

                <label htmlFor="password">Password:</label>
                <br />
                <input
                    type="password"
                    id="password-input"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                />

                <span className={validPassword ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validPassword || !password ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>

                <p
                    id='valid-password-instructions'
                    className={passwordFocus && password && !validPassword ? "instructions" : "offscreen"}
                >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    8 to 24 characters <br />
                    must include small letter, big letter, number and special character <br />
                    letters, numbers, underscores, hyphens allowed.
                </p>

                <br />

                <label htmlFor="match-password">
                    Confirm Password:
                </label>
                <input
                    type="password"
                    id="confirm-password"
                    onChange={(e) => setMatchPassword(e.target.value)}
                    required
                    onFocus={() => setMatchPasswordFocus(true)}
                    onBlur={() => setMatchPasswordFocus(false)}
                />

                <span className={validMatchPassword && matchPassword ? "valid" : "hide"}>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validMatchPassword || !matchPassword ? "hide" : "invalid"}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>

                <p
                    id='match-password-instructions'
                    className={matchPasswordFocus && matchPassword && !validMatchPassword ? "instructions" : "offscreen"}
                >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    must be same as password
                </p>

                <br />

                <button type='submit' disabled={!validUser || !validPassword | !validMatchPassword ? true : false}>
                    Sign Up
                </button>
            </form>
            <p>
                Already registered? <br />
                <span className='line'>
                    {/* put router link here*/}
                    <Link to="/login">
                        Sign In
                    </Link>
                </span>
            </p>
        </div>
            )}
            </>
    )
}

export default Register