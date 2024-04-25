// Rest parameter in functions
function sumNumbers(...numbers) {
    const sum = numbers.reduce((prev, value) => {
      return prev + value;
    }, 0);
  
    console.log(`La suma es ${sum}`);
  }
  console.log("------------------\n");
  
  console.log("Spread como Rest Parameter \n");
  console.log("\nEnviando 3 números: ");
  sumNumbers(1, 2, 3);
  console.log("\nEnviando 5 números: ");
  sumNumbers(1, 2, 3, 4, 5);
  console.log("\nEnviando 7 números: ");
  sumNumbers(1, 2, 3, 4, 5, 6, 7);
  
  console.log("------------------\n");
  
  
  
  // Send arguments to functions using spread
  function multiplyNumbers(a, b, c) {
      const mult = a * b * c;
      console.log(`La multiplicación es ${mult}`);
    }
    
    let args = [2, 4, 6];
    console.log("Spread como argumentos de una función");
    console.log("\nEnviando 3 números como argumentos: ");
    multiplyNumbers(...args);
    
    
    
    args = [2, 4, 6, 8, 10];
    
    console.log("\nEnviando 5 números como argumentos");
    multiplyNumbers(...args);
    