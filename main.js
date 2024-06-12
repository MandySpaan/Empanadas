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
  console.log("Just checking");
  let i = a + b + c;
  while (i / 2 >= 1) {
    //add code here that does:
    // var new price = ((most expensive / 2) + (cheapest left / 2))
    // 2 empanadas have to be added with this new price
    // and the most expensive and cheapest have to be removed
    i -= 2;
    console.log(`empanadas left to combine: ${i}`);
    //if(i === 1) {add last i price to total}
  }
};
