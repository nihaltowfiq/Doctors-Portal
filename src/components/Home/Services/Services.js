import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Container } from 'react-bootstrap';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <Container fluid>
            <div className="text-center mb-2">
                <h5>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="row w-75">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail> )
                    }
                </div>
            </div>
        </Container>
    );
};

export default Services;