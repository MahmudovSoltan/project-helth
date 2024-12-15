import React, { useRef, useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { MdOutlineHeadset } from "react-icons/md";
import { RiLeafLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const PodcastComp = () => {
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
    <div className="bg-[#f8f9fa] mt-[120px] ">
      <div className="container flex max-[768px]:flex-col   max-[768px]:py-[80px] justify-between">
        <div className="w-[50%]  max-[768px]:w-full   max-[768px]:flex-col   max-[768px]:pb-[30px] content-center">
          <h2 className="text-[40px] text-[#3d3c3c] font-semibold mb-[30px]">
            Listen My Podcasts
          </h2>
          <p className="text-[16px] text-[#636363] mb-[30px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <Link className="btn " to={"/podcast"}>
            <span>
              <RiLeafLine size={25} />
            </span>
            Listen All
          </Link>
        </div>
        <div className="w-[440px] prodcats_left   max-[768px]:justify-center  max-[500px]:w-full">
          <div className="w-[200px] h-[200px]">
            <img
              src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/06/blog-8-1024x1024.png"
              alt=""
            />
          </div>
          <div className="podcast_epo">Episode 5</div>
          <div className="author_name">Michael</div>
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
            src="https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/09/stomping-drums-rhyth.mp3"
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
      </div>
    </div>
  );
};

export default PodcastComp;
