
function openPopup(book) {
  popupImage.src = `static/img/${book}.png`;
  body.classList.add("popup");
};


function closePopup() {
  body.classList.remove("popup");
};