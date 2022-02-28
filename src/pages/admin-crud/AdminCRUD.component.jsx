import React from "react";
import { useParams } from "react-router-dom";
import PodcastItem from "../../components/podcast-item/Podcast-item.component";
import CRUDpodcast from "../../components/crudpodcast/CRUDpodcast.component";

import dataPodcast from "../../assets/data";

import "./admin-crud.styles.css"

const AdminCRUD = () => {

    const params = useParams();
    const name = params.name;

    const [vnutri,besit] = dataPodcast;
    const {name: nameVnutri, imgUrl: imgVnutri } = vnutri;
    const {name: nameBesit, imgUrl: imgBesit } = besit;

    


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
            <PodcastItem name={podcastName} />
            <CRUDpodcast podcastImg={podcastImg} />
        </div>
        
    )
}

export default AdminCRUD;