import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({ infoData }) => {
    return (
        <div className="col-md-4">
            <div className={`info-container justify-content-center d-flex info-${infoData.background} text-white`}>
                <div className="mr-3">
                    <FontAwesomeIcon className="info-icon" icon={infoData.icon}></FontAwesomeIcon>
                </div>
                <div>
                    <h6>{infoData.title}</h6>
                    <small>{infoData.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;