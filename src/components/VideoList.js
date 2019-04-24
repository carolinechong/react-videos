import React from "react";
import VideoItem from "./VideoItem";

// Reference props object from App (parent component) - destructuring out video property and onVideoSelect callback.
const VideoList = ({ videos, onVideoSelect }) => {
  // Map over the 'videos' array, which inside have many 'video' objects - and assign it a variable
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
