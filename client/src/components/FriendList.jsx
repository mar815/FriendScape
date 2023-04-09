import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FriendList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/friends')
      .then((response) => setFriends(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>My Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id}>
            {friend.name} ({friend.location})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
