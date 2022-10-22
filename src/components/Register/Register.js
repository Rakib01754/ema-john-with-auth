import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import './Register.css'

const Register = () => {
    const [error, setError] = useState(null)
    const { signUp } = useContext(AuthContext);

    // form Submit 
    const handleFormSubmit = (event) => {
        setError('')
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        form.reset()
        if (password.length < 6) {
            setError('password must be 6 characters long')
            return;
        }
        if (password !== confirm) {
            setError('confirm password did not match with password');
            return;
        }
        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })

        console.log(email, password, confirm)

    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already Have an Account <Link to='/login'>Login</Link></p>
            {
                error && <span className='text-error'>{error}</span>
            }
        </div>
    );
};

export default Register;