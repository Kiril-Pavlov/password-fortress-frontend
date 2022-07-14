import React from 'react'
import { useEffect } from 'react'
import axios from "axios";
import Api from "./Api";
import { useState } from 'react';
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from 'react-router-dom';

function HomePage() {

    const [passwords, setPasswords] = useState([])
    const [search, setSearsh] = useState('')

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/entrys/?format=json")
            .then(data => {
                setPasswords(data.data)

            })
    }, [])
    console.log(passwords)

    const handleSearchInput = (e) => {
        let searchToLower = e.target.value.toLowerCase()
        setSearsh(searchToLower)
        console.log(search)
    }

    const searchedPasswords = passwords.filter(item => {
        if (search === '') {
            return item;
        } else if (item.platform.toLowerCase().includes(search.toLowerCase())) {
            return item;
        }
    })





    return (
        <div className="main-container">
            <h1>Password Fortress</h1>
            <Link to="/add">
                <button className='add-button'>Add</button>
            </Link>
            <div className='search-container'>
                <label htmlFor="search-input">Search: </label>
                <input type="text" onChange={handleSearchInput} />
            </div>
            <div className='password-entries-container'>
                {searchedPasswords.map((password) => (

                    <div className='password-entry-item' key={password.id}>
                        <h3>{password.platform}</h3>
                        <hr />
                        Username:<div>{password.username}</div>
                        <div>
                            <input type="password" value={password.password} disabled />
                            <button>See/Hide</button>
                            <button>Copy</button>
                        </div>
                        <hr />
                        <Link to={`/entry/${password.id}`}>
                            More info ...
                        </Link>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default HomePage