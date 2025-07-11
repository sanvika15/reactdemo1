
import React from "react";

const Profile = (person) => {

    return (
        <div>
            <h1>Profile Information</h1>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Occupation: {person.occupation}</p>
        </div>
    );
}
export default Profile;