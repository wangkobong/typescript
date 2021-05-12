{
  /**
   * Type Aliases
   */

  type Text = string;
  const name: Text = 'kobong';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string,
    age: number,
  };

  const student: Student = {
    name: 'kobong',
    age: 32
  }

  console.log(student);
  
  /**
   * String Literal Types
   * 
   */

  type Name = 'name';
  let kobongName: Name;
  kobongName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  

}