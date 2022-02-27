import React from "react";
import PodcastItem from "../../components/podcast-item/Podcast-item.component";

const PodcastPage = (props) => {
    return (
        <div>
            <PodcastItem name={props.name} src={props.src}/>
        </div>
    )
}

export default PodcastPage;