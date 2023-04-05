import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h5>This is home</h5>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;