# Empanada Challenge

This project was made as part of a course Full Stack Developer for GeeksHubs Academy.

## Index 🔍

- [Assignment](#assignment-)
- [My Thought Process](#my-thought-process-)
- [How to Use](#how-to-use-️)
- [Notes on JS Code](#notes-on-js-code-)
- [Points of Improvement](#points-of-improvement-)

## Assignment 📝

The goal of this project was to use JavaScript to calculate how to achieve the best deal for an empanada promotion. The following factors had to be taken into consideration:

- Promotion: get 3, pay only 1
- The 1 to be paid is the most expensive of a group of 3
- You can buy a maximum of 40 empanadas in total
- The total of empanadas has to be dividable by 3
- There are 3 different options, priced €12, €14 & €16
- You can combine the empanadas ordering half / half:
  - For example: if you have 1x €12, 1x €14 and 1x €16 <br>
    Then 1x €12 and 1x €16 can be combined to reach<br>
    a lower price of the most expensive empanada:<br>
    - 0.5x €12 + 0.5x €16 = a new empanada worth €14<br>
      which when ordered twice has the same content<br>
      So 1x €12 and 1x €16 can be turned into 2x €14<br>
      By making this combination, in the example, the highest <br>
      price (and thus the best deal) became €14 instead of €16.

You can find the full assignment (in Spanish) in the file [assignment.md](assignment.md).

---

The following repository was cloned to be used a starting point: [the Empanada Challenge](https://github.com/GeeksHubsAcademy/javascript-empanadas-challenge).<br>
This repository includes the following initial files:

- A main.js file with an empty function that takes 3 parameters (a, b, c)
  - These parameters represent the quantity of empanadas <br>
    (a) respresents priced at €12, (b) at €14 and (c) at €16
- A main.test.js file that holds the tests that need to be completed

## My Thought Process 💭

The overall idea of how to get to the desired result:

- Step 1: Translate the given input properties <i>(a, b, c)</i> into an array of items, where each item represents an empanada named as it's own price: <i>arrayEmpanadas</i>.
- Step 2: Take <i>arrayEmpanadas</i> with the original prices and calculate the possible combinations to get to a new outcome of price per empanada. The new price per empanada has to turn the highest prices as low as possible. Then place these new prices into a new array: <i>combinedPrices</i>.
- Step 3: Take the array <i>combinedPrices</i> and organize the order of its content (new price per empanada) from highest to lowest.
- Step 4: From this now organized array <i>combinedPrices</i>, select chronologically every first of groups of three, and put this into a new array: <i>toBePaid</i>. This array now includes all the empanadas that have to be paid.
- Step 5: Add all the items from the <i>toBePaid</i> together to come to the final price.

## How to Use ⚙️

### Installation

To set up the project, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/your-username/empanadas-challenge.git
cd empanadas-challenge
```

2. Install the dependencies:

```sh
npm install
```

### Usage

To use the function `fn`, you need to import it and call it with the required parameters. The function parameters are:

- `a`: Number of empanadas of type 1 (costs 12 each)
- `b`: Number of empanadas of type 2 (costs 14 each)
- `c`: Number of empanadas of type 3 (costs 16 each)

The function will calculate the optimal total price based on the following conditions:

1. No input value can be negative.
2. The sum of the inputs must be a multiple of 3.
3. The sum of the inputs must be less than 40.

### Running the Project

To run the project and see the output:

```sh
npm start
```

### Running Tests

The project includes a comprehensive set of test cases to ensure the function works correctly. We use Vitest for testing.

To run the tests, use the following command:

```sh
npm test
```

## Notes on JS Code 💻

For the sake of better understanding of how the code gets to the final result, I have added console logs at all steps earlier mentioned in [My Thought Process](#my-thought-process-).

### Some parts of the code singled out with explanation

To get from the array <i>arrayEmpanadas</i> to the array <i>combinedPrices</i>, I've made use of a while loop:

```javascript
let combinedPrices = [];

while (arrayEmpanadas.length / 2 >= 1) {
  var newPrice = (arrayEmpanadas.at(0) + arrayEmpanadas.at(-1)) / 2;
  combinedPrices.push(newPrice, newPrice);
  arrayEmpanadas.shift();
  arrayEmpanadas.pop();
}
```

I started with declaring a new let <i>CombinedPrices</i> an empty array.
Then, while there are 2 items (empanadas) left in the original array <i>arrayEmpanadas</i>, I would take the first item (lowest price) and last item (highest price) and divide them through 2 to get to a new price saved in var <i>newPrice</i>. Then <i>newPrice</i> would get pushed twice into the new array <i>combinedPrices</i>. And the first and last item of the old array <i>arrayEmpanadas</i> would get deleted using shift and pop.

After this I added an if statement, in case of the total number of items (empanadas) being uneven:

```javascript
if (arrayEmpanadas.length === 1) {
  var newPrice = arrayEmpanadas.at(0);
  combinedPrices.push(newPrice);
  arrayEmpanadas.pop();
}
```

This makes sure that if there is only 1 item (empanada) left, even though this item can not be combined, it does get added to the new array <i>combinedPrices</i>.

---

To get from the array <i>combinedPrices</i> to the array <i>toBePaid</i>, I've made use of a for loop:

```javascript
let toBePaid = [];

for (let i = 0; i < combinedPrices.length; i++) {
  if (i % 3 === 0) {
    toBePaid.push(combinedPrices[i]);
  }
}
```

I started with declaring a new let <i>toBePaid</i> an empty array. Then, I wanted to select only the first of every three items (empenadas) chronologically. This is done by using an if statement inside the for loop, where <i>i</i> is used to represent the index number of <i>combinedPrices</i> . The desired selected item (empanadas) then get pushed into the new array <i>toBePaid</i>.

## Points of Improvement 💡

- The current code can be studied more closely to possibly shorten at some parts.
- There could possibly be thought of another solution to the same problem that might use less code.
- The several console logs inside the function are not necessary and solely there for clarification of how the code comes to the final result. These console logs could possibly be removed.
