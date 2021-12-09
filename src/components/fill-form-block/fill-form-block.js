import Button from "@restart/ui/esm/Button";
import React from "react";
import { useNavigate } from "react-router";
import "./fill-form-block.css";

const FillFormAdvisor = () => {
    const navigate = useNavigate();
    return (
        <div className="fill-form-content">
            <h2>Скоріше тицяй на кнопку та заповнюй форму</h2>
            <Button className="btn-fill-form" onClick={() => navigate('/order')}>Заповнити форму онлайн</Button>
        </div>
    );
}

export default FillFormAdvisor;