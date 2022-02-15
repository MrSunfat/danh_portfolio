import React from 'react';
import {
    BsHouseDoor,
    BsFileEarmarkText,
    BsChatLeftDots,
    BsJournalBookmarkFill,
} from 'react-icons/bs';

function Bar() {
    return (
        <ul className="bar__list">
            <li className="bar__item">
                <a href="#home" className="bar__item__link">
                    <BsHouseDoor className="icon" />
                </a>
            </li>
            <li className="bar__item">
                <a href="#about" className="bar__item__link">
                    <BsFileEarmarkText className="icon" />
                </a>
            </li>
            <li className="bar__item">
                <a href="#projects" className="bar__item__link">
                    <BsJournalBookmarkFill className="icon" />
                </a>
            </li>
            <li className="bar__item">
                <a href="#contact" className="bar__item__link">
                    <BsChatLeftDots className="icon" />
                </a>
            </li>
        </ul>
    );
}

export default Bar;
