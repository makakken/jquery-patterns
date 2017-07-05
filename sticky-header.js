var frame;
window.onscroll = function (event) {
  cancelAnimationFrame(frame);
  rafTimer = requestAnimationFrame(toggleHeader);
};

function toggleHeader() {
  if (window.scrollY > 80) {
    document.body.classList.add('sticky');
  } else {
    document.body.classList.remove('sticky');
  }
}
