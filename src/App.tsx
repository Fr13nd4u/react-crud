import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/tours" element={<Tours/>}/>
        <Route path="/favourites" element={<Favourites/>}/> */}
      </Routes>
    </>
  );
};

export default App;
