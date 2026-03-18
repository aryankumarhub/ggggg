let papers = document.querySelectorAll(".paper");

papers.forEach(paper => {
  let isDragging = false;
  let offsetX, offsetY;

  // TOUCH (mobile)
  paper.addEventListener("touchstart", (e) => {
    isDragging = true;
    offsetX = e.touches[0].clientX - paper.offsetLeft;
    offsetY = e.touches[0].clientY - paper.offsetTop;
  });

  paper.addEventListener("touchmove", (e) => {
    if (isDragging) {
      paper.style.left = (e.touches[0].clientX - offsetX) + "px";
      paper.style.top = (e.touches[0].clientY - offsetY) + "px";
    }
  });

  paper.addEventListener("touchend", () => {
    isDragging = false;
  });

  // MOUSE (PC)
  paper.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - paper.offsetLeft;
    offsetY = e.clientY - paper.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      paper.style.left = (e.clientX - offsetX) + "px";
      paper.style.top = (e.clientY - offsetY) + "px";
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});
