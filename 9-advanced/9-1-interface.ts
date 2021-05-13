type Positiontype = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
};


// object 둘 다 가능
const obj1: Positiontype = {
  x: 1,
  y: 1,
}
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
}

// class 둘 다 가능

class pos1 implements Positiontype {
  x: number;
  y: number;
}
class pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends 
interface ZPositionInterface extends PositionInterface {
  z: number;
}

type ZPositionType = Positiontype & {z: number};

// only  interface can be merged
interface PositionInterface {
  z: number;
};

// type PositionType{

// }

// Type aliases can use computed properties 
type Person = {
  name: string;
  age: number;
}

type Name = Person['name']; // Type Name 은 stirng type

type NumberType = number;
type Direction = 'left' | 'right';

type Position = {
  x: number;
  y: number;
}

const pos: Position = { x:0, y:0};
printPostion(pos);

function printPostion(position: Position){
  console.log(`positionX : ${position.x}, positionY : ${position.y}`);
}