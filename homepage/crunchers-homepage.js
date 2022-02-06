const entreeWidg = (event) => {
  const opBckgrnd = document.createElement(`div`);
  const widget = document.createElement(`div`);
  const foodImg = document.createElement(`div`);

  let styling = window.getComputedStyle(event.target);
  foodImg.style.backgroundImage = styling.backgroundImage;
  foodImg.style.backgroundSize = `cover`;
  foodImg.style.backgroundPosition = `center`;

  foodImg.classList.add(`foodImg`);
  widget.appendChild(foodImg);

  opBckgrnd.classList.add(`opBckgrnd`);
  opBckgrnd.addEventListener(`click`, exitWidget);
  widget.classList.add(`widget`);

  opBckgrnd.appendChild(widget);
  document.querySelector(`main`).appendChild(opBckgrnd);
};

const exitWidget = (event) => {
  if (event.target.classList.contains(`opBckgrnd`)) {
    event.target.remove();
  }
};

entreeImgDisplay = document.querySelectorAll(`.entreeImg`);

for (let i = 0; i < entreeImgDisplay.length; i++) {
  entreeImgDisplay[i].addEventListener(`click`, entreeWidg);
}
