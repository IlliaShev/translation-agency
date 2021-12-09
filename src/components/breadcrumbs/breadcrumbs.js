import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./breadcrumbs.css";

const Breadcrumbs = ({currentPage}) => {
    const navigate = useNavigate();
    return (
        <Breadcrumb className="breadcrumb-body">
            <Breadcrumb.Item className='logo'></Breadcrumb.Item>
            <Breadcrumb.Item onClick={() => navigate('/')} className='active-breadcrumb'>ГОЛОВНА</Breadcrumb.Item>
            <Breadcrumb.Item className='non-active-breadcrumb'>{currentPage}</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default Breadcrumbs;