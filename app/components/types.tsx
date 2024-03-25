import React from 'react';

export type SetStateType = React.Dispatch<React.SetStateAction<boolean>>;

export interface redProps {
    setProject: SetStateType;
}

export interface yellowProps {
    setAbout: SetStateType;
}

export interface greenProps {
    setSkills: SetStateType;
}

export interface blueProps {
    setContact: SetStateType;
}

export interface headerProps {
    projectLive: boolean;
    setProject: SetStateType;
    aboutLive: boolean;
    setAbout: SetStateType;
    skillsLive: boolean;
    setSkills: SetStateType;
    contactLive: boolean;
    setContact: SetStateType;
}

export interface expcardProps {
    role: string;
    company: string;
    date: string;
    twcss: string;
}