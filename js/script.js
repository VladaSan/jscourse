'use strict'; 

const showTypeOf = (data) => {
  return console.log(data, typeof(data));
};

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



console.log(money);
console.log(addExpenses);
console.log(deposit);
console.log(expenses1);
console.log(amount1);
console.log(expenses2);
console.log(amount2);




function getExpensesMonth(amount1, amount2) {
  return amount1 + amount2;
}
console.log(getExpensesMonth(amount1, amount2));



function getAccumulatedMonth(money, expenses) {
  return money - expenses;
}



let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth(amount1, amount2));

console.log(accumulatedMonth);

let budgetDay = Math.floor(accumulatedMonth / 30);

function getTargetMonth(accumulatedMonth, mission) {
  return Math.floor(mission / accumulatedMonth);
}
console.log(getTargetMonth(accumulatedMonth, mission));




function getStatusIncome(budgetDay) {
  if (budgetDay >= 1200) {
    return console.log('У вас высокий уровень дохода');
  } else if (budgetDay < 1200 && budgetDay >= 600) {
    return console.log('У вас средний уровень дохода');
  } else if (budgetDay < 600 && budgetDay >= 0) {
    return console.log('К сожалению, у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0) {
    return console.log('Что-то пошло не так...');
  }

}
getStatusIncome(budgetDay);



showTypeOf(getStatusIncome);



