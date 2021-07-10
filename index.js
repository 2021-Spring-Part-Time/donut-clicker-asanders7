import DonutMaker from './DonutMaker.js';
import { donutCount, autoClickerCount, autoClickerCost, donutMultiplierCount, donutMultiplierCost, donutAmtPerClick } from './utils.js';

const modal = document.getElementById("modal");
const modalButton = document.getElementById("modalBtn");
const closeButton = document.getElementsByClassName("close")[0];

const bakerPopup = document.getElementById("baker-popup");
const bakerButton = document.getElementById("bakerBtn");
const closeBakerButton = document.getElementsByClassName("close-baker")[0];

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
  const donutInfo = new DonutMaker(0, 0, 100, 0, 10, 1);
  const donutCountPara = document.getElementById('donutCountPara');
  donutCountPara.innerText = donutCount(donutInfo);
  const donutAmtPerClickPara = document.getElementById('donut-click-amt');
  donutAmtPerClickPara.innerText = donutAmtPerClick(donutInfo);
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

  bakerButton.addEventListener('click', () => {
    bakerPopup.style.display = "block";
  });

  closeBakerButton.addEventListener('click', () => {
    bakerPopup.style.display = "none";
  });

  donutButton.addEventListener('click', () => {
    donutInfo.makeDonut();
    console.log('making donuts!');
    donutCountPara.innerText = donutCount(donutInfo);
    autoClickerCountPara.innerText = autoClickerCount(donutInfo);
    autoClickerCostPara.innerText = autoClickerCost(donutInfo);
    donutMultiplierCountPara.innerText = donutMultiplierCount(donutInfo);
    donutMultiplierCostPara.innerText = donutMultiplierCost(donutInfo);
    donutAmtPerClickPara.innerText= donutAmtPerClick(donutInfo);
  });

  checkButtonAvailability();

  function checkButtonAvailability() {
    if (donutCount(donutInfo) < 10) {
      document.getElementById("buyDonutMultiplierButton").disabled = true;
    }
    else if (donutCount(donutInfo) >= 10) {
      document.getElementById("buyDonutMultiplierButton").disabled = false;
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
    donutAmtPerClickPara.innerText = donutAmtPerClick(donutInfo);
  });

  buyDonutMultiplierButton.addEventListener('click', () => {
    donutInfo.purchaseDonutMultiplier();
    console.log('purchased donut maker');
    donutCountPara.innerText = donutCount(donutInfo);
    autoClickerCountPara.innerText = autoClickerCount(donutInfo);
    autoClickerCostPara.innerText = autoClickerCost(donutInfo);
    donutMultiplierCountPara.innerText = donutMultiplierCount(donutInfo);
    donutMultiplierCostPara.innerText = donutMultiplierCost(donutInfo);
    donutAmtPerClickPara.innerText = donutAmtPerClick(donutInfo);
  });

  activateAutoClickersButton.addEventListener('click', () => {
    runAutoClickers();
    // donutInfo.activateAutoClickers();
    console.log('activated auto clickers');
    donutCountPara.innerText = donutCount(donutInfo);
    autoClickerCountPara.innerText = autoClickerCount(donutInfo);
    autoClickerCostPara.innerText = autoClickerCost(donutInfo);
    donutMultiplierCountPara.innerText = donutMultiplierCount(donutInfo);
    donutMultiplierCostPara.innerText = donutMultiplierCost(donutInfo);
    donutAmtPerClickPara.innerText = donutAmtPerClick(donutInfo);
  });

  function runAutoClickers() {
    setInterval(function(){
      donutInfo.activateAutoClickers();
  }, 1000);
  }
};
