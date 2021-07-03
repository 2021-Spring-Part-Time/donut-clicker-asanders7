class DonutMaker {
    constructor(donutCount, autoClickerCount, autoClickerCost, donutMultiplierCount, donutMultiplierCost) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.autoClickerCost = autoClickerCost;
        this.donutMultiplierCount = donutMultiplierCount;
        this.donutMultiplierCost = donutMultiplierCost;
    }

    makeDonut() {
        if (donutMultiplierCount === 0) {
            donutCount += 1;
        }
        else {
            donutCount += Math.pow(1.2, donutMultiplierCount);
        }
    }

    purchaseAutoClicker() {
        if (donutCount >= autoClickerCost) {
            if (donutMultiplierCount === 0) {
                autoClickerCount += 1;
                donutCount -= autoClickerCost;
                autoClickerCost += (autoClickerCost * .1);
            }
            else {
                autoClickerCount += donutMultiplierCount;
                donutCount -= this.autoClickerCost;
                autoClickerCost += (autoClickerCost * .1);
            }
        }
        else {
            //not enough donuts to purchase auto clicker
            autoClickerCount = autoClickerCount;
            donutCount = donutCount;
            autoClickerCost = autoClickerCost;
        }
    }

    purchaseDonutMultiplier() {
        if (donutCount >= donutMultiplierCost) {
            donutMultiplierCount += 1;
            donutCount -= donutMultiplierCost;
            donutMultiplierCost += (donutMultiplierCost * .1);
        }
        else {
            //not enough donuts to purchase donut multiplier
            autoClickerCount = autoClickerCount;
            donutCount = donutCount;
            autoClickerCost = autoClickerCost;
            donutMultiplierCount = donutMultiplierCount;
            donutMultiplierCost = donutMultiplierCost;
        }
    }
}

export default DonutMaker;

export const getDonutCount = (DonutMaker) => {
    return ( 'Donut Count: ' + donutCount);
};

export const getAutoClickerCount = (DonutMaker) => {
    return ( 'Auto Clicker Count: ' + autoClickerCount);
};

export const getAutoClickerCount = (DonutMaker) => {
    return ( 'Donut Multiplier Count: ' + donutMultiplierCount);
};

export const getAutoClickerCost = (DonutMaker) => {
    return ( 'Donut Multiplier Cost: ' + donutMultiplierCost);
};

export const createActionButton = (parentElem, childElem, childText) => {
    childElem.innerText = childText;
    parentElem.appendChild(childElem);
};

export const donutMakingEvent = (buttonVar, DonutMaker) => {
    buttonVar.addEventListener('click', ()=> {
        if(buttonVar.innerText === 'Make a Donut') {
            DonutMaker.makeDonut();
        }
        if(buttonVar.innerText === 'Buy Auto Clicker') {
            DonutMaker.purchaseAutoClicker();
        }
        if(buttonVar.innerText === 'Buy Donut Multiplier') {
            DonutMaker.purchaseDonutMultiplier();
        }
    });
};

export const activateAutoClickersEvent = (buttonVar, DonutMaker) => {
    buttonVar.addEventListener('click', ()=> {
        if(buttonVar.innerText === 'Activate Auto Clickers') ()=> {
            donutCount += autoClickerCount;
        }
    });
};