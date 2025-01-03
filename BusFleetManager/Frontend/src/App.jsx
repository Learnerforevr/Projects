import React from "react";
import "./App.css";
import LoginpageNew from "./LoginpageNew";
import Studentpage from "./Studentpage";
import Adminadatapage from "./Adminadatapage";
import Adminupdatapage from "./Adminupdatapage";
import Adminremovedatapage from "./Adminremovedatapage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Adminpage from "./Adminpage";

function App() {

  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginpageNew/>}/>
      <Route path="/Adminpage" element={<Adminpage/>}></Route>
      <Route path="/Studentpage" element={<Studentpage/>}></Route>
      <Route path="/Adata" element={<Adminadatapage/>}></Route>
      <Route path="/Updatedata" element={<Adminupdatapage/>}></Route>
      <Route path="/Removedata" element={<Adminremovedatapage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )

  
}

export default App;
