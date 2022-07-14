import React from 'react'
import { Link } from 'react-router-dom'

function AddPasswordDetail() {
    return (
        <div className='add-password-container'>
            <h3>Enter new Password Entry Detail</h3>
            <hr />
            <div className='add-password-inputs'>
                <label htmlFor="platform">Platform: </label>
                <input type="text" id='platform'/>
                <label htmlFor="url">URL: </label>
                <input type="text" id='url'/>
                <label htmlFor="username">Username: </label>
                <input type="text" id='username'/>
                <label htmlFor="password">Password: </label>
                <input type="text" id='password'/>
                <label htmlFor="email">E-mail: </label>
                <input type="text" id='email'/>
                <label htmlFor="created">Created: </label>
                <input type="text" id='created'/>
                <label htmlFor="updated">Updated: </label>
                <input type="text" id='updated'/>
                <label htmlFor="question">Secret Question: </label>
                <input type="text" id='question'/>
                <label htmlFor="answer">Secret Answer: </label>
                <input type="text" id='answer'/>
                <label htmlFor="phrases">Secret Phrases: </label>
                <input type="text" id='phrases'/>
                <label htmlFor="notes">Notes: </label>
                <textarea id='notes'/>
            </div>

            <hr />
            <Link to={'/'}>
                Back to HomePage
            </Link>
        </div>
    )
}

export default AddPasswordDetail