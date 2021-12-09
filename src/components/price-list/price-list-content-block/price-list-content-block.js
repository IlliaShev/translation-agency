import React from "react";
import "./price-list-content-block.css";

const PriceListContentBlock = ({ title, listInfo }) => {

    const listOfPrices = listInfo.map(item => {
        return (
            <li key={item.id}>
                <span className="price-block-item">{item.name}</span>
                <span className="price-block-item-cost">від {item.price} грн</span>
            </li>
        )
    })

    return (
        <div className="price-block">
            <h3>{title}</h3>
            <p>(Lorem ipsum dolor sit amet, consectetur adipiscing elit)</p>
            <ul>
                {listOfPrices}
            </ul>
        </div>
    );
}

export default PriceListContentBlock;