import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Heading () {
    return (
        
        <div className="profile_section">
            <div id="profile__img"></div>

            <div className="twitter_username">
                <p id="twitter">RWaitheraMwaura</p>
            </div>

            <div className="share_avatar">
                <div className="share_content">
                    <div className="share">
                        {/* <FontAwesomeIcon className="share-icon" icon="fa-solid fa-share" /> */}
                        <i className="fa-sharp fa-solid fa-share share_icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Heading;