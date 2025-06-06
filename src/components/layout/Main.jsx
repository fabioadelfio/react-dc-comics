import Merchandise from "./Merchandise";
import Alert from "./Alert";
import ComicsList from "../products/comicsList";

export default function Main() {
    return (
        <main>
            <div id="page-content">

                {/* Esempio senza children */}

                {/* <Alert 
                    text="Errore"    
                    textColor="black"
                    bgColor="red"
                /> */}

                {/* Esempio con children */}

                {/* <Alert textColor="black" bgColor="yellow">
                    <h3>Attenzione!</h3>
                    <p>Il tuo abbonamento sta per scadere!</p>
                </Alert> */}

                {/* Esempio Alert base */}

                {/* <Alert /> */}

                <div className="jumbotron">
                    <div className="container">
                        <div className="title-content">CURRENT SERIES</div>
                    </div>
                </div>

                <div className="content">
                    <div className="container">
                        <ComicsList />
                        <div className="load-more">
                            <div className="more-cards">
                                LOAD MORE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Merchandise />
        </main>
    );
}