class DonutMaker {
    constructor(donutCount, autoClickerCount, autoClickerCost, donutMultiplierCount, donutMultiplierCost) {
        this.donutCount = donutCount;
        this.autoClickerCount = autoClickerCount;
        this.autoClickerCost = autoClickerCost;
        this.donutMultiplierCount = donutMultiplierCount;
        this.donutMultiplierCost = donutMultiplierCost;
    }

    makeDonut() {
        if (this.donutMultiplierCount === 0) {
            this.donutCount += 1;
        }
        else {
            this.donutCount += Math.pow(1.2, this.donutMultiplierCount);
        }
    }

    purchaseAutoClicker() {
        if (this.donutCount >= this.autoClickerCost) {
            if (this.donutMultiplierCount === 0) {
                this.autoClickerCount += 1;
                this.donutCount -= this.autoClickerCost;
                this.autoClickerCost += (this.autoClickerCost * .1);
            }
            else {
                this.autoClickerCount += this.donutMultiplierCount;
                this.donutCount -= this.autoClickerCost;
                this.autoClickerCost += (this.autoClickerCost * .1);
            }
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
        this.donutCount += this.autoClickerCount;
    };
}

export default DonutMaker;