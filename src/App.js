import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.component";
import Homepage from "./pages/homepage/Homepage.component";
import PodcastPage from "./pages/podcast/PodcastPage.component";
import AdminLogin from "./components/admin-login/AdminLogin.component";
import AdminPodcastCollections from "./components/admin-podcast-collections/Admin-podcast-collections.component";
import AdminCRUD from "./pages/admin-crud/AdminCRUD.component";

import "./global.style.css"
import dataPodcast from "./assets/data";

// import {auth} from "./firebase/firebase.utils";


function App() {


  const [vnutri, besit] = dataPodcast;
  const {name: nameVnutri, imgUrl: imgVnutri, description: descVnutri, episodes: episodesV } = vnutri;
  const {name: nameBesit, imgUrl: imgBesit, description: descVBesit, episodes: episodesB } = besit;
  
  

  return (
    
    <div>
        <Header/>
        <Routes>          
          <Route path="/" element={<Homepage />}/>
          <Route path="admin" element={<AdminLogin />} />
          <Route path="admin/podcast" element={<AdminPodcastCollections />}/>
          <Route path="admin/podcast/:name" element={<AdminCRUD />} />
          <Route path="vnutri-menya" element={<PodcastPage 
            name={nameVnutri} 
            src={imgVnutri}
            description={descVnutri}
            episodes={episodesV}
          />}/>
          <Route path="menya-vse-besit" element={<PodcastPage 
            name={nameBesit} 
            src={imgBesit}
            description={descVBesit}
            episodes={episodesB}
            
          />}/>
          <Route />
        </Routes>
    </div>
    
  );
  
}

export default App;