var readlineSync = require('readline-sync')
const chalk = require('chalk');

var userName = readlineSync.question('Please enter your Name\n');

console.log(chalk.bgRed.bold('Welcome! ' + userName));

var dateOfBirth = readlineSync.question(chalk.cyan.bold('\nPlease enter your Date Of Birth in DD/MM/YYYY format(01/01/2000):-\n'));

var splitDate = dateOfBirth.split('/');
//console.log(splitDate)

var date = parseInt(splitDate[0]);
var month = parseInt(splitDate[1]);
var year = parseInt(splitDate[2]);


if(splitDate.length !== 3) {
  console.log(chalk.red.bold('Date is in wrong format'));
}
else if((year < 1000 ) || (month < 1 || month >13) || (date < 1 || date > 31)) {
  console.log(chalk.red.bold('You entered a wrong date'));
}
else if((month === 2) && (date > 29)){
  console.log(chalk.red.bold('You entered a wrong date'));
}
//if year is divisible by 400 then is_leap_year
// else if year is divisible by 100 then not_leap_year
// else if year is divisible by 4 then is_leap_year
// else not_leap_year

else if( (year % 400 === 0) || (year % 100 !== 0) && (year %4 === 0)) {
  console.log(chalk.green.bold('You are borned in a Leap year'))
}
else {
  console.log(chalk.red.bold('you are not borned in a leap year'))
}
