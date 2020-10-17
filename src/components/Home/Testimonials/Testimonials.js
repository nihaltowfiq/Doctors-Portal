import React from 'react';
import './Testimonials.css';
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/people1.png'
import img2 from '../../../images/people2.png'
import img3 from '../../../images/people3.png'


const fakeTestimonials = [
    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis provident quidem molestias atque aspernatur in voluptates corrupti delectus. Culpa, placeat?",
        name: 'Hayma Khatun',
        address: 'Turkey',
        img: img2
    },
    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis provident quidem molestias atque aspernatur in voluptates corrupti delectus. Culpa, placeat?",
        name: 'Morium Begum',
        address: 'Turkey',
        img: img3
    },
    {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis provident quidem molestias atque aspernatur in voluptates corrupti delectus. Culpa, placeat?",
        name: 'Afsin Pasha',
        address: 'Turkey',
        img: img1
    }

];

const Testimonials = () => {
    return (
        <Container className="mb-5">
            <div className="testimonials-upper">
                <h5 className="mt-5 pt-5" style={{ color: "#1CC7C1" }}>TESTIMONIAL</h5>
                <h1>What's Our Patient <br />Says</h1>
            </div>
            <Row>
                {
                    fakeTestimonials.map(data =>
                        <Col md={4}>
                            <div className="testimonial-card">
                                <h6>{data.description}</h6>
                                <Row className="pt-2">
                                    <Col>
                                        <img style={{height: '70px'}} src={data.img} alt="" />
                                    </Col>
                                    <Col>
                                        <p>{data.name}</p>
                                        <small>{data.address}</small>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    )
                }
            </Row>

        </Container>
    );
};

export default Testimonials;