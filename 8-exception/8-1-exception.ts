// Java: Exception
// JavaScript: Error

//const array = new Array(10000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(filaName: string): string{
  if(filaName === 'not exist!'){
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  //
}

const fileName = 'file!';

try {
  console.log(readFile(fileName));

}catch(error){
  console.log(`catched!!`);
  
}finally {
  closeFile(fileName);
  console.log(`finally!!`);

}
