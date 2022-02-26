import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.component";
import Homepage from "./pages/homepage/Homepage.component";

import "./global.style.css"
import AdminLogin from "./components/admin-login/AdminLogin";
import PodcastItem from "./components/podcast-item/Podcast-item";

function App() {

  const vnutri = "Внутри меня";
  const besit = "Меня все бесит";

  return (
    <div>
        <Header/>
        {/* <Homepage /> */}
        <Routes>
          
          <Route exact path="/" element={<Homepage />}/>
          <Route exact path="admin" element={<AdminLogin />}/>
          <Route exact path="vnutri-menya" element={<PodcastItem name={vnutri} />}/>
          <Route exact path="menya-vse-besit" element={<PodcastItem name={besit}/>}/>
        </Routes>
    </div>
    
  );
}

export default App;
