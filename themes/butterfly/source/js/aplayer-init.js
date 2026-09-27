const ap = new APlayer({
  container: document.getElementById('myaplayer'),
  fixed: true,
  autoplay: false,
  listMaxHeight: '350px',
  audio: [
    {
      name: "旅の途中",
      artist: "清浦夏实",
      url: "/music/w.mp3",
      cover: "/music/w1.jpg"
    }
  ]
});