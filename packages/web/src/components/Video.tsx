import React from "react";
import "./App.css";
import { VideoData } from "../types";

function Video(props: VideoData) {
  return (
    <video
      className="video"
      ref={(video: HTMLVideoElement) => {
        video.srcObject = props.stream;
      }}
    ></video>
  );
}

export default Video;
