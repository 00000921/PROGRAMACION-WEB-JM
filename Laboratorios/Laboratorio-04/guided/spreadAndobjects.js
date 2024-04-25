
// Objects to use
const firstObject = {
    name: "Linus Torvalds",
    birthday: "28/12/1969",
    nationality: "Finnish",
    age: 53,
    creatorOf: [
      {
        technology: "Linux Kernel",
        description: "Open-source Unix-like operating system core",
      },
      { technology: "Git", description: "Distributed version control system" },
    ],
  };
  
  const secondObject = {
    occupation: "Software Engineer",
    eduactionLevel: "Master's degree in Computer Science",
    university: "University of Helsinki",
    hobbies: ["Soccer", "VideoGames", "Guitar", "Math"],
  };
  
  console.log("---- OBJECTS ---- \n");
  console.log(firstObject, "\n");
  console.log(secondObject);
  console.log("\n------------------\n");
  
  const objectClone = firstObject;
  // Clone an object
  const objectClon = { ...firstObject };
  
  // Modify a property of firstObject
  firstObject.name = "Linus Benedict Torvalds";
  console.log("-- CLONE OBJECTS --\n");
  console.log("Clone:");
  console.log(objectClone);
  console.log("\nModified object:");
  console.log(firstObject);
  console.log("\n------------------\n");
  
  // Concat and add new properties
  
  const linusTorvalds = {
    ...firstObject,
    ...secondObject,
    favoriteColor: "Blue",
    height: 177,
  };
  console.log("-- Concat objects and properties --\n");
  console.log("Linus Torvalds Object: ");
  console.log(linusTorvalds);
  console.log("\n------------------\n");
  