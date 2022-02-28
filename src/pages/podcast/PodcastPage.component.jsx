import React from "react";
import PodcastItem from "../../components/podcast-item/Podcast-item.component";
import EpisodesList from "../../components/episodes-list/EpisodesList.component";
import "./podcast-page.styles.css"


const PodcastPage = ({name, src, description, episodes}) => {


    return (
        <div className="page">
            
            <PodcastItem name={name} description={description}  />
            <EpisodesList src={src} episodes={episodes} />
            
            
        </div>
    )
}

export default PodcastPage;
//description={description}