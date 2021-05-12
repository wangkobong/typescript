{
  /**
   *  JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // number
  const num:number = -6;

  // string
  const str:string = 'hello';

  // boolean 
  const boal:boolean = true;

  // null
  let person:string | null;
  person = 'str';
  
  //undefined
  let name: undefined; // 쓰지않음
  let age: number | undefined; // 숫자 또는 undefined
  age = 3;

  function find(): number | undefined {
    return undefined;
  }

  //unknown 
  let notSure: unknown;
  notSure = 0;
  notSure = true;
  notSure = undefined;

  // any
  let anything: any = 0;
  anything = 'anything';

  // void 
  function print() {
    console.log('hello');
    return;
  }

  let unusable: void = undefined; // 변수에는 쓰지 않음

  // never 
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message)
    while(true){}
  } 
  let neverEnding: never; // 안써~

  // object 잘 안쓴다. 
  let obj: object;
  function acceptSomeObject(obj: object) {

  }
  acceptSomeObject({name: 'kobong'});
  acceptSomeObject({animal : 'dog'});
}