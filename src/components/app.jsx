import React from "react";
import Heading from "./heading";
import Links from "./links";
import Socials from "./socials";

function App () {
    return (
        <div className="main_section">
            <div className="content">
                <Heading />
                <Links />
            </div>

            <div className="social_section">
                <Socials />
            </div>

            <div className="footer"></div>
        </div>
    )
};

export default App;