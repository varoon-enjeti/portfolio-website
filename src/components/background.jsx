import React from 'react';
import Header from './header';
import Redline from './lines/redline';
import Yellowline from './lines/yellowline';
import Greenline from './lines/greenline';
import '../styles/background.css';

export default function Background() {
    return (
        <div className="background">
            <Header />
            <div className="lines">
                <Redline />
                <Yellowline />
                <Greenline />
            </div>
        </div>
    );
}