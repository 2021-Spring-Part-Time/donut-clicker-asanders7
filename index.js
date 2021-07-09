import DonutMaker from './DonutMaker.js';
import { donutStats } from './utils.js';

const modal = document.getElementById("modal");
const modalButton = document.getElementById("modalBtn");
const closeButton = document.getElementsByClassName("close")[0];

const donutButton = document.getElementById('donutButton');
const buyAutoClickerButton = document.getElementById('buyAutoClickerButton');
const buyDonutMultiplierButton = document.getElementById('buyDonutMultiplierButton');
const activateAutoClickersButton = document.getElementById('activateAutoClickersButton');

const myDonutsDiv = document.getElementById('myDonuts');

renderPage();

function renderPage() {
  donutPageSetup();
};

function donutPageSetup() {
  const donutInfo = new DonutMaker(0, 0, 100, 0, 10);
  const donutPara = document.getElementById('donutInfo');
  donutPara.innerText = donutStats(donutInfo);

  myDonutsDiv.appendChild(donutPara);

  modalButton.addEventListener('click', () => {
    modal.style.display = "block";
  });
  closeButton.addEventListener('click', () => {
    modal.style.display = "none";
  });

  donutButton.addEventListener('click', () => {
    donutInfo.makeDonut();
    console.log('making donuts!');
    donutPara.innerText = donutStats(donutInfo);
  });

  buyAutoClickerButton.addEventListener('click', () => {
    donutInfo.purchaseAutoClicker();
    console.log('purchased auto clicker');
    donutPara.innerText = donutStats(donutInfo);
  });

  buyDonutMultiplierButton.addEventListener('click', () => {
    donutInfo.purchaseDonutMultiplier();
    console.log('purchased donut maker');
    donutPara.innerText = donutStats(donutInfo);
  });

  activateAutoClickersButton.addEventListener('click', () => {
    donutInfo.activateAutoClickers();
    console.log('activated auto clickers');
      donutPara.innerText = donutStats(donutInfo);
  });
};

// donutMakingEvent(donutButton, buyAutoClickerButton, buyDonutMultiplierButton, activateAutoClickersButton);
// activateAutoClickersEvent(activateAutoClickersButton);
