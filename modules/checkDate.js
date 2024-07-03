const moment = require('moment');

// EXAMPLE Return:
// dans 13 heures
function checkDate(date = new Date('2024-07-02T08:32:03.428+00:00')) {
    const myDate = moment(date).fromNow();
    return myDate;
}

module.exports = { checkDate };