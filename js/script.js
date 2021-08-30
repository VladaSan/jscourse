'use script';

let money = 30000;

let income = 'Фриланс';

let addExpenses = 'Интернет, такси, коммуналка, продукты';

let deposit = true;

let mission = 100000;

let period = 3;

let budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(addExpenses.toLowerCase().split(', '));
console.log(addExpenses.length);
console.log(typeof deposit);
console.log(`Период равен: ${period} месяцев. Цель заработать ${mission} рублей`);
console.log(`Дневной бюджет: ${budgetDay}`);


