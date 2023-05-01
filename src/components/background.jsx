import React from 'react';
import Header from './header';
import Redline from './lines/redline';
import Yellowline from './lines/yellowline';
import '../styles/background.css';

export default function Background() {
    return (
        <div className="background">
            <Header />
            <Redline />
            <Yellowline />
        </div>
    );
}