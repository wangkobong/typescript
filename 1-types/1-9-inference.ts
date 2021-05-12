{
  /**
   * Type Inference
   */
  
  let text = 'hello';
  function print(message = 'hello') {
    console.log(message);
  }

  print();

  function add(x: number, y:number){
    return x + y ;
  }

  let result = add(1, 2);
  result = "dsf";
}