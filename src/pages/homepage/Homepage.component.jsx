import React from "react";
import { Link } from "react-router-dom";

import PodcastItem from "../../components/podcast-item/Podcast-item.component";

import dragomir_logo from '../../assets/dragomir_logo.svg';
import besit from "../../assets/besit.png"
import vnutri from "../../assets/vnutri.png"
import './homepage.style.css';

const Homepage = () => {
    return (
        <div className="home">
            <header className="header">
                <img src={dragomir_logo} className="dragomir-logo" alt="logo" />
                <p className="headerName">
                    Dragomir's Podcasts
                </p>
                <div className="podcast">
                    <Link to="vnutri-menya">
                        <PodcastItem 
                            name="Внутри меня" 
                            src={vnutri}
                        />
                    </Link>
                    <Link to="menya-vse-besit">
                        <PodcastItem 
                            name="Меня все бесит" 
                            src={besit}
                            />
                    </Link>
                     
                </div>
                
            </header>    
        </div>
    ) 
}

export default Homepage;
