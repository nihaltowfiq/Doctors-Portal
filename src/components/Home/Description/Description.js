import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import treatment from '../../../images/treatment.png';

const Description = () => {
    return (
        <Container fuild className="my-4">
            <Row>
                <Col md={5}>
                    <img className="img-fluid" style={{height:'480px'}} src={treatment} alt=""/>
                </Col>  
                <Col md={7}>
                    <h1 className="mt-5">Exceptional Dental <br/>Care, On Your Terms</h1>
                    <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam provident nobis repudiandae aut autem tempore molestias mollitia quia cum eum et ducimus, quas fugit eius temporibus? Doloribus, ullam dignissimos? Quam, eius autem magnam illo ullam voluptatibus consequatur omnis eos quidem praesentium ipsam sit cupiditate sunt repudiandae ea nam veniam! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, magni harum incidunt mollitia maiores fugit illo modi nulla porro doloribus!</p>
                    <Button>Learn More</Button>
                </Col>  
            </Row>            
        </Container>
    );
};

export default Description;