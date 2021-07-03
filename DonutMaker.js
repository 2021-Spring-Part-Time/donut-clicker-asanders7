class DonutMaker {
    constructor(donutCount, autoClickerCount, autoClickerCost) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.autoClickerCost = autoClickerCost;
    }

    makeDonut() {
        donutCount += 1;
    }

    purchaseAutoClicker() {
        if (donutCount >= autoClickerCost) {
            autoClickerCount += 1;
            donutCount -= autoClickerCost;
            autoClickerCost += (autoClickerCost * .1);
        }
        else {
            //not enough donuts to purchase auto clicker
            autoClickerCount = autoClickerCount;
            donutCount = donutCount;
            autoClickerCost = autoClickerCost;
        }
    }
}

export default DonutMaker;

export const getDonutCount = (DonutMaker) => {
    return ( 'Donut Count: ' + DonutMaker.donutCount);
};

export const getAutoClickerCount = (DonutMaker) => {
    return ( 'Auto Clicker Count: ' + DonutMaker.autoClickerCount);
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
    });
};

export const activateAutoClickersEvent = (buttonVar, DonutMaker) => {
    buttonVar.addEventListener('click', ()=> {
        if(buttonVar.innerText === 'Activate Auto Clickers') ()=> {
            donutCount += autoClickerCount;
        }
    });
};
