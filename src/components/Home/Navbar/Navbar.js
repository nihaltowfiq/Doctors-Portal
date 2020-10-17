import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light text-white">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link mr-5" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5" href="/">Dental Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="/">Reviews</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="/">Blog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link mr-5 text-white" href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;