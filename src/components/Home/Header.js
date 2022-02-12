import React from 'react';
import { Container } from 'reactstrap';
import { useGlobalContext } from '../../context';
import Option from './Option';

function Header({ children }) {
    const { selectOption } = useGlobalContext();
    return (
        <header className="header-container">
            <Container fluid="md" className="header">
                <div className="header__logo" onClick={() => selectOption('')}>
                    <a href="#">{children}</a>
                </div>
                <div className="header__options">
                    <Option id="home">Trang chủ</Option>
                    <Option id="about">Giới thiệu</Option>
                    <Option id="projects">Projects</Option>
                    <Option id="contact">Liên lạc</Option>
                </div>
                
            </Container>
        </header>
    );
}

export default Header;
