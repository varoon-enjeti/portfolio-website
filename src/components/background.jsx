import React from 'react';
import { useState } from 'react';
import Header from './header';
import Redline from './lines/redline';
import Yellowline from './lines/yellowline';
import Greenline from './lines/greenline';
import Blueline from './lines/blueline';
import '../styles/background.css';
import Project from './pages/projects';

export default function Background() {
    return (
        <div className="background">
            <Header />
            <div className="lines">
                <Yellowline />
                <Redline />
                <Greenline />
                <Blueline />
            </div>
            <div className="pages">
                <Project/>
            </div>
        </div>
    );
}