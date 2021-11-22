import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [users, setUsers] = useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then(res => res.json())
        .then(
            (data) => {
                setIsLoaded(true);
                setUsers(data);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
  }, [])


  if (error) {
    return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
    return <div>Loading...</div>;
} else {
    return (
        
        <div className="grid-container">
            {users.map(user => (
                <div className="grid-item">
                <h1>{user.name}</h1>
                <h3>@{user.username}</h3>
                <h4>{user.website}</h4>
                <div className="button">
                    <Link to={`user/${user.id}`}><h5>Details</h5></Link>
                </div>
                </div>
                
            ))}
        </div>
        
    );
}
}
export default Home;