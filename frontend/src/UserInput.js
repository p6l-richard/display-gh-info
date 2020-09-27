import React, {useState} from 'react';
import { Container, Col, InputGroup, InputGroupAddon, InputGroupText, Input, Label, Form, FormGroup, Button } from 'reactstrap';

const Example = (props) => {
    const handleChange = (e) => {
        props.onChange(e)
    }
    const handleSubmit = (e) => {
        props.onSubmit(e)
    }
  return (
    <div>
        <Container >
            <Col xs={{size: 6, offset: 3}} >
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label />
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                            <InputGroupText>@</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Github username" type="text" name="username" id="username"  onChange={handleChange} required/>
                        </InputGroup>
                    </FormGroup>
                    <Button color="info">Show User Info</Button>
                </Form>
            </Col>

        </Container>
    </div>
  );
};

export default Example; 