import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home/view";
import EpisodeDetails from "./pages/episode-detail/view";
import PodcastDetails from "./pages/podcast-details/view";

const App = () => {
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
