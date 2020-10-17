import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: "Opening Hours",
        description: "we are open 7 days",
        icon: faClock,
        background: "primary"
    },
    {
        title: "Opening Hours",
        description: "we are open 7 days",
        icon: faMapMarker,
        background: "dark"
    },
    {
        title: "Opening Hours",
        description: "we are open 7 days",
        icon: faPhone,
        background: "primary"
    }
]

const BusinessInfo = () => {
    return (
        <section className="d-flex justify-content-center">
            <div className="row w-75">
                {
                    infoData.map(data => <InfoCard infoData={data}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;