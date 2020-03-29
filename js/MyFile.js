import React from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "../js/slider_manager";
import "../js/index";
import "../js/main";
import "../normalize.css";

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
                            <p className="text_contact">Poniedziałek - Piątek <br />9:00 - 18:00</p>
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
                <div className="main">
                    <article className="info">
                        <h2 className="h2Text">Lorem ipsum dolor sit amet.</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi consectetur, dignissimos
                        eius et
                        facere iste modi natus officia provident quas quos sed sint. Aperiam necessitatibus nulla
                        repudiandae unde
                        vitae voluptates. A aliquam amet aperiam at consequatur culpa, cum cumque debitis dicta
                        dignissimos
                        doloribus eaque exercitationem fuga iure laudantium maiores minus molestias nam nobis non
                        nostrum numquam
                        pariatur porro quae quaerat quidem quod quos recusandae reprehenderit repudiandae sed similique
                        sunt totam
                        unde velit voluptas voluptates! Alias explicabo hic placeat quisquam quod vel voluptas. Illum
                        maiores
                        mollitia possimus quo sint. Aperiam asperiores, distinctio doloremque eius eligendi error minus
                        quibusdam
                        similique voluptatibus!
                    </article>
                    <article className="info">
                        <h2 className="h2Text">Lorem ipsum dolor sit amet.</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque deleniti facere ipsum iure
                        obcaecati
                        officiis quas reiciendis sapiente! Accusamus blanditiis commodi, consectetur eos error harum
                        ipsum, maxime
                        necessitatibus, nobis possimus quasi sed voluptate voluptatem? Aspernatur aut, cumque doloremque
                        dolores
                        facere, fugiat iure non officia optio pariatur, porro quasi quibusdam quo ratione reiciendis sed
                        sunt
                        voluptatibus voluptatum. Ad aliquam autem cum cupiditate, delectus dolorem, enim fugiat id in
                        iure labore
                        laborum nostrum porro, quae quam qui quisquam repellendus repudiandae unde voluptatem. Molestiae
                        mollitia
                        repellendus sunt vitae? A aliquam aliquid architecto commodi dolor dolorem enim, illo in magni
                        nam, non
                        quae, quos!
                    </article>
                    <article className="info">
                        <h2 className="h2Text">Lorem ipsum dolor sit amet.</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, architecto atque
                        consequuntur cum,
                        deleniti dolorem eaque esse et eum fugiat ipsum laudantium necessitatibus neque numquam odio
                        omnis
                        perspiciatis placeat quo veniam veritatis. Ab accusamus aliquam aperiam delectus dolore dolores
                        eveniet
                        exercitationem, fugiat ipsum iste molestiae neque non officia omnis, pariatur possimus quaerat
                        quas
                        quibusdam quo quos reiciendis sit unde voluptatibus. Fugiat perferendis repudiandae unde.
                        Aliquid aperiam
                        aut beatae consectetur cum, illum libero, maiores maxime modi neque non placeat praesentium
                        quibusdam
                        recusandae repellendus reprehenderit sunt vel voluptas! Accusantium ad animi architecto cumque
                        iste itaque
                        nam odit praesentium quo rem rerum, tempora?
                    </article>
                    <article className="info">
                        <h2 className="h2Text">Lorem ipsum dolor sit amet.</h2>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, assumenda delectus dolor
                        doloremque expedita
                        facere id ipsum laudantium libero minima, nesciunt nisi quo repellendus sunt veritatis. Animi
                        blanditiis
                        eligendi neque perferendis recusandae sed tempora. Autem beatae blanditiis, commodi dolorum
                        facere
                        laboriosam magnam minus modi molestias nam nesciunt nihil obcaecati officiis. Consectetur
                        cupiditate error
                        illum iure iusto molestiae, molestias nemo odio optio quae quam recusandae repudiandae,
                        similique sint
                        velit! Adipisci amet aut delectus dignissimos ducimus error et eveniet illo in iste, iusto
                        maxime minima
                        modi natus numquam officia pariatur perferendis placeat quas quibusdam quos ratione
                        reprehenderit similique
                        temporibus ullam vel voluptatem.
                    </article>
                </div>
                <footer className="page-footer">
                    <form action="https://formspree.io/xzbgalwz" method="POST" className="message-footer">
                        <h3 className="h3TextLeft">Masz pytania, napisz do Nas lub zadzwoń pod numer kontaktowy +48 518
                            836 336.</h3>
                        <input type="text" name="imienazwisko" className="classImieNazwisko"
                                placeholder="Imię i Nazwisko*"/>
                            <input type="email" name="adresEmail" className="classEmail" placeholder="E-mail*"/>
                                <input type="text" name="temat" className="classTitle" placeholder="Tytuł"/>
                                    <textarea rows="8" name="message" className="classMessage" placeholder="Tekst wiadomości"/>
                                    <button className="classBtn_footer" type="submit">Wyślij</button>
                                    <p className="classErrorMessage">Wszystkie pola muszą być wypełnione</p>
                    </form>
                    <div className="page-link-social">
                        <h3 className="h3TextRight">Chcesz zdobyć nowe umiejętności? Skorzystaj z
                            wyjątkowych ofert kursów i rejsów żeglarskich</h3>
                        <a href="https://www.e-market.edu.pl" target="_blank">
                            <div className="classAdvertising">
                                <div className="classAdvertising_left">
                                    <img className="box_image_advertising visible"
                                         src={"images/sternik_motorowodny_adwords.png"} alt="Slider"/>
                                        <img className="box_image_advertising" src={"images/family_wynik_adwords.png"}
                                             alt="Slider"/>
                                            <img className="box_image_advertising"
                                                 src={"images/żeglarz_jachtowy_adwords.png"} alt="Slider"/>
                                                <img className="box_image_advertising"
                                                     src={"images/obozy_wodne_adwords.png"} alt="Slider"/>
                                                    <p className="advertisingText"></p>
                                                    <p className="advertisingText"></p>
                                                    <p className="advertisingText"></p>
                                                    <p className="advertisingText"></p>
                                </div>
                                <div className="classAdvertising_right">
                                    <img className="box_image_advertising visible" src={"images/family_wynik_adwords.png"}
                                         alt="Slider"/>
                                        <img className="box_image_advertising" src={"images/żeglarz_jachtowy_adwords.png"}
                                             alt="Slider"/>
                                            <img className="box_image_advertising" src={"images/obozy_wodne_adwords.png"}
                                                 alt="Slider"/>
                                                <img className="box_image_advertising"
                                                     src={"images/sternik_motorowodny_adwords.png"} alt="Slider"/>
                                                    <p className="advertisingText"></p>
                                                    <p className="advertisingText"></p>
                                                    <p className="advertisingText"></p>
                                                    <p className="advertisingText"></p>
                                </div>
                            </div>
                        </a>
                        <div className="classSocialLink">
                            <a href="http://www.facebook.com">
                                <div className="classSocialLinkFacebook"></div>
                            </a>
                            <a href="http://www.youtube.com">
                                <div className="classSocialLinkYouTube"></div>
                            </a>
                            <a href="http://www.instagram.com">
                                <div className="classSocialLinkInstagram"></div>
                            </a>
                            <a href="http://www.twitter.com">
                                <div className="classSocialLinkYouTwitter"></div>
                            </a>
                        </div>
                    </div>
                    <div className="footer_summary">
                        <div className="classLogoFooter">Copyright ©2019 MD Projects. Wszelkie prawa zastrzeżone</div>
                        <div className="classLogoFooter">Logo generated by <a
                            href="https://www.designevo.com/logo-maker/" title="Free Online Logo Maker">DesignEvo
                            free logo designer</a></div>
                    </div>
                </footer>
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



