import React from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = ({activePage}) => {
    const navigate = useNavigate();
    const activeMain = activePage === 1 ? "active nav-item" : "nav-item";
    const activePriceList = activePage === 2 ? "active nav-item" : "nav-item";
    const activeLanguages = activePage === 3 ? "active nav-item" : "nav-item";
    const activeContacts = activePage === 4 ? "active nav-item" : "nav-item";
    return (
        <Navbar>
            <Container className="container">
                <Navbar.Brand className="brand" onClick={() => navigate('/')}>
                    <Image src="https://pereklad.ua/templates/pereklad/images/logo-sign.svg" className="logo-header"/>
                    Бюро перекладів
                </Navbar.Brand>
                <Nav className="nav-block">
                    <Nav.Item className={activeMain} onClick={() => navigate('/')}>
                        <div>БЮРО ПЕРЕКЛАДІВ</div>
                    </Nav.Item>
                    <Nav.Item className={activePriceList} onClick={() => navigate('/price-list')}>
                        <div>ПОСЛУГИ ТА ЦІНИ</div>
                    </Nav.Item>
                    <Nav.Item className={activeContacts} onClick={() => navigate('/contacts')}>
                        <div to="/">КОНТАКТИ</div>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;