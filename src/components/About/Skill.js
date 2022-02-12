import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

function Skill({ children }) {
    return (
        <li className="skill">
            <BsFillCheckCircleFill className="skill__icon" />
            <div className="skill__desc">{children}</div>
        </li>
    );
}

export default Skill;
