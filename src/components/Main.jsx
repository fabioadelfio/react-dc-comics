import Merchandise from "./Merchandise";
import Alert from "./Alert";

export default function Main() {
    return (
        <main>
            <div id="page-content">
                <Alert 
                    text="Errore"    
                    textColor="black"
                    bgColor="red"
                />
                <div className="container">
                    <div>--&gt; Content goes here &lt;--</div>
                </div>
            </div>
            <Merchandise />
        </main>
    );
}