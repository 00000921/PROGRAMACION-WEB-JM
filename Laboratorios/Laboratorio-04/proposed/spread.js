const user = {
    name: "Cristiano Ronaldo",
    age: 38,
    country: "Portugal",
  };
  
  const defaultSettings = {
    language: "en",
    notifications: true,
  };
  
  const userWithSettings = {
    ...user,
    ...defaultSettings,
  };
  
  console.log(userWithSettings);
  