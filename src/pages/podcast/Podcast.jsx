import React from "react";
import Banner from "../../components/banner/Banner";
import PodcastContent from "../../components/podcast/PodcastContent";
import '../../assets/css/podcast.css'
import Podcastcard from "../../components/podcast/Podcastcard";
const Podcast = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="">
      <Banner title="Podcast" />
      <div className="container">
        <PodcastContent />
      </div>
        <Podcastcard/>
    </div>
  );
};

export default Podcast;
