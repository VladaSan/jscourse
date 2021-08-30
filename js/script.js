'use strict'; 

let money = +prompt('Ваш месячный дход');

let income = 'Фриланс';

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

let deposit = confirm('Есть ли у вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?');

let amount1 = +prompt('Во сколько это обойдется?');

let expenses2 = prompt('Введите обязательную статью расходов?');

let amount2 = +prompt('Во сколько это обойдется?');

let mission = 100000;

let period = 4;

let budgetMonth = money - (amount1 + amount2);

let budgetDay = budgetMonth / 30;



console.log(money);
console.log(addExpenses);
console.log(deposit);
console.log(expenses1);
console.log(amount1);
console.log(expenses2);
console.log(amount2);
console.log(budgetMonth);
console.log(`Цель будет достигнута за ${Math.ceil(mission / budgetMonth)} месяцев`);
console.log('Бюджет на день:', Math.floor(budgetDay));


if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay < 1200 && budgetDay >= 600) {
  console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
  console.log('К сожалению, у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
  console.log('Что-то пошло не так...');
}














