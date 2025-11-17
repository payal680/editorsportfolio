
const videos = document.querySelectorAll(".video-track video");
const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.getElementById("closeModal");
const sliderSection = document.querySelector(".sliding-section");

// When any video is clicked → open modal
videos.forEach(video => {
    video.addEventListener("click", () => {
        modal.style.display = "flex";
        sliderSection.classList.add("blur-active");

        modalVideo.src = video.src;
        modalVideo.play();
    });
});

// Close the modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    sliderSection.classList.remove("blur-active");

    modalVideo.pause();
    modalVideo.src = "";
});

// Close modal when clicking outside video
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        sliderSection.classList.remove("blur-active");
        modalVideo.pause();
        modalVideo.src = "";
    }
});
