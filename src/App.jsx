import React from "react";
import NavBar from "./Components/NavBar";
import Landing from "./Components/Landing";
import Work from "./Components/Work";
import PlayReelPage from "./Components/PlayReelPage";
import ImagesPage from "./Components/ImagesPage";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="w-full ">
      <NavBar />
      <Landing />
      <Work />
      <PlayReelPage />
      <ImagesPage />
      <Footer />
    </div>
  );
};

export default App;
