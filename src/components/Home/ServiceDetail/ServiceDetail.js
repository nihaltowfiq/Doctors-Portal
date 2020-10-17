import React from 'react';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="service-card p-3 mb-4">
                <img style={{ height: '50px' }} src={service.img} alt="" />
                <h5 className="pt-4 pb-3">{service.name}</h5>
                <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, amet.</p>
            </div>
        </div>
    );
};

export default ServiceDetail;