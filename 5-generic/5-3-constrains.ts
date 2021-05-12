interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(){
    console.log('Full time!');
    
  }
  workFullTime(){

  }
}

class PartTimeEmployee implements Employee{
  pay() {
    console.log(`part time!!`);
    
  }
  workPartTime(){

  }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 shit
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}
function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}




const kobong = new FullTimeEmployee();
const bob = new PartTimeEmployee();
kobong.workFullTime();
bob.workPartTime();

const kobongAfterPay = pay(kobong);
const bobAfterPay = pay(bob);

const obj = {
  name: 'kobong',
  age: 20,
};
const obj2 = {
  animal: '🐹',
};



console.log(getValue(obj, 'name')); // kobong
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // 🐹

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}