import React, { useState, useContext, useEffect } from 'react';
import MyContext from '../context/MyContext';

function ProfileSetting() {

  const contextData = useContext(MyContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleUserChange(event) {
    setUsername( event.target.value );
  }

  function handleEmailChange(event) {
    setUsername( event.target.value );
  }

  function handlePasswordChange(event) {
    setUsername( event.target.value );
  }

  useEffect(() => { 
    setUsername(contextData.user.name || '');
    setEmail(contextData.user.email || '');
    setPassword(contextData.user.password || '');
  }, [contextData.user]);

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:4000/users/1', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: username, email: email, password: password }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        contextData.setUser(data);
      }
      )
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={username} onChange={handleUserChange} />

      </label>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Password:
        <input type="password" name="Password" value={password} onChange={handlePasswordChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}


export default ProfileSetting;