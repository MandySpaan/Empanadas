## Requirements

throw an error at a negative input value
a or b or c all have to be at least 0 or higher

Can the total be divided by 3?
if total %3 !==0, throw error
otherwise continue

Throw an error if total is more than 40

## Find the lowest price possibilities

Do while: Are there still at least 2 left? Then
var new price = ((most expensive / 2) + (cheapest left / 2))
2 empanadas have to be added with the new price
and the most expensive and cheapest have to be removed

Do while: Are there still at least 2 left? Then
var new price = ((most expensive / 2) + (cheapest left / 2))
2 empanadas have to be added with the new price
and the most expensive and cheapest have to be removed

## Calculate the cost of the lowest total price option

Have an overview of all the empanadas by price
For example
0 of 12
4 of 14
2 of 15
0 of 16

Check how many empanadas there are
in the example 6

calculate how many empanadas have to be paid
by dividing the nr of empanadas by 3
in the example 2

Take the 2 highest prices from the overview

if 2 or more empanadas have to be paid
the result is of those prices together

otherwise the result is of the 1 empanada

## Convert the input into an array of objects?

const empanadas = [
{ name: a,
number: 3,
price: 12 },
{ name: b,
number: 2,
price: 14 },
{ name: c,
number: 1,
price: 16 },
];

From here adding 2 new price objects
and deleting 1 highest and 1 lowest price

then again adding 2 new price objects
and deleting 1 highest and 1 lowest price etc.
