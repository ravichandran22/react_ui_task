import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function CalenderForm() {
  return (
    <Container>
      <Form>
        <Row className='mb-2'>
          <Col>
            <Form.Group>
              <Form.Label>Pick up Date & Time*</Form.Label>
              <DatePicker className="form-control" placeholderText="**" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Return Date & Time*</Form.Label>
              <DatePicker className="form-control" placeholderText="**" />
            </Form.Group>
          </Col>
        </Row>
        {/* Full width pick up location input */}
        <Form.Group>
          <Form.Label>Pick up Location*</Form.Label>
          <Form.Control type="text" placeholder="Enter Pick up Location" />
        </Form.Group>
        <h5 style={{paddingTop: 20}}>Rental Info</h5>
        <div className='Rental-Info'>
          <p style={{marginRight: 'auto', display: 'inline-block'}}>Rental Per Day</p>
          <span style={{marginLeft: 'auto'}}>$800</span>
        </div>
        <div className='Rental-Info'>
          <p style={{marginRight: 'auto', display: 'inline-block'}}>Rental Per Hour</p>
          <span style={{marginLeft: 'auto'}}>$120</span>
        </div>
        <p>*Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Button variant="light" type="submit" className="col-12 mt-2">
          Reserve Now
        </Button>
      </Form>
    </Container>
  );
}

export default CalenderForm;
