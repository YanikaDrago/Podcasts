import React from "react";
import "./episode-podcast.styles.css"

const EpisodePodcast = ({episode: {episodeName, episodeDescription, audio}, img }) => {

    
    return (
        <div className="episodes">
            <div className="episode">
                <img src={img} alt="img" className="episode-logo" />
                <h5 className="episode-name"> {episodeName} </h5>
            </div>           
            <p className="episode-desc"> {episodeDescription} </p>
            <h4> {audio} </h4>
        </div>
    )
    
}

export default EpisodePodcast;