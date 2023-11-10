const counterElement = document.getElementById('counter');
let counterValue = 0;

function updateCounter() {
  counterValue++;
  counterElement.innerHTML = counterValue;
}

window.addEventListener('load', () => {
  setInterval(updateCounter, 1000);
});

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const likeButton = document.getElementById('heart');
const likesContainer = document.querySelector('.likes');
const likes = {};

plusButton.addEventListener('click', () => {
  counterValue++;
  counterElement.textContent = counterValue;
});

minusButton.addEventListener('click', () => {
  if (counterValue > 0) {
    counterValue--;
    counterElement.textContent = counterValue;
  }
});

likeButton.addEventListener('click', () => {
  if (likes[counterValue]) {
    likes[counterValue]++;
  } else {
    likes[counterValue] = 1;
  }

  displayLikes();
});

function displayLikes() {
  likesContainer.innerHTML = '';

  for (const number in likes) {
    const likeEntry = document.createElement('li');
    likeEntry.textContent = `${number}: ${likes[number]} likes`;
    likesContainer.appendChild(likeEntry);
  }
}

const pauseButton = document.getElementById('pause');
const buttons = document.querySelectorAll('button:not(#pause)');
let isPaused = false;

pauseButton.addEventListener('click', () => {
  isPaused = !isPaused;

  if (isPaused) {
    pauseButton.textContent = 'Resume';
    buttons.forEach((button) => {
      button.disabled = true;
    });
  } else {
    pauseButton.textContent = 'Pause';
    buttons.forEach((button) => {
      button.disabled = false;
    });
  }
});

const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsContainer = document.getElementById('list');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  commentInput.value = '';

  const commentEntry = document.createElement('div');
  commentEntry.textContent = commentText;
  commentsContainer.appendChild(commentEntry);
});