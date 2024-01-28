class DescriptiveStatistics {
  constructor(data) {
    this.data = data;
    this.sortedData = this.sortData();
  }

  // Helper method to sort the data
  sortData() {
    return this.data.slice().sort((a, b) => a - b);
  }

  // Measures of Central Tendency

  mean() {
    const sum = this.data.reduce((acc, value) => acc + value, 0);
    return sum / this.data.length;
  }

  median() {
    const middle = Math.floor(this.sortedData.length / 2);
    if (this.sortedData.length % 2 === 0) {
      return (this.sortedData[middle - 1] + this.sortedData[middle]) / 2;
    } else {
      return this.sortedData[middle];
    }
  }

  mode() {
    const frequencyMap = {};
    this.data.forEach(value => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    let maxFrequency = 0;
    let modes = [];

    for (const value in frequencyMap) {
      if (frequencyMap[value] > maxFrequency) {
        maxFrequency = frequencyMap[value];
        modes = [value];
      } else if (frequencyMap[value] === maxFrequency) {
        modes.push(value);
      }
    }

    return modes;
  }

  // Measures of Dispersion

  range() {
    return this.sortedData[this.sortedData.length - 1] - this.sortedData[0];
  }

  variance() {
    const meanValue = this.mean();
    const squaredDifferences = this.data.map(value => (value - meanValue) ** 2);
    const sumSquaredDiff = squaredDifferences.reduce((acc, value) => acc + value, 0);
    return sumSquaredDiff / this.data.length;
  }

  standardDeviation() {
    return Math.sqrt(this.variance());
  }

  quartiles() {
    const middle = Math.floor(this.sortedData.length / 2);
    const lowerHalf = this.sortedData.slice(0, middle);
    const upperHalf = this.sortedData.slice(middle + (this.sortedData.length % 2 === 0 ? 0 : 1));

    return {
      Q1: this.median(lowerHalf),
      Q2: this.median(),
      Q3: this.median(upperHalf),
    };
  }

  interquartileRange() {
    const { Q1, Q3 } = this.quartiles();
    return Q3 - Q1;
  }
}

// Example usage:
const data = [4, 7, 2, 8, 1, 6, 5, 3];
const stats = new DescriptiveStatistics(data);

console.log("Mean:", stats.mean());
console.log("Median:", stats.median());
console.log("Mode:", stats.mode());
console.log("Range:", stats.range());
console.log("Variance:", stats.variance());
console.log("Standard Deviation:", stats.standardDeviation());
console.log("Quartiles:", stats.quartiles());
console.log("Interquartile Range:", stats.interquartileRange());
