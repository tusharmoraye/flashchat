import React, { useState } from "react";
import "./App.css";
import Video from "../components/Video";
import { VideoData } from "../types";

function VideoGrid() {
  const [userVideos, setUserVideos] = useState<VideoData[]>([]);

  const videos =
    userVideos.length && userVideos.map((video) => <Video stream={video} />);

  return <div className="video-grid">{videos}</div>;
}

export default VideoGrid;
