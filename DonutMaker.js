class DonutMaker {
    constructor(donutCount, autoClickerCount, autoClickerCost, donutMultiplierCount, donutMultiplierCost, donutAmtPerClick) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.autoClickerCost = autoClickerCost;
        this.donutMultiplierCount = donutMultiplierCount;
        this.donutMultiplierCost = donutMultiplierCost;
        this.donutAmtPerClick = donutAmtPerClick;
    }

    makeDonut() {
        if (this.donutMultiplierCount === 0) {
            this.donutCount += 1;
        }
        else {
            // this.donutAmtPerClick = Math.pow(1.2, this.donutMultiplierCount);
            this.donutCount += this.donutAmtPerClick;
        }
    }

    purchaseAutoClicker() {
        if (this.donutCount >= this.autoClickerCost) {
            this.autoClickerCount += 1;
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCost += (this.autoClickerCost * .1);
        }
        else {
            //not enough donuts to purchase auto clicker
            this.autoClickerCount = this.autoClickerCount;
            this.donutCount = this.donutCount;
            this.autoClickerCost = this.autoClickerCost;
        }
    }

    purchaseDonutMultiplier() {
        if (this.donutCount >= this.donutMultiplierCost) {
            this.donutMultiplierCount += 1;
            this.donutAmtPerClick = Math.pow(1.2, this.donutMultiplierCount);
            this.donutCount -= this.donutMultiplierCost;
            this.donutMultiplierCost += (this.donutMultiplierCost * .1);
        }
        else {
            //not enough donuts to purchase donut multiplier
            this.autoClickerCount = this.autoClickerCount;
            this.donutCount = this.donutCount;
            this.autoClickerCost = this.autoClickerCost;
            this.donutMultiplierCount = this.donutMultiplierCount;
            this.donutMultiplierCost = this.donutMultiplierCost;
        }
    }

    activateAutoClickers() {
        this.donutCount += (this.autoClickerCount * this.donutAmtPerClick);
    };
}

export default DonutMaker;