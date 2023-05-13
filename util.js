/*
    method which generates random number between a range
    highest_number : the highest possible number that can be generated
    lowest_number : the lowest possible number that can be generated
*/
const random_number_generator = (lowest_number, highest_number) => {
    return Math.floor(Math.random() * (highest_number - lowest_number)) + lowest_number;
}

module.exports = { random_number_generator };