import React from "react";
import { useParams } from "react-router-dom";
import PodcastItem from "../podcast-item/Podcast-item.component";
import dataPodcast from "../../assets/data";

import "./admin-crud.styles.css"

const AdminCRUD = () => {

    const params = useParams();
    const name = params.name;
    console.log(name);

    const [nameVnutri, nameBesit, imgVnutri, imgBesit] = dataPodcast;

    let podcastName = "";
    let podcastImg = "";

    if (name === "vnutri-menya") {
        podcastName = nameVnutri;
        podcastImg = imgVnutri;
    } else if (name === "menya-vse-besit") {
        podcastName = nameBesit;
        podcastImg = imgBesit;
    }

    

    return (
        <div className="podcastCrud">
            <h1> CRUD podcast </h1>
            <PodcastItem name={podcastName} src={podcastImg} />
        </div>
        
    )
}

export default AdminCRUD;