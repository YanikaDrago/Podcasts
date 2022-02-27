import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.component";
import Homepage from "./pages/homepage/Homepage.component";
import PodcastPage from "./pages/podcast/PodcastPage.component";
import AdminLogin from "./components/admin-login/AdminLogin.component";
import AdminPodcastCollections from "./components/admin-podcast-collections/Admin-podcast-collections.component";
import AdminCRUD from "./components/admin-podcast-crud/AdminCRUD.component";

import "./global.style.css"

import dataPodcast from "./assets/data";


function App() {


  const [nameVnutri, nameBesit, imgVnutri, imgBesit] = dataPodcast;

  return (
    
    <div>
        <Header/>
        <Routes>          
          <Route path="/" element={<Homepage />}/>
          <Route path="admin" element={<AdminLogin />} />
          <Route path="admin/podcast" element={<AdminPodcastCollections />}/>
          <Route path="admin/podcast/:name" element={<AdminCRUD />} />
          <Route path="vnutri-menya" element={<PodcastPage name={nameVnutri} src={imgVnutri} />}/>
          <Route path="menya-vse-besit" element={<PodcastPage name={nameBesit} src={imgBesit}/>}/>
          <Route />
        </Routes>
    </div>
    
  );
  
}

export default App;

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="dashboard/invoices" element={<Invoices />} />
//       <Route path="dashboard" element={<Dashboard />}>
//         {/* <Route path="invoices" element={<Invoices />} /> */}
//         <Route path="team" element={<Team />} />
//       </Route>
//     </Routes>
//   );
// }
// function Home() {
//   return <h1>Home</h1>;
// }

// function Dashboard() {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <nav>
//         <Link to="invoices">Invoices</Link>{" "}
//         <Link to="team">Team</Link>
//       </nav>
//       <hr />
//       <Outlet />
//     </div>
//   );
// }

// function Invoices() {
//   return <h1>Invoices</h1>;
// }

// function Team() {
//   return <h1>Team</h1>;
// }
// export default App;
