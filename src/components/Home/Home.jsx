import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const nevigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div>{nevigation.state === 'loading' && 'Loading...'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;