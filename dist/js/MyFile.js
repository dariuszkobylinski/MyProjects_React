import React from "react";
import ReactDOM from "react-dom";
import obrazy from "../public/img/cooperation.jpg";

console.log(window.location.origin);


function App() {
    return (
        <>
            <img className="box_image_slider visible" src={obrazy} alt="Slider"/>
            {/*<img className="box_image_slider visible" src={process.env.PUBLIC_URL + "/images/coding.jpg"} alt="Slider"/>*/}
            <img className="box_image_slider visible" src={window.location.origin + "/images/coding.jpg"} alt="Slider"/>
            <img className="box_image_slider visible" src={window.location.origin + "/images/intelligence.jpg"} alt="Slider"/>
            <h1>"Hello World!"</h1>
            <span>"Ostatni Egzamin"</span>
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



