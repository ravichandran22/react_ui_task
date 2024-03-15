import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import car from '../images/Hyundai-Grand.jpg';
import "./Home.css";
import CalenderForm from './CalenderForm';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faEnvelope, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <Container className='home-container' fluid>
      <Row>
        {/* Calendar form */}
        <Col xs={12} md={4}>
          <CalenderForm />
        </Col>
        {/* Car details */}
        <Col xs={12} md={8} className='right-side-column'>
          <Row>
            <Col xs={12} md={6}>
              <img src={car} alt='car' className="img-fluid car-img" />
            </Col>
            <Col xs={12} md={6}>
              <Card style={{ width: '100%' }}>
                <Card.Body>
                  <img src={car} className="car-logo img-fluid" alt='car'/>
                  <Card.Title>RentCar - Car rental Service</Card.Title>
                  <div className="ratings">
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <FontAwesomeIcon icon={faStar} className="text-muted" />
                    <span>(2354 ratings)</span>
                  </div>
                  <Button variant="light" className="mb-2 mt-5">Send Message <FontAwesomeIcon icon={faEnvelope} /></Button>{' '}
                  <Button variant="light" className="mb-2 mt-5">Visit Profile</Button>{' '}
                </Card.Body>
              </Card>
            </Col>
            {/* Vehicle information */}
            <Col xs={12} className='vehicle-info-container'>
              <h2>Vehicle Information</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              <Row>
                {/* Vehicle info items */}
                <Col xs={6} md={3}>
                  <div className='vehicle-info'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h4>3745 CC</h4>
                    <p>3.0L</p>
                  </div>
                </Col>
                <Col xs={6} md={3}>
                  <div className='vehicle-info'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h4>3745 CC</h4>
                    <p>3.0L</p>
                  </div>
                </Col>
                <Col xs={6} md={3} className='column-3'>
                  <div className='vehicle-info'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h4>3745 CC</h4>
                    <p>3.0L</p>
                  </div>
                </Col>
                <Col xs={6} md={3} className='column-4'>
                  <div className='vehicle-info'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h4>3745 CC</h4>
                    <p>3.0L</p>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* Condition and repair */}
            <Col xs={12} className='condition-container'>
              <Row className='mt-4'>
                <Col xs={12} md={6}>
                  <div className='condition'>
                    <h4>Vehicle Condition</h4>
                    <hr />
                    <Form>
                    <Form.Group controlId="exampleForm.ControlRadio1" style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: 'auto' }}>
                                    <Form.Check type="radio" label="Front & Rear Brakes" id="radio1" name="radioOptions" />
                                </div>
                                <span style={{ marginLeft: 'auto', color: 'green' }}>Excellent</span>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlRadio1" style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: 'auto' }}>
                                    <Form.Check type="radio" label="Engine Condition" id="radio1" name="radioOptions" />
                                </div>
                                <span style={{ marginLeft: 'auto', color: 'green' }}>Excellent</span>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlRadio1" style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: 'auto' }}>
                                    <Form.Check type="radio" label="Average Mileage" id="radio1" name="radioOptions" />
                                </div>
                                <span style={{ marginLeft: 'auto', color: 'green' }}>31.5km/L</span>
                            </Form.Group>
                    </Form>
                  </div>
                </Col>
                <Col xs={12} md={6} className='Repair-column'>
                  <div className='condition'>
                    <h4>Recent Repairs and Services</h4>
                    <hr />
                    <Form>
                    <Form.Group controlId="exampleForm.ControlRadio1" style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: 'auto' }}>
                                    <Form.Check type="radio" label="Front & Rear Brakes" id="radio1" name="radioOptions" />
                                </div>
                                <span style={{ marginLeft: 'auto' }}>2 days ago</span>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlRadio1" style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: 'auto' }}>
                                    <Form.Check type="radio" label="Engine Condition" id="radio1" name="radioOptions" />
                                </div>
                                <span style={{ marginLeft: 'auto' }}>1 day ago</span>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlRadio1" style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ marginRight: 'auto' }}>
                                    <Form.Check type="radio" label="Average Mileage" id="radio1" name="radioOptions" />
                                </div>
                                <span style={{ marginLeft: 'auto' }}>1 day ago</span>
                            </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* Images */}
            <Col xs={12} className='images-container mt-4'>
                <div className='images'>
                    <div className='header'>
                        <h4 style={{marginRight: 'auto', display: 'inline-block'}}>Images</h4>
                        <span style={{marginLeft: 'auto', color: '#0000EE'}}>See All <FontAwesomeIcon icon={faChevronRight} /></span>
                    </div>
                    <hr />
                <Row>
                  <Col xs={6} md={3}>
                    <img src={car} alt='car' className="img-fluid" />
                  </Col>
                  <Col xs={6} md={3}>
                    <img src={car} alt='car' className="img-fluid" />
                  </Col>
                  <Col xs={6} md={3}>
                    <img src={car} alt='car' className="img-fluid" />
                  </Col>
                  <Col xs={6} md={3}>
                    <img src={car} alt='car' className="img-fluid" />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
