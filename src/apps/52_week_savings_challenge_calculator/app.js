const YEAR = 2020;
const oneWeekMs = 1000 * 60 * 60 * 24 * 7;
const firstJanuary = new Date(YEAR, 0, 1);
const firstJanuaryMs = firstJanuary.getTime();

function printSavingsChart(lastDay = new Date(), totalAmountSaved = 0) {
    const lastDayMs = lastDay.getTime();

    const intervalOutput = getIntervalOutput(firstJanuaryMs, lastDayMs);

    printIntervalOutput(intervalOutput);
}

function getIntervalOutput(firstJanuaryMs, lastDayMs) {
    const todayMsDifference = lastDayMs - firstJanuaryMs;
    const numberOfWeeks = todayMsDifference / oneWeekMs;

    return getWeeklyIntervalOutput(numberOfWeeks);
}

function getWeeklyIntervalOutput(numberOfWeeks, totalSavedAmount = 0, increment = 100) {

    let weeklyIntervalOutput = {};

    for (let i = 1; i <= numberOfWeeks; i++) {
        totalSavedAmount += increment;
        increment += 100;

        let firstWeekDayDate = new Date(((i * oneWeekMs) + firstJanuaryMs) - oneWeekMs).toDateString();
        let lastWeekDayDate = new Date((i * oneWeekMs) + firstJanuaryMs).toDateString();

        weeklyIntervalOutput[i] = {
            totalSavedAmount: totalSavedAmount, nextAmount: increment,
            firstDay: firstWeekDayDate, lastDay: lastWeekDayDate
        };
    }

    return weeklyIntervalOutput;
}

function printIntervalOutput(intervalOutput) {
    for(let key in intervalOutput) {
        console.log(`Week: ${key} (${intervalOutput[key].firstDay} - ${intervalOutput[key].lastDay})`,
                    '\n--------------------------------------------\n',
                    `Savings: ${intervalOutput[key].totalSavedAmount} \t`,
                    `Next Deposit: ${intervalOutput[key].nextAmount}\n`);
    }
}

const LASTDAYMONTH = 6;

printSavingsChart(new Date(YEAR, (LASTDAYMONTH - 1), 31));
