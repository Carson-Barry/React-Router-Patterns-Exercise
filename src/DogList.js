import React from "react";
import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
    return (
        <div className="DogList">
            <h2>Dog List</h2>
            <ul>
                {dogs.map(dog => {
                    return (
                        <li><Link to={dog.name.toLowerCase()}>{dog.name}</Link></li>
                    );
                })}
            </ul>
        </div>
    )
}


export default DogList;