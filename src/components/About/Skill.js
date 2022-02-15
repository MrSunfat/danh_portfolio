import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function Skill({ children }) {
    return (
        <li className="skill">
            <BsFillCheckCircleFill className="skill__icon" />
            <span className="skill__desc">{children}</span>
        </li>
    );
}

export default Skill;
