{
  const obj = {
    name: 'kobong',
  }

  obj.name; // kobong
  obj['name']; // kobong

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  }

  type Name = Animal['name']; // string
  const text: Name = 'hey';

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender' 유니언이 할당 됨
  let keys: Keys = 'age';
  
  type Person = {
    name: string;
    gender: Animal['gender'];
  }

  const person: Person = {
    name: 'kobong',
    gender: 'male',
  }
  
}