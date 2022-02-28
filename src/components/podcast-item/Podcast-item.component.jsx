import React from "react";
import "./podcast-item.styles.css"



const PodcastItem = (props) => {

    return (
        <div className="podcast-item">
            <h2>{props.name}</h2>
            { props.src ? <img src={props.src} alt="img" className="podcast-logo" /> : null}
            { props.description ? <p className="desc">{props.description}</p> : null}

        </div>
        
    )
}

export default PodcastItem;