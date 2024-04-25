function getDataFromServer() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = true;
  
        if (success) {
          const studentData = {
            id: "00000921",
            name: "Josue",
            career: "Ingeniería Informática",
            age: 21,
          };
          resolve(studentData);
        } else {
          reject("Error al cargar los datos del estudiante");
        }
      }, 3000);
    });
  }
  
  console.log("Cargando datos del estudiante...");
  
  getDataFromServer()
    .then((data) => {
      console.log("Data successfully obtained:");
      console.log("Id:", data.id);
      console.log("Name:", data.name);
      console.log("Career:", data.career);
      console.log("Age:", data.age);
    })
    .catch((error) => {
      console.error("Error al cargar los datos del estudiante:", error);
    });
  