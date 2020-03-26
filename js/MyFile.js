import React from "react";
import ReactDOM from "react-dom";
import "../main.scss";

// import "../main.css";
//
import "../js/slider_manager";
import "../js/index";

// console.log(window.location.origin);


function App() {
    return (
        <>
            <div className="container">
                <header className="page-header">
                    <div className="main-header">
                        <div className="page-logo">
                            <a href="../index.html" style={{height: "0px"}}>
                                <img className="box_image" src={"images/mdprojects_logo.png"} alt="Logo"/>
                            </a>
                        </div>
                        <div className="slider">
                            <div className="slider_left">
                                <img className="box_image_slider visible" src={"images/intelligence.jpg"} alt="Slider"/>
                                <img className="box_image_slider" src={"images/coding.jpg"} alt="Slider"/>
                                <img className="box_image_slider" src={"images/development_1.jpg"} alt="Slider"/>
                                <img className="box_image_slider" src={"images/cooperation.jpg"} alt="Slider"/>
                                                <p className="sliderText_left">aaaaaaaa</p>
                                                <p className="sliderText_left">bbbbbbbb</p>
                                                <p className="sliderText_left">cccccccc</p>
                                                <p className="sliderText_left">dddddddd</p>
                            </div>
                            <div className="slider_right">
                                <img className="box_image_slider visible" src={"images/coding.jpg"} alt="Slider"/>
                                <img className="box_image_slider" src={"images/development_1.jpg"} alt="Slider"/>
                                <img className="box_image_slider" src={"images/cooperation.jpg"} alt="Slider"/>
                                <img className="box_image_slider" src={"images/intelligence.jpg"} alt="Slider"/>
                                                <p className="sliderText_left">bbbbbbbb</p>
                                                <p className="sliderText_left">cccccccc</p>
                                                <p className="sliderText_left">dddddddd</p>
                                                <p className="sliderText_left">aaaaaaaa</p>
                            </div>
                        </div>

                        <div className="contact">
                            <p className="text_contact">Sprawdź Nas, zadzwoń!</p>
                            <p className="text_contact">+48 518 836 336</p>
                            <p className="text_contact">Poniedziałek - Piątek 9:00 - 18:00</p>
                        </div>

                    </div>

                    <nav className="page-nav">
                        <div className="burger">
                            <div className="burger_line"></div>
                            <div className="burger_line"></div>
                            <div className="burger_line"></div>
                        </div>
                        <ul className="classItem">
                            <li className="classLink">
                                <a href="../O_Nas.html" className="classLinkHref" target="_parent">O Nas</a>
                            </li>
                            <li className="classLink">
                                <a href="../index.html" className="classLinkHref" id="keyPageWord"
                                   target="_parent">Oferta</a>
                            </li>
                            <li className="classLink">
                                <a href="../cennik.html" className="classLinkHref" target="_parent">Cennik</a>
                            </li>
                            <li className="classLink">
                                <a href="../Dane_firmy.html" className="classLinkHref" target="_parent">Kontakt</a>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </>
    )
}
ReactDOM.render(

    <App />,
    document.getElementById("app")
);



/**
 * Nie modyfikuj kodu poniżej!
 */
ReactDOM.render(<App/>, document.getElementById("app"));

export default App;



