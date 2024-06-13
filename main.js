export const fn = (a, b, c) => {
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log("Please enter valid numbers");
    return;
  }
  if (a < 0 || b < 0 || c < 0) {
    console.log("Throw error on negative input value");
    return;
  }
  if ((a + b + c) % 3 !== 0) {
    console.log(
      "Throws error when the total sum of inputs is not a multiple of 3"
    );
    return;
  }
  if (a + b + c >= 40) {
    console.log(
      "Throws error when the total sum of inputs is not less than 40"
    );
    return;
  }
  // console.log("Turn parameters into an array of individual prices:");

  let arrayEmpanadas = [];
  while (a > 0) {
    arrayEmpanadas.push(12);
    a -= 1;
  }

  while (b > 0) {
    arrayEmpanadas.push(14);
    b -= 1;
  }

  while (c > 0) {
    arrayEmpanadas.push(16);
    c -= 1;
  }

  // console.log(arrayEmpanadas);
  // console.log(
  //   "Individual prices combined to get to cheapest prices per empanada"
  // );

  //combine empanadas to get to the cheapest prices
  let combinedPrices = [];

  while (arrayEmpanadas.length / 2 >= 1) {
    var newPrice = (arrayEmpanadas.at(0) + arrayEmpanadas.at(-1)) / 2;
    combinedPrices.push(newPrice, newPrice);
    arrayEmpanadas.shift();
    arrayEmpanadas.pop();
  }

  if (arrayEmpanadas.length === 1) {
    var newPrice = arrayEmpanadas.at(0);
    combinedPrices.push(newPrice);
    arrayEmpanadas.pop();
  }

  // console.log(combinedPrices);
  // console.log("array of cheapest prices from high to low");
  combinedPrices.sort();
  combinedPrices.reverse();
  // console.log(combinedPrices);

  // console.log("How many empanadas have to be paid:");
  let qtToBePaid = combinedPrices.length / 3;
  // console.log(qtToBePaid);

  // console.log("The empanadas that have to be paid");
  let toBePaid = combinedPrices.slice(0, qtToBePaid);
  // console.log(toBePaid);

  // console.log("The total price is:");
  let totalPrice = 0;
  for (let i = 0; i < toBePaid.length; i++) {
    totalPrice += toBePaid[i];
  }
  // console.log(totalPrice);
  return totalPrice;
};
