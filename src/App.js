import Preloader from "./Components/Preloader/Preloader";
import Timer from "./Components/Countdown/Timer";
import Optin from "./Components/Optin/Optin";

import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="container">
                <h1>
                    Website
                    <br />
                    Coming Soon
                </h1>
                <Timer />
                <Optin />
                <Preloader />
            </div>
        </div>
    );
}

export default App;
