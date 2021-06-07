import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  return (
    <div className="ui relaxed divided list">
      {props.videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect={props.onVideoSelect}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
