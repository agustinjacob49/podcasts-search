import "./App.scss";
import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home/view";
import EpisodeDetails from "./pages/episode-detail/view";
import PodcastDetails from "./pages/podcast-details/view";
import LoaderContext from "./utils/context/loaderContext";
import PodcastsContext from './utils/context/podcastsContext';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [podcastData, setPodcastsData] = useState({});

  useEffect(() => {
    setTimeout( () => {
      setPodcastsData({ title: 'hola' }); 
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <div className="App">
      <PodcastsContext.Provider value={podcastData} >
        <LoaderContext.Provider value={isLoading}>
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
      </PodcastsContext.Provider>
    </div>
  );
};

export default App;
