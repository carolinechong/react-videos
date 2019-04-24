import "./VideoItem.css";
import React from "react";

// Referencing props object from VideoList and App (parent components)
const VideoItem = ({ video, onVideoSelect }) => {
  // YouTube properties and Semantic UI className
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
