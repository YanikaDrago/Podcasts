import React from "react";
import { Link } from "react-router-dom";
import PodcastItem from "../podcast-item/Podcast-item.component";
import dataPodcast from "../../assets/data";
import Button from "../button/Button.component";

import "./admin-podcast-collections.styles.css"

const AdminPodcastCollections = () => {

    // const [nameVnutri, nameBesit, imgVnutri, imgBesit] = dataPodcast;

    const [besit, vnutri] = dataPodcast;
    const {name: nameVnutri, imgUrl: imgVnutri } = vnutri;
    const {name: nameBesit, imgUrl: imgBesit } = besit;

    return (
        <div className="collections">
            <div className="collectionItem">
                <PodcastItem name={nameVnutri} src={imgVnutri} />
                    <Link to="/admin/podcast/vnutri-menya">
                        <Button bottonStyle="button-option"> редактировать </Button>
                    </Link>
                
            </div>
            <div className="collectionItem">
                <PodcastItem name={nameBesit} src={imgBesit} />
                    <Link to="/admin/podcast/menya-vse-besit">
                        <Button bottonStyle="button-option"> редактировать </Button>
                    </Link>
            </div>        
        </div>
    )
}

export default AdminPodcastCollections;