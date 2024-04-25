function generateGreetingFunction(timeOfDay) {
    return function (name) {
      return `Good ${timeOfDay}, ${name}!`;
    };
  }
  
  const greetmorning = generateGreetingFunction("morning");
  const greetafter = generateGreetingFunction("after");
  const greatnigth = generateGreetingFunction("nigth");
  
  const person1 = "Josue";
  const person2 = "Carlos";
  const person3 = "Juana";

  console.log(greetmorning(person1)); 
  console.log(greetafter(person2)); 
  console.log(greatnigth(person3)); 

  