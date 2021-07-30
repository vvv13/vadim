  const app = document.querySelector('#app');

 

  // const getResponse = async (url)=>{
  //        const response = await fetch(url)
  //        if(!response.ok){
  //         throw new Error(`Ошибка по адресу ${url} Код ошибки ${response.status}`);
  //        }
  //         return await response.json() 
  // }
  // let arr =[]
  // getResponse('https://jsonplaceholder.typicode.com/users').then(data=>data.map(dat=>{
  //  arr.push(`${dat.id}. ${dat.name}, ${dat.address.city} <br>`) 
  //  app.innerHTML = arr
  // }))


    
// const findOutlier=(integers)=>{
//   let evenNumbers = integers.filter(int=>int % 2 === 0)
//   let oddNumbers = integers.filter(int=>int % 2 > 0)
  
//   return evenNumbers.length === 1 ? evenNumbers: oddNumbers
// }
// console.log(findOutlier([0, 1, 2]));

//////////
// function findOutlier(integers){
//   return integers.slice(0,3).filter(even).length >= 2 ?
//          integers.find(odd) : integers.find(even);
         
// }
// function even(int){
//   return (int % 2 === 0);
// }
// function odd(num){
//   return !even(num)
// }
// console.log(findOutlier([2,6,8,10,-3]));


// Банкоматы допускают использование 4- или 6-значных ПИН-кодов,
// а ПИН-коды не могут содержать ничего,
// кроме ровно 4 или ровно 6 цифр.
// Если функции передается действительная строка ПИН-кода, верните true, иначе верните false.

// Примеры
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

const isNumber = function(n){
  return  !isNaN(parseFloat(n)) && isFinite(n)
}
function validatePIN (pin) {
  //return true or false
}
const f1 = ()=>{
  return this;
}

// В браузере:
console.log(f1());