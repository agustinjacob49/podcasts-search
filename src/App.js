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
import { transformPodcasts } from './utils/transform/podcasts';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [podcastData, setPodcastsData] = useState({});

  useEffect(() => {
    fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json")
      .then((response) => response.json())
      .then((response) => {
        const { feed : { entry } } = response;
        const podcasts = transformPodcasts(entry);
        setPodcastsData({ podcasts }); 
        setIsLoading(false);
      });
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
