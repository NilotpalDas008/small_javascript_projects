
const stars = document.querySelectorAll('.star-rating-container i');
const starValuetext = document.querySelector('.selected-rating-value');

let currentSelectedStars = -1;

stars.forEach((starItem, index) => {
  starItem.dataset.rating = String(index + 1);
  starItem.addEventListener('mouseover', handleMouseover);
  starItem.addEventListener('click', handleOnClick);
  starItem.addEventListener('mouseleave', handleLeave);
});

function handleMouseover(event) {
  const value = parseInt(event.target.dataset.rating, 10);
  if (!value) return;
  handleUpdateRating(value);
}

function handleUpdateRating(value) {
  for (let i = 0; i < stars.length; i++) {
    if (i < value) {
      stars[i].classList.remove('fa-regular');
      stars[i].classList.add('fa-solid');
    } else {
      stars[i].classList.remove('fa-solid');
      stars[i].classList.add('fa-regular');
    }
  }
}

function handleOnClick(event) {
  const value = parseInt(event.target.dataset.rating, 10);
  currentSelectedStars = value;
  handleUpdateRating(currentSelectedStars);
  starValuetext.textContent = String(value);
}

function handleLeave() {
  handleUpdateRating(currentSelectedStars);
}

