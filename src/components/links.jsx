import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router,
//     Switch,
//     Route } from "react-router-dom";

function Links () {
return (
    <div className="link_section">
        <div className="link">
            <button>
                <a href="https://twitter.com/RWaitheraMwaura">Twitter Link</a>
                {/* Remember to add the share icon */}
            </button>
        </div>

        <div className="link">
            <button>
                <a href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
                {/* Remember to add the share icon */}
            </button>
        </div>

        <div className="link">
            <button>
                <a href="http://books.zuri.team/" id="books">Zuri Books</a>
                {/* Remember to add the share icon */}
            </button>
        </div>

    </div>
)
}

export default Links;