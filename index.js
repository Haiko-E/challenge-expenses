import data from './data.json' assert { type: 'json' };

let currentDay = 'wed';

let sum = data.reduce((prev, curr) => {
  return prev + curr.amount;
}, 0);

data.map((item, index) => {
  const height = 300 / (sum / item.amount);
  const bar = document.getElementById('list').children[index].children[1];
  const price = document.getElementById('list').children[index].children[0];

  bar.style.height = `${height.toFixed()}%`;

  bar.addEventListener('click', (e) => {
    if (price.innerHTML) {
      price.innerHTML = null;
    } else {
      price.innerHTML = `$${item.amount}`;
    }
    price.classList.toggle('spending-amount');
  });

  if (item.day === currentDay) {
    bar.className = 'spending-bar-current';
  }
});
