(() => {
    const calcTotal = (prices: number[]): string => {
        let total = 0;
        prices.forEach((item) => {
            total += item
        });
        return total.toString();
    }

    const answer = calcTotal([1,2,5,4,3,1,2]);
    console.log(answer)

    const printTotal = (prices: number[]): void => {
        const numeric = calcTotal(prices);
        console.log(`The total amount is ${numeric}`)
    }

    printTotal([3,1,5,3,8,9,2]);
})();
