import React from 'react';
import Appointment from '../Appointment/Appointment';
import Description from '../Description/Description';
import Header from '../Header/Header';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Description></Description>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;