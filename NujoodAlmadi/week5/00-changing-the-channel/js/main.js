// Show me what you've got!
const showsArray = [
  "blue-planet.jpg",
  "cnn.jpg",
  "deadpool.jpg",
  "good-will-hunting.jpg",
  "gravity.jpg",
  "koyaanisqatsi.jpg",
  "parts-unknown.jpg",
  "star-wars-solo.jpeg",
  "stranger-things.jpg"
];

const channelsArray = ["#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9"];

changeChannel = channel => {
  $(channel).on({
    hover: function() {
      $("#channel_img").attr(
        "src",
        `./img/${showsArray[channelsArray.indexOf(channel)]}`
      );
    }
  });
};
