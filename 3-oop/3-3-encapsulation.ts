{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  }

  // public 
  // private
  // protected


  class CoffeeMaker{
    private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    private coffeeBeans: number = 0; // instance (object) level

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if(beans < 0) {
        throw new Error ('value for beans should be greater than 0');
      }
      this.coffeeBeans = beans;
    }

    makeCoffee(shots: number): CoffeeCup{
      if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      }
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(32);
  console.log(maker);
  
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }

    set setFirstName(firstName: string){
      this.firstName = firstName;
    }

    set age(num: number) {
      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string){

    }


    printFirstName(){
      console.log(this.firstName);
    }
  }

  const user = new User('steve', 'jobs');
  console.log(user.fullName);
  user.setFirstName = 'kim';
  console.log(user.fullName);
  user.printFirstName();
  user.age = 6
  
  
}