import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    return (
        <div>
            <h3>User Details:</h3>
            <h4>Name: {friend.name}</h4>
            <h5>Email: {friend.email}</h5>
        </div>
    );
};

export default FriendDetails;