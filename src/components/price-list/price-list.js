import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import PriceListContent from "./price-list-content/price-list-content";

const PriceList = () => {
    return (
        <React.Fragment>
            <Header activePage={2}/>
            <Breadcrumbs currentPage={'ПОСЛУГИ ТА ЦІНИ'}/>
            <PriceListContent/>
            <Footer/>
        </React.Fragment>
    );
}

export default PriceList;