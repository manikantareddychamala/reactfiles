import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Dummy() {
  const [user, setUser] = useState(null); // start with null

  useEffect(() => {
    axios.get("https://dummyjson.com/users/1")
      .then(res => setUser(res.data))
      .catch(err => console.log("Error fetching user:", err));
  }, []);

  return (
    <>
      {/* Using ternary operator for conditional rendering */}
      {user 
        ? (
          <>
            <h1>{user.id} - {user.firstName} {user.lastName}</h1>
            <p>Maiden Name: {user.maidenName}</p>
            <p>Age: {user.age}</p>
            <p>Role: {user.role}</p>
            <p>City: {user.address?.city}</p>
            <p>State: {user.address?.state}</p>
            <img src={user.image} alt={user.firstName} width={150} />
          </>
        ) 
        : <h2>Loading user data...</h2>
      }
    </>
  );
}

export default Dummy;
