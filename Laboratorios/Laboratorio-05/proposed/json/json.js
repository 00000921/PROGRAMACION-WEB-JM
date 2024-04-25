const linusTorvaldString = `{
    "name": "Linus Benedict Torvalds",
    "birthday": "28/12/1969",
    "nationality": "Finnish",
    "age": 53,
    "creatorOf": [
      {
        "technology": "Linux Kernel",
        "description": "Open-source Unix-like operating system core"
      },
      {
        "technology": "Git",
        "description": "Distributed version control system"
      }
    ],
    "occupation": "Software Engineer",
    "educationLevel": "Master's degree in Computer Science",
    "university": "University of Helsinki",
    "hobbies": ["Soccer", "VideoGames", "Guitar", "Math"],
    "favoriteColor": "Blue",
    "height": 177
  }`;

const linusTorvalds = JSON.parse(linusTorvaldString);

//elementos del objeto
console.log("Fecha de nacimiento:", linusTorvalds.birthday);
console.log("Nacionalidad:", linusTorvalds.nationality);
console.log("Nombre de la primera tecnología:", linusTorvalds.creatorOf[0].technology);
console.log("Descripción de la segunda tecnología:", linusTorvalds.creatorOf[1].description);

//nombres de más de 5 caracteres
const linusTorvaldsHobbies = linusTorvalds.hobbies.filter(hobby => hobby.length > 5);

//elementos del arrrelo hob
console.log("Hobbies con nombres de más de 5 caracteres:", linusTorvaldsHobbies);



//explicación de por que el bloque de codigo da error:

//console.log(linusTorvalds.creatorOf[2].technology ?? "Not found");

/*
el bloque de código utiliza el operador null (nullish coalescing operator) "??".

La expresión linusTorvalds.creatorOf[2].technology intenta acceder al tercer elemento, que no existe en el objeto linusTorvalds; por lo tanto, esto dará como resultado un valor undefined.
El operador ?? verifica si el valor de la izquierda (linusTorvalds.creatorOf[2].technology) es nulo o indefinido, y si es así, devuelve el valor de la derecha ("Not found").
Dado que en este caso linusTorvalds.creatorOf[2].technology es undefined, el operador ?? devuelve "Not found".
*/

