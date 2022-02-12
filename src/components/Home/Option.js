import { useGlobalContext } from '../../context';
import { NavItem, NavLink } from 'reactstrap';

function Option({ children, id }) {
    const { option, selectOption } = useGlobalContext();

    return (
        <div className="header__option" onClick={() => selectOption(children)}>
            <a
                className={option === children ? 'select-option' : ''}
                href={`#${id}`}
            >
                {children}
            </a>
            
        </div>
    );
}

export default Option;
