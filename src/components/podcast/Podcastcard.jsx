import PodcatsCardChild from "./PodcatsCardChild";



const Podcastcard = () => {
  const podcasts = [
    {
      image:
        "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/06/blog-6-600x400.png",
      episode: "Episode 1",
      author: "Michael",
      audioSrc:
        "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/09/dubstep.mp3",
    },
    {
      image:
        "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/06/blog-10-600x400.png",
      episode: "Episode 2",
      author: "Michael",
      audioSrc:
        "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/09/dubstep.mp3",
    },
    {
      image:
        "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/06/blog-11.png",
      episode: "Episode 3",
      author: "Michael",
      audioSrc:
        "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/09/stomping-drums-rhyth.mp3",
    },
    {
      image:
        "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/06/blog-13.png",
      episode: "Episode 4",
      author: "Michael",
      audioSrc:
        "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/09/background-music-tropical-house-funny-dance.mp3",
    },
    {
      image:
        "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/06/blog-8-600x400.png",
      episode: "Episode 5",
      author: "Michael",
      audioSrc:
        "https://coaching.thimpress.com/healthy-coaching/wp-content/uploads/sites/49/2023/09/stomps-and-claps.mp3",
    },
  ];

  return (
    <div className="bg-[#f8f9fa] py-[80px]">
      <div className="podcast_card_conatiner container pb-[40px]">
        {podcasts.map((podcast, index) => (
          <PodcatsCardChild
            key={index}
            image={podcast.image}
            episode={podcast.episode}
            author={podcast.author}
            audioSrc={podcast.audioSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Podcastcard;
