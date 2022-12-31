let bool = true;

// Slide with arrow
function openCode() {
    const block = document.getElementById("block");
    const arrow = document.getElementById("arrow");
    const title = document.getElementById("title");
    const code = document.getElementById("code");
    const describle = document.getElementById("describle");
    const arrowsFrame = document.getElementById("switchFrameArrow");

    if (bool) {
        block.style.animation = "open forwards .5s";
        arrow.style.animation = "openArrow forwards .5s";
        title.style.animation = "closeText forwards .3s";
        code.style.animation = "openCode forwards .5s";

        describle.style.animation = "closeText forwards .3s";
        arrowsFrame.style.animation = "closeText forwards .3s";

        bool = false;

    } else {
        block.style.animation = "close forwards .5s";
        code.style.animation = "closeCode forwards .5s";
        arrow.style.animation = "closeArrow forwards .5s";
        setTimeout(() => {title.style.animation = "openText forwards .3s";}, 500);
        setTimeout(() => {describle.style.animation = "openText forwards .3s";}, 800);
        arrowsFrame.style.animation = "openText forwards .3s";
        bool = true;
    }
}

// When the user click on the close button
function changeFrame() {
    const close = document.children;
    for (let x of close) {
        x.style.animation = "closeFrame forwards .3s";
    }
}

// put 100% height to code
setInterval(() => {
    document.getElementById("code").style.height = window.innerHeight + "px";
  }, 100);