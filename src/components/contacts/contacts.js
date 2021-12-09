import React from "react";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import Footer from "../footer/footer";
import Header from "../header/header";

import "./contacts.css";
import AgencyLocation from "./map/map";

const Contacts = () => {
    return (
        <React.Fragment>
            <Header activePage={4} />
            <Breadcrumbs currentPage={'КОНТАКТИ'} />
            <div className="contacts-container">
                <h1>контакти бюро перекладів</h1>
                <div className="contacts-info">
                    <div className="conctacts-info-block">
                        <span className="icon-mobile-phone"></span>
                        <div>
                            <h4>Телефони, месенджери, пошта</h4>
                            <p>
                                Телефон: +38 (044) 555-43-21<br/>
                                Пошта:   agency@gmail.com
                            </p>
                        </div>
                    </div>
                    <div className="conctacts-info-block">
                        <span className="icon-speech-bubbles"></span>
                        <div>
                            <h4>Ми в соціальних мережах</h4>
                            <p>
                                <span className="icon-twitter" onClick={() => window.open('https://twitter.com', "_blank")}>Twitter</span><br/>
                                <span className="icon-facebook" onClick={() => window.open('https://www.facebook.com', "_blank")}>Facebook</span>
                            </p>
                        </div>
                    </div>
                    <div className="conctacts-info-block">
                        <span className="icon-globe"></span>
                        <div>
                            <h4>Адреса</h4>
                            <p>
                                Україна, 02000, м.Київ, вул. Васильківська, 100а,<br/>
                                1хв. від м. "Виставковий центр"
                            </p>
                        </div>
                    </div>
                    <div className="conctacts-info-block">
                        <span className="icon-lunchbox"></span>
                        <div>
                            <h4>Години роботи</h4>
                            <p>
                                Oфіс: Пн-Пт 9-18<br/>
                                Онлайн: 24 години на добу
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <AgencyLocation/>
            <Footer />
        </React.Fragment>
    );
}

export default Contacts;