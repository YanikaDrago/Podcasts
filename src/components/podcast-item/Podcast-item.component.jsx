import React from "react";
import "./podcast-item.styles.css"
// import vnutri from "../../assets/vnutri.png"

const PodcastItem = (props) => {

    return (
        <div className="podcast-item">
            <h2>{props.name}</h2>
            <img src={props.src} alt="img" className="podcast-logo" />
        </div>
        
    )
}

export default PodcastItem;