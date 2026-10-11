
const playButton = document.getElementById("playButton");
const welcome = document.getElementById("welcome");
const story = document.getElementById("story");
const backgroundMusic = document.getElementById("backgroundMusic");

if (playButton && welcome && story) {
  playButton.addEventListener("click", () => {
    welcome.hidden = true;
    story.hidden = false;
    window.scrollTo(0, 0);

    if (backgroundMusic) {
      backgroundMusic.play().catch((error) => {
        console.log("پخش آهنگ انجام نشد:", error);
      });
    }
  });
}
