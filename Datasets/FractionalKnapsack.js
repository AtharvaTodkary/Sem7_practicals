function fractionalKnapsack(capacity, items) {
  items.sort((a, b) => b.value / b.weight - a.value / a.weight);

  let totalValue = 0;

  for(const {value , weight} of items) {
    if(capacity === 0) break;

    const amount = Math.min(weight, capacity);

    totalValue += (amount*value)/weight;
    capacity -= amount;
  }
  return totalValue;
}

const items = [
    {
        value: 60,
        weight: 10
    },{
        value: 100,
        weight: 20
    },{
        value: 120,
        weight: 30
    }
];

const capacity = 50;
console.log("Maximum value in knapsack:", fractionalKnapsack(capacity, items));
