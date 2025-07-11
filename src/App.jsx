import React from "react";
import Resume from "./components/Resume-home";
import Form from "./components/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App =()=>{
  return(
    
    <>

    <BrowserRouter basename="/Resume"> {Resume}
    <Routes>
      <Route index element={<Form/>}/>
      <Route path="/resume" element={<Resume/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
} 
export default App