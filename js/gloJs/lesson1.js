const isNumber = function(n){
  return ! isNaN(parseFloat(n)) && isFinite(n)
}
// console.log(!isNumber('kklj'));//true
// console.log(!isNumber('22'));//false разрыв цыкла
// console.log(!isNumber(' '));//true

// let money,  
//       income = 'Фриланс',
//       addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую','ЖКХ, бензин, обеды'),
//       deposit = confirm('Есть ли у вас депозит в банке?'),
//       mission = 50000,
//       period = 3,
     // expenses = [];

// const start = function(){
 
//   do{money = prompt('Ваш месячный доход')}
  
//   while( !isNumber(money) ) 
//   console.log(money);
// }
// start()
// const showTypeOf = function(date){
//     console.log(typeof(date))
// }
// showTypeOf(money);
// showTypeOf(addExpenses);
// showTypeOf(deposit);

// console.log(addExpenses.toLowerCase().split(','));

function getExpensesMonth (){ 
  let sum = 0;
  let res = 0;
  for(let i = 0; i < 2; i++){
     // expenses[i] = prompt('Введите обязательную статью расходов?');
     
      do{
        res = +prompt('Во сколько это обойдется?');
      }  while(!isNumber(res))
    sum += res;
    console.log(sum);
     
   
  }
    return  sum;
}

console.log(getExpensesMonth());
// console.log(expenses);

// const expensesAmount = getExpensesMonth()
// console.log('Расходы за месяц : ' + expensesAmount);

// function getAccumulatedMonth(){   
//     return money - expensesAmount
// }
// let accumulatedMonth = getAccumulatedMonth()


// function getTargetMonth(){
//   return mission/accumulatedMonth
// }

// let budgetDay = Math.floor(accumulatedMonth/ 30);
// function getStatusIncome(){
//   if(budgetDay >= 1200){
//       console.log('У вас высокий уровень дохода');
//   }else if(budgetDay >= 600 && budgetDay < 1200){
//       console.log('У вас средний уровень дохода');
//   }else if(budgetDay < 600 && budgetDay > 0){
//       console.log('К сожалению у вас уровень дохода ниже среднего')
//   }else if(budgetDay <= 0){
//       console.log('Что то пошло не так')
//   }
// }
// getStatusIncome()

// const accumulatedgetTargetMonth = getTargetMonth(mission, accumulatedMonth)//
// console.log('Накопления за месяц', accumulatedMonth)
// console.log(`цель накопления ${mission} рублей будет достигнута за ${accumulatedgetTargetMonth} месяцев`,)
// console.log('budgetDay : ',budgetDay);
