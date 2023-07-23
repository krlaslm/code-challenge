// your code here:

class Datasource {
  static getPrices() {
    const url = "https://interview.switcheo.com/test.json";
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("API response:", data);
        // this is to iterate over the prices data and create a new object
        return data.data.prices.map((priceData) => new Price(priceData));
      });
  }
}

// we create a new object so that its easier to validate the buy and sell whether they are a valid number
class Price {
  constructor(data) {
    this.pair = data.pair;
    this.buy = parseFloat(data.buy);
    this.sell = parseFloat(data.sell);
  }

  mid() {
    return (this.buy + this.sell) / 2 / 100;
  }

  quote() {
    return this.pair.slice(3);
  }
}

Datasource.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

// function getPrices() {
//   const url = "https://interview.switcheo.com/test.json";
//   return fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       return data.data.prices.map((priceData) => ({
//         pair: priceData.pair,
//         buy: parseFloat(priceData.buy),
//         sell: parseFloat(priceData.sell),
//       }));
//     });
// }

// // Utility function to calculate mid price
// function mid(price) {
//   return (price.buy + price.sell) / 2 / 100;
// }

// // Utility function to get the quote currency
// function quote(price) {
//   return price.pair.slice(3);
// }

// // Usage example:
// getPrices()
//   .then((prices) => {
//     prices.forEach((price) => {
//       console.log(
//         `Mid price for ${price.pair} is ${mid(price)} ${quote(price)}.`
//       );
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });
