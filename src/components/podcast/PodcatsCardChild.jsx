import React, { useRef, useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { MdOutlineHeadset } from "react-icons/md";

const PodcatsCardChild = ({ image, episode, author, audioSrc }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="w-[410px] prodcats_left">
      <div className="w-[200px] h-[200px]">
        <img src={image} alt={`Podcast ${episode}`} />
      </div>
      <div className="podcast_epo">{episode}</div>
      <div className="author_name">{author}</div>
      <div className="podcast_player">
        <div>
          <FaAnglesLeft
            onClick={() => (audioRef.current.currentTime -= 5)} // 5 saniyə geri
            className="text-white cursor-pointer"
          />
        </div>
        <div>
          <MdOutlineHeadset
            onClick={togglePlayPause}
            className="text-white cursor-pointer"
          />
        </div>
        <div>
          <FaAnglesRight
            onClick={() => (audioRef.current.currentTime += 5)} // 5 saniyə irəli
            className="text-white cursor-pointer"
          />
        </div>
      </div>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
      <div className="w-full my-[20px]">
        <div className="w-full">
          <input
            className="w-full"
            type="range"
            value={(currentTime / duration) * 100 || 0}
            onChange={handleSeek}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="text-white">{formatTime(currentTime)}</div>
          <div className="text-white">{formatTime(duration)}</div>
        </div>
      </div>
    </div>
  );
};

export default PodcatsCardChild