import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "@firebase/auth";
import { useNavigate } from "react-router-dom";

import "./form-order.css";
import Loader from "../loader/loader";

const FormOrder = () => {
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    if (loading) {
        return <Loader/>
    }

    const onSumbit = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <React.Fragment>
            <Header activePage={0} />
            <Breadcrumbs currentPage={'ОНЛАЙН ЗАМОВЛЕННЯ'}/>
            <div className="form-order-container">
                <h2>Онлайн замовлення</h2>
                <Form className="form-content" onSubmit={onSumbit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Ваше ім'я</Form.Label>
                        <Form.Control required type="text" placeholder="Введіть ім'я" defaultValue={user === null ? null: user.displayName}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Ваш телефон</Form.Label>
                        <Form.Control type="text" placeholder="Введіть ваш телефон" defaultValue={user === null ? null: user.phoneNumber} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Ваш e-mail</Form.Label>
                        <Form.Control type="email" placeholder="Введіть e-mail" defaultValue={user === null ? null: user.email} required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="comments">
                        <Form.Label>Коментарі</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Control type="file" multiple placeholder="Оберіть файли" required />
                    </Form.Group>
                    <div className="center-btn">
                        <Button type="submit" className="btn-sumbit-form">Відправити</Button>
                    </div>
                </Form>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default FormOrder;