import React from "react";
import { useParams, Navigate } from "react-router-dom";

const DogDetails = ({ dogs }) => {
    const params = useParams();

    for (let i = 0; i < dogs.length; i++) {
        if (params.dogName.toLowerCase() === dogs[i].name.toLowerCase()) {
            return (
                <div className="DogDetails">
                    <h2>Dog Details</h2>
                    <h3>Name: {dogs[i].name}</h3>
                    <img src={dogs[i].src} alt={`Picture of dog named ${dogs[i].name}`}></img>
                    <ul>
                        <li>Age: {dogs[i].age}</li>
                        {dogs[i].facts.map((fact, i) => {
                            return (<li>{`Fact ${i+1}: ${fact}`}</li>)
                        })}
                    </ul>
                </div>
            )
        }
    }
    return (
        <Navigate to="/dogs" />
    )
}

export default DogDetails;