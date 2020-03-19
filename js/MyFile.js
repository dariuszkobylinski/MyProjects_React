import React from "react";
import ReactDOM from "react-dom";
// import "../normalize.css";
import "../main.css";

import "../slider_manager";

console.log(window.location.origin);


function App() {
    return (
        <>
            <div className="con">
            <img className="box_image_slider visible" src={"images/coding.jpg"} alt="Slider"/>
            {/*<img className="box_image_slider visible" src={process.env.PUBLIC_URL + "/images/coding.jpg"} alt="Slider"/>*/}
            <img className="box_image_slider" src={ "images/cooperation.jpg"} alt="Slider"/>
            <img className="box_image_slider" src={window.location.origin + "/images/intelligence.jpg"} alt="Slider"/>
                <img className="box_image_slider" src={window.location.origin + "/images/intelligence.jpg"} alt="Slider"/>
            <h1>"Hello World!"</h1>
            <span>"Ostatni Egzamin"</span>
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



