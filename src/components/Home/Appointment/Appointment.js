import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import doctor from '../../../images/doctor.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointment-wrapper text-white">
            <Container fluid>
                <Row>
                    <Col md={5}>
                        <img className="img-fluid" src={doctor} alt="" />
                    </Col>
                    <Col md={7}>
                        <h4 className="topper-margin">Appointment</h4>
                        <h1>Making an Appointment Today</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Button>Learn More</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Appointment;