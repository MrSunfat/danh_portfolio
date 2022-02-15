import { useGlobalContext } from '../../context';
import {
    BsHouseDoor,
    BsFileEarmarkText,
    BsChatLeftDots,
    BsJournalBookmarkFill,
    BsList,
} from 'react-icons/bs';

function Bar() {
    const { isBarOpen, toggleBar } = useGlobalContext();

    return (
        <div className={`bar on-bar ${!isBarOpen && 'notActive'}`}>
            <BsList
                className="bar__icon"
                onClick={() => toggleBar(!isBarOpen)}
            />
            {isBarOpen && (
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
            )}
        </div>
    );
}

export default Bar;
