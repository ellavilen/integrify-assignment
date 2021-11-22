import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';

const User = () => {

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [user, setUser] = useState([]);
const {id} = useParams();

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then(res => res.json())
        .then(
            (data) => {
                console.log(data);
                setUser(data);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
}, [id])
if (error) {
    return <div>Error: {error.message}</div>;
}
if (!isLoaded) {
    return <div>Loading...</div>;
}  

if (user) {
    return (
        <div className="user-details-container">
            <div className="user-details">
            <ul>
            <p>Name:</p> {user.name}
            <p>Username:</p> {user.username}
            <p>Email:</p> {user.email}
                <p>Address:</p> 
                <li>Street: {user.address.street}</li>
                <li>Suite: {user.address.suite}</li>
                <li>City: {user.address.city}</li>
                <li>Zipcode: {user.address.zipcode}</li>
                <li>Geo:</li>
                <li>Lat: {user.address.geo.lat}</li>
                <li>Lat: {user.address.geo.lng}</li>
            <p>Phone:</p> {user.phone}
            <p>Website:</p> {user.website}
                <p>Company: </p>
                <li>Name: {user.company.name}</li>
                <li>Catchphrase: {user.company.catchPhrase}</li>
                <li>Bs: {user.company.bs}</li>
                 </ul>
                 <div className="button">
                    <Link to={`/`}><h5>Back</h5></Link>
                 </div>
        </div>
        </div>
    );
}
}
export default User;