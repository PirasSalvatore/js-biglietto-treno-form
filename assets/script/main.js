// user data

const userDistance = document.querySelector('#distance');
const userAge = document.querySelector('#age');
const btnEL = document.querySelector('button')

// declarection variable 
const discountJuvenile = 0.2;
const discountSenior = 0.4;
const priceForKm = 0.21;
let userPrice = 0;

// add event to click for confirm user data
btnEL.addEventListener('click', function () {
    userPrice = priceCalculator(priceForKm, userDistance.value, userAge.value, discountJuvenile, discountSenior);

    console.log(userDistance.value, userAge.value, userPrice);

})

/** function declaration */

/**
 * calculator the price to travel
 * control age of passenger and applied a discount
 * return the final prica
 * @param {Number} price // price for km
 * @param {Number} km  // distance to travel
 * @param {Number} age //age of passenger
 * @param {Number} frtDiscount // discount for juvanile
 * @param {Number} sndDiscount // discount senior
 * @returns {Number} // final price
 */
function priceCalculator(price, km, age, frtDiscount, sndDiscount) {
    price *= km;
    if (age < 18) {
        price -= (price * frtDiscount);
    } else if (age > 65) {
        price -= (price * sndDiscount);
    }

    return price.toFixed(2);
}