import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Col } from 'reactstrap';

const UserInfoTable = (props) => {
    const relevantFields = ['login', 'name', 'location', 'bio', 'login', 'blog', 'company', 'email', 'followers', 'following']
  return (
      <Col xs="auto">
    <ListGroup vertical>
        {Object.keys(props.user).filter(item => relevantFields.includes(item)).map(item => { // skipping `plan` because it's an object and would break react
            return (
                <ListGroupItem>
            <ListGroupItemHeading>{item}</ListGroupItemHeading>
            <ListGroupItemText>{props.user[item]}</ListGroupItemText>
        </ListGroupItem>
        )})}
    </ListGroup>
        </Col>
  );
}

export default UserInfoTable;