import React from "react";
import { Link } from "react-router-dom";

import PodcastItem from "../../components/podcast-item/Podcast-item.component";

import dragomir_logo from '../../assets/dragomir_logo.svg';
import dataPodcast from "../../assets/data";
import './homepage.style.css';

const Homepage = () => {

    const [vnutri, besit] = dataPodcast;
    const {name: nameVnutri, imgUrl: imgVnutri } = vnutri;
    const {name: nameBesit, imgUrl: imgBesit } = besit;

    return (
        <div className="home">
            <header className="header">
                <img src={dragomir_logo} className="dragomir-logo" alt="logo" />
                <p className="headerName">
                    Dragomir's Podcasts
                </p>
                <div>
                    <Link to="vnutri-menya">
                        <PodcastItem 
                            name={nameVnutri} 
                            src={imgVnutri}
                        />
                    </Link>
                    <Link to="menya-vse-besit">
                        <PodcastItem 
                            name={nameBesit} 
                            src={imgBesit}
                            />
                    </Link>
                     
                </div>
                
            </header>    
        </div>
    ) 
}

export default Homepage;
