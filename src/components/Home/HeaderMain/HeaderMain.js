import React from 'react';
import { Button } from 'react-bootstrap';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height: '600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br/> Starts Here!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ratione autem quisquam dolore omnis voluptas! Lorem ipsum dolor sit amet.</p>
                <Button variant="primary">GET APPOINTMENT</Button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
            
        </main>
    );
};

export default HeaderMain;