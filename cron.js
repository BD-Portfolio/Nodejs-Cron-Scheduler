const cron = require("node-cron");
const { random_number_generator } = require("./util");

/*
    cron to execute every 20 seconds
    prints a random number
*/ 
cron.schedule("*/20 * * * * *", () => {
    const lowest_number = 1;
    const highest_number = 100;
    const random_number = random_number_generator(lowest_number, highest_number);
    console.log(`Cron executing every 20 seconds generated a random number :- ${random_number}`);
});

/*
    cron to execute every 1 minute
    prints a random number
*/ 
cron.schedule("0 */1 * * * *", () => {
    const lowest_number = 100;
    const highest_number = 1000;
    const random_number = random_number_generator(lowest_number, highest_number);
    console.log(`Cron executing every 1 minute generated a random number :- ${random_number}`);
});

/*
    cron to execute every 2 hour
    prints a random number
*/ 
cron.schedule("0 0 */2 * * *", () => {
    const lowest_number = 5000;
    const highest_number = 8000;
    const random_number = random_number_generator(lowest_number, highest_number);
    console.log(`Cron executing every 2 hours generated a random number :- ${random_number}`);
});

/*
    cron to execute on 5th day of each month
    prints a random number
*/ 
cron.schedule("0 0 0 */5 * *", () => {
    const lowest_number = 200;
    const highest_number = 400;
    const random_number = random_number_generator(lowest_number, highest_number);
    console.log(`Cron executing on 5th day of each month generated a random number :- ${random_number}`);
});

/*
    cron to execute on 3rd month ( March ) of each year
    prints a random number
*/ 
cron.schedule("0 0 0 1 */3 *", () => {
    const lowest_number = 1921;
    const highest_number = 9601;
    const random_number = random_number_generator(lowest_number, highest_number);
    console.log(`Cron executing on 3rd month of each year generated a random number :- ${random_number}`);
});

/*
    cron to execute on each Sunday of a week
    prints a random number
*/ 
cron.schedule("5 8 * * 7", () => {
    const lowest_number = 1;
    const highest_number = 7;
    const random_number = random_number_generator(lowest_number, highest_number);
    console.log(`Cron executing on every Sunday of a week generated a random number :- ${random_number}`);
});
