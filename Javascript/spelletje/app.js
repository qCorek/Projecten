let startTime, timeoutId;

const startButton = document.getElementById('start-button');
const redBox = document.getElementById('red-box');
const greenBox = document.getElementById('green-box');
const message = document.getElementById('message');
const gameContainer = document.getElementById('game-container');

startButton.addEventListener('click', () => {
 
  startButton.classList.add('hidden');


  redBox.classList.remove('hidden');
  message.textContent = 'Wacht...';


  const delay = Math.random() * (7 - 3) + 3;

  timeoutId = setTimeout(() => {
  
    redBox.classList.add('hidden');
    greenBox.classList.remove('hidden');

 
    message.textContent = 'GO!';

   
    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;

    const greenBoxSize = 50; 
    const randomX = Math.random() * (containerWidth - greenBoxSize);
    const randomY = Math.random() * (containerHeight - greenBoxSize);

    greenBox.style.left = `${randomX}px`;
    greenBox.style.top = `${randomY}px`;

  
    startTime = Date.now();
  }, delay * 1000);
});

greenBox.addEventListener('click', () => {

  const reactionTime = (Date.now() - startTime) / 1000;


  message.textContent = `Reactietijd: ${reactionTime.toFixed(2)} seconden`;


  greenBox.classList.add('hidden');
  startButton.classList.remove('hidden');
});