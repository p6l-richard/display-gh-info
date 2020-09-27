import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Col } from 'reactstrap';

const Example = (props) => {
  return (
      <Col xs="auto">
    <ListGroup vertical>
        {Object.keys(props.user).filter(item => item !== 'plan').map(item => { // skipping `plan` because it's an object and would break react
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

export default Example;