{
  /**
   * Type Assertions Bad!!
   * 
   */

  function jsFunction(): any {
    return 2
  }

  const result = jsFunction();
  console.log((result as string).length);
  console.log((<string>result).length);
  

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // shit
  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!;
  numbers!.push(2); // 
  console.log(numbers);
  
  const button = document.querySelector('class')
  if(button){
    button.nodeValue;
  } else {
  
  }
  return;
}