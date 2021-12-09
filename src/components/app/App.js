import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../main-page/main-page";
import PriceList from "../price-list/price-list";
import Contacts from "../contacts/contacts";
import FormOrder from "../form-order/form-order";
import NotFound from "../not-found-page/not-found-page";

const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" exact element={<MainPage/>}/>
                <Route path="/price-list" exact element={<PriceList/>}/>
                <Route path="/contacts" exact element={<Contacts/>}/>
                <Route path="/order" exact element={<FormOrder/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;