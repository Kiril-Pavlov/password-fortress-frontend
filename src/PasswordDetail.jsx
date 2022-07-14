import { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import copy from "copy-to-clipboard";

function PasswordDetail() {
    let parametars = useParams();
    const [itemDetail, setItemDetail] = useState({})
    const [passwordShown, setPasswordShown] = useState(false)

    //console.log(parametars.id)
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/entry/?entryId=${parametars.id}&format=json`)
            .then(data => {
                //console.log(data.data)
                setItemDetail(data.data)
            })
    }, [])

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown)
    }

    let copyText = itemDetail.password
    console.log(copyText)

    const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
     }

    return (
        <div className='item-detail-container' key={itemDetail.id}>
            <h3>{itemDetail.platform}</h3>
            <hr />
            Username:<div>{itemDetail.username}</div>
            <div>
                Password:
                <input type={passwordShown ? "text" : "password"} value={itemDetail.password} disabled />
                <button onClick={togglePasswordVisibility}>{passwordShown ? "Hide" : "Show"}</button>
                <button onClick={copyToClipboard}>Copy</button>
            </div>
            <div>
                <div>E-mail: {itemDetail.email}</div>
                <div>Created: {itemDetail.created}</div>
                <div>Updated: {itemDetail.lastUpdated}</div>
                <div>Secret Question: {itemDetail.secretQuestion}</div>
                <div>SecretAnswer: {itemDetail.secretAnswer}</div>
                <div>Secret Phrases: {itemDetail.secretPhrases}</div>
                <div>Notes: {itemDetail.notes}</div>
            </div>
            <hr />
            <Link to={'/'}>
                Back to HomePage
            </Link>
        </div>
    )
}

export default PasswordDetail