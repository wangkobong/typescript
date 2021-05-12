{
  // Array
  
  const fruits: string[] = ['tomato', 'banana'];
  const scores: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]){
  }

  // Tuple -> interface, type ailas, class

  let student: [string, number];
  student = ['name', 1];
  student[0] // name
  student[1] // 123
  const [name, age] = student;
  
  
}