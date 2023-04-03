import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Service = () => {
    const data = useLoaderData();
    return (
        <div>
           <h3>Total friends: {data.length}</h3> 
           <div style={{display: "flex", flexWrap: "wrap"}}>
           {
            data.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
           }
           </div>
        </div>
    );
};

export default Service;