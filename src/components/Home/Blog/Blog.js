import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/people1.png';

const Blog = () => {
    return (
        <Container>
            <h5 className="mt-5 pt-5" style={{ color: "#1CC7C1", textAlign: "center" }}>OUR BLOG</h5>
            <h1 className="text-center mb-5">From Our Blog News</h1>
            <Row className="mb-5">
                <Col md={4}>
                    <div className="testimonial-card">
                        <Row className="pt-2">
                            <Col>
                                <img style={{ height: '70px' }} src={img} alt="" />
                            </Col>
                            <Col>
                                <p>Dr. Caudi</p>
                                <small className="text-secondary">23 April, 2020</small>
                            </Col>
                        </Row>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, perferendis! Lorem ipsum dolor sit amet.</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="testimonial-card">
                        <Row className="pt-2">
                            <Col>
                                <img style={{ height: '70px' }} src={img} alt="" />
                            </Col>
                            <Col>
                                <p>Dr. Caudi</p>
                                <small className="text-secondary">23 April, 2020</small>
                            </Col>
                        </Row>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, perferendis! Lorem ipsum dolor sit amet.</p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="testimonial-card">
                        <Row className="pt-2">
                            <Col>
                                <img style={{ height: '70px' }} src={img} alt="" />
                            </Col>
                            <Col>
                                <p>Dr. Caudi</p>
                                <small className="text-secondary">23 April, 2020</small>
                            </Col>
                        </Row>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, perferendis! Lorem ipsum dolor sit amet.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;