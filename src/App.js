import "./App.scss";
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home/view";
import EpisodeDetails from "./pages/episode-detail/view";
import PodcastDetails from "./pages/podcast-details/view";
import LoaderContext from "./utils/context/loaderContext";

const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="podcast/:podcastId" element={<PodcastDetails />} />
              <Route
                path="podcast/:podcastId/episode/:episodeId"
                element={<EpisodeDetails />}
              />
            </Routes>
          </Router>
        </LoaderContext.Provider>
    </div>
  );
};

export default App;
