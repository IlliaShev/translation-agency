import React, { useState } from "react";
import data from "./prices.json";
import PriceListContentBlock from "../price-list-content-block/price-list-content-block";
import "./price-list-content.css";


const PriceListContent = () => {
    const [dataSet, setDataSet] = useState(data);
    const [minCost, setMinCost] = useState(0);
    const [maxCost, setMaxCost] = useState(1000);

    const filterDataSet = (e) => {
        e.preventDefault();
        setDataSet((dataSet) => {
            const newDataSet = [];
            data.forEach(items => {
                const newItemsArr = [];
                items.items.forEach(item => {
                    if (item.price >= minCost && item.price <= maxCost) {
                        newItemsArr.push({ id: item.id, name: item.name, price: item.price });
                    }
                })
                newDataSet.push({ category_name: items.category_name, items: newItemsArr });
            })
            console.log(newDataSet);
            return newDataSet;
        })
    }

    const cancelFilters = (e) => {
        e.preventDefault();
        setDataSet(data);
        setMinCost(0);
        setMaxCost(0);
    }

    return (
        <div className="price-list-content">
            <h1>Послуга та ціни</h1>
            <form className="filter-form-content">
                <button onClick={filterDataSet}>Фільтрувати</button>
                <button onClick={cancelFilters}>Скинути фільри</button>
                <span>Ціна від: </span>
                <input type="number" value={minCost} onChange={(e) => setMinCost(e.target.value)} />
                <span>до: </span>
                <input type="number" value={maxCost} onChange={(e) => setMaxCost(e.target.value)} />
            </form>
            <PriceListContentBlock title={dataSet[0].category_name} listInfo={dataSet[0].items} />
            <PriceListContentBlock title={dataSet[1].category_name} listInfo={dataSet[1].items} />
            <PriceListContentBlock title={dataSet[2].category_name} listInfo={dataSet[2].items} />
        </div>
    );
}

export default PriceListContent;