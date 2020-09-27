import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput'
import UserInfoTable from './UserInfoTable'
import {Row, Col, Button, Spinner} from 'reactstrap'

function App() {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userProfileRqst = await fetch('/github-user-profile/users/' + username)
    if (userProfileRqst.ok) {
      setUser(await userProfileRqst.json())
    }
  }
  const handleChange = (e) => {
    e.preventDefault();
    setUsername(e.target.value)
  }
  const handleClick = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const key = e.target.value + '_followers';
    const followerGroupRqst = await fetch('/github-followers/users/' + user.login + '/groups/' + e.target.value);
    if (followerGroupRqst.ok) {
      setUser({...user, ...await followerGroupRqst.json()});
    }
    setIsLoading(false)
  }

  const infoHeader = (
  <Row>
    <Col>
      <h2>Info</h2>
    </Col>
    {['mutual', 'oneway'].map(followerGroup => {
    return (<Col>
    {isLoading && <Spinner color="info"/>}
          <Button disabled={isLoading} onClick={handleClick} value={followerGroup}>Show {followerGroup} followers</Button>
          </Col>
          )
    })}
  </Row>
  )

  const followerLists = (
    <Row>
      <Col>
        <UserInfoTable user={user} />
      </Col>
      <Col>
        {!!user.hasOwnProperty('mutual_followers') && user.mutual_followers.map(follower => <li>{follower.login}</li>)}
      </Col>
      <Col>
        {!!user.hasOwnProperty('oneway_followers') && user.oneway_followers.map(follower => <li>{follower.login}</li>)}
      </Col>
    </Row>
  )
  
  return (
    <div className="App">
      <h1>GitHub User Info</h1>
      <p>Display and enrich GitHub user profiles</p>
      <UserInput onSubmit={handleSubmit} onChange={handleChange}/>
      <hr />
      {!!Object.keys(user).length && infoHeader}
      {!!Object.keys(user).length && followerLists}

    </div>
  );
}

export default App;
