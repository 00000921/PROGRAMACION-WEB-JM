function simularpenal() {
    const randomDelay = Math.random() * 4000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomOutcome = Math.random();
            if (randomOutcome < 0.6) {
                resolve("¡Gol!");
            } else {
                reject("¡Afuera!");
            }
        }, randomDelay);
    });
}

const penalPromises = [];

for (let i = 1; i <= 4; i++) {
    penalPromises.push(simularpenal());
}

Promise.allSettled(penalPromises)
    .then((results) => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Tiro de penal ${index + 1}: ${result.value}`);
            } else {
                console.log(`Tiro de penal ${index + 1}: ${result.reason}`);
            }
        });
    })
    .catch((error) => {
        console.error("Hubo un error al ejecutar las promesas:", error);
    });
