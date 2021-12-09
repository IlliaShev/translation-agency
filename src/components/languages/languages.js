import React, { useState } from "react";
import countries from "./data.json";
import "./languages.css";
import { Table } from "react-bootstrap";

const getCountries = () => {

}


const Languages = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 7;
    const countriesQuantity = countries.data.length;

    const countriesToDisplay = () => {
        const arrOfCountriesToDisplay = [];
        const currentIndex = currentPage * pageSize;
        for(let i = currentIndex; i < Math.min(currentIndex + pageSize, countriesQuantity); i++) {
            arrOfCountriesToDisplay.push((<tr key={i}>
                <td>
                    {i+1}
                </td>
                <td>
                    {countries.data[i].name}
                </td>
                <td>
                    {countries.data[i].capital}
                </td>
            </tr>))
        }
        return arrOfCountriesToDisplay;
    }

    return (
        <React.Fragment>
            <div className="languages-container">
                <h2>Мови перекладу</h2>
                <Table striped bordered hover className="languages-table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Країна</th>
                            <th>Столиця</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countriesToDisplay()}
                    </tbody>
                </Table>
                <div className="pagination-container">
                    <span className="icon-triangle-left btn-pagination btn-pagination-left" onClick={() => {
                        if(currentPage > 0) {
                            setCurrentPage((currentPage) => {
                                const newCurrentPage = currentPage - 1;
                                return newCurrentPage;
                            })
                        }
                    }}></span>
                    <span className="icon-triangle-right btn-pagination btn-pagination-right" onClick={() => {
                        if((currentPage*pageSize + pageSize) < countriesQuantity) {
                            setCurrentPage((currentPage) => {
                                const newCurrentPage = currentPage + 1;
                                return newCurrentPage;
                            })
                        }
                    }}></span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Languages;