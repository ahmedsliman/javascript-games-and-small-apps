'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

  meal: function () {
    return [this.mainMenu[0], this.starterMenu[0]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const egyRest = restaurant.meal();
// console.log(egyRest);

// Array nested destructuring
const nested = [1, 2, [4, 5], 6];
const [j, , [x, y]] = nested;
//console.log(j, x, y);

// Default values
const defaultV = [8];
const [v, p = 1] = defaultV;
console.log(v, p);
