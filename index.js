import DonutMaker from './DonutMaker.js';
import { donutCount, autoClickerCount, autoClickerCost, donutMultiplierCount, donutMultiplierCost } from './utils.js';

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
  const donutCountPara = document.getElementById('donutCountPara');
  donutCountPara.innerText = donutCount(donutInfo);
  // myDonutsDiv.appendChild(donutCountPara);

  const autoClickerCountPara = document.getElementById('autoClickerCount');
  autoClickerCountPara.innerText = autoClickerCount(donutInfo);
  const autoClickerCostPara = document.getElementById('autoClickerCost');
  autoClickerCostPara.innerText = autoClickerCost(donutInfo);

  const donutMultiplierCountPara = document.getElementById('donutMultiplierCount');
  donutMultiplierCountPara.innerText = donutMultiplierCount(donutInfo);
  const donutMultiplierCostPara = document.getElementById('donutMultiplierCost');
  donutMultiplierCostPara.innerText = donutMultiplierCost(donutInfo);

  modalButton.addEventListener('click', () => {
    modal.style.display = "block";
  });
  closeButton.addEventListener('click', () => {
    modal.style.display = "none";
  });

  donutButton.addEventListener('click', () => {
    donutInfo.makeDonut();
    console.log('making donuts!');
    donutCountPara.innerText = donutCount(donutInfo);
    autoClickerCountPara.innerText = autoClickerCount(donutInfo);
    autoClickerCostPara.innerText = autoClickerCost(donutInfo);
    donutMultiplierCountPara.innerText = donutMultiplierCount(donutInfo);
    donutMultiplierCostPara.innerText = donutMultiplierCost(donutInfo);
  });

  checkButtonAvailability();

  function checkButtonAvailability() {
    if (donutCount(donutInfo) < 10) {
      document.getElementById("buyAutoClickerButton").disabled = true;
    }
    else if (donutCount(donutInfo) >= 10) {
      document.getElementById("buyAutoClickerButton").disabled = false;
    }
  }

  buyAutoClickerButton.addEventListener('click', () => {
    donutInfo.purchaseAutoClicker();
    console.log('purchased auto clicker');
    donutCountPara.innerText = donutCount(donutInfo);
    autoClickerCountPara.innerText = autoClickerCount(donutInfo);
    autoClickerCostPara.innerText = autoClickerCost(donutInfo);
    donutMultiplierCountPara.innerText = donutMultiplierCount(donutInfo);
    donutMultiplierCostPara.innerText = donutMultiplierCost(donutInfo);
  });

  buyDonutMultiplierButton.addEventListener('click', () => {
    donutInfo.purchaseDonutMultiplier();
    console.log('purchased donut maker');
    donutCountPara.innerText = donutCount(donutInfo);
    autoClickerCountPara.innerText = autoClickerCount(donutInfo);
    autoClickerCostPara.innerText = autoClickerCost(donutInfo);
    donutMultiplierCountPara.innerText = donutMultiplierCount(donutInfo);
    donutMultiplierCostPara.innerText = donutMultiplierCost(donutInfo);
  });

  activateAutoClickersButton.addEventListener('click', () => {
    donutInfo.activateAutoClickers();
    console.log('activated auto clickers');
    donutCountPara.innerText = donutCount(donutInfo);
    autoClickerCountPara.innerText = autoClickerCount(donutInfo);
    autoClickerCostPara.innerText = autoClickerCost(donutInfo);
    donutMultiplierCountPara.innerText = donutMultiplierCount(donutInfo);
    donutMultiplierCostPara.innerText = donutMultiplierCost(donutInfo);
  });
};
