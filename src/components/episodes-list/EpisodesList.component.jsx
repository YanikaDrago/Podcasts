import React from "react";
import EpisodePodcast from "../episode-podcast/EpisodePodcast.component";


const EpisodesList = ({episodes, src}) => {
    return (
        <div>
            {
                episodes.map(episode => (
                    <EpisodePodcast key={episode.id} img={src} episode={episode}/>
                ))
        }
        </div>       
    )
}

export default EpisodesList;