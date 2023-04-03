import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {id, name, username, email} = friend;
    return (
        <div style={{border: "1px solid purple", padding: "10px", margin: "10px", borderRadius: "5px"}}>
            <h3>Name: {name}</h3>
            <h4>User Name: {username} </h4>
            <p>Email: {email}</p>
            <p><Link to={`/friend/${id}`}>Click here for details</Link></p>
        </div>
    );
};

export default Friend;