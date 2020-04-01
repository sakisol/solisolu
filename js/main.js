// fancybox initialization

$('[data-fancybox="gallery"]').fancybox({
  // Options will go here
  buttons: ["slideShow", "share", "zoom", "fullScreen", "close"],
  thumbs: {
    autoStart: true
  }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
