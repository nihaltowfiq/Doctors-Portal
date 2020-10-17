import React from 'react';
import Appointment from '../Appointment/Appointment';
import Blog from '../Blog/Blog';
import Description from '../Description/Description';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Description></Description>
            <Appointment></Appointment>
            <Testimonials></Testimonials>
            <Blog></Blog>
        </div>
    );
};

export default Home;