import React from 'react';
import { Container } from 'react-bootstrap';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <Container fluid>
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
                <BusinessInfo></BusinessInfo>
            </Container>
        </div>
    );
};

export default Header;