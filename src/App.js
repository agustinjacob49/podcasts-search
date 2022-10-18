import "./App.scss";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home/view";
import EpisodeDetails from "./pages/episode-detail/view";
import PodcastDetails from "./pages/podcast-details/view";
import { LoaderContextProvider } from "./utils/context/loaderContext";

const App = () => {

  return (
    <div className="App">
        <LoaderContextProvider>
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
        </LoaderContextProvider>
    </div>
  );
};

export default App;
