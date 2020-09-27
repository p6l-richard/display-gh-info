import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput'
import UserInfo from './UserInfo'
import {Row} from 'reactstrap'

function App() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userProfileRqst = await fetch('/github-user-profile/users/' + username)
    if (userProfileRqst.ok) {
      setUser(await userProfileRqst.json())
    } else {
      setUser({})
    }

  }
  const handleChange = (e) => {
    e.preventDefault();
  setUsername(e.target.value)
}
  return (
    <div className="App">
      <p>User Info</p>
      <UserInput onSubmit={handleSubmit} onChange={handleChange}/>
      <hr />
      <Row className="justify-content-center">
        {!!Object.keys(user).length && <UserInfo user={user} />}
      </Row>
    </div>
  );
}

export default App;
