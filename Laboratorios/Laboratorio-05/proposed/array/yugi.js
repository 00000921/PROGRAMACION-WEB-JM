const yugiohCards = [
    "Dark Magician",
    "Blue-Eyes White Dragon",
    "Exodia the Forbidden One",
    "Cyber Dragon",
    "Elemental HERO Neos",
    "Chaos Dark Magician",
    "Dark Magician Girl",
    "Gravekeeper's Spy",
    "Blue-Eyes Alternative White Dragon",
    "Meteor Dragon",
    "Dragunity - Ascalon",
    "Harpie Lady",
    "Winged Kuriboh",
    "Gamma the Magnet Warrior",
    "Chaos MAX Dragon",
    "Elemental HERO Burstinatrix",
    "The Winged Dragon of Ra",
    "Spirit of Flames",
    "Black Luster Soldier - Envoy of the Beginning",
    "Celtic Guardian",
    "Chaos Sorcerer",
    "Apocalypse Rider - Lord of Despair",
    "Yubel - The Ultimate Nightmare",
    "Terror King Archfiend",
    "Wolf in Sheep's Clothing",
    "Darklord Morningstar",
    "Exiled Force",
    "Obelisk the Tormentor",
    "Red-Eyes Black Dragon",
    "Elemental HERO Neos",
    "Stardust Dragon"
  ];

//1
yugiohCards.push("Red-Eyes Black Dragon");
console.log(yugiohCards);

//2
yugiohCards.pop();
console.log(yugiohCards);

//3
yugiohCards.unshift("Black Luster Soldier - Envoy of the Beginning");
console.log(yugiohCards);

//4
yugiohCards.shift();
console.log(yugiohCards);

//5
const extraCards = ["Dark Magician Girl", "Elemental HERO Neos", "Red Dragon Archfiend"];
console.log(extraCards);

//6
const todasLasCartas = yugiohCards.concat(extraCards);
console.log(todasLasCartas);

//7
todasLasCartas.splice(-5);
console.log(todasLasCartas);

//8
todasLasCartas.reverse();
console.log(todasLasCartas);

//9
const tiene25Cartas = todasLasCartas.length === 25;

if (tiene25Cartas) {
  console.log("El array contiene exactamente 25 cartas.");
} else {
  console.log("El array no contiene exactamente 25 cartas.");
}

//10
const cadenaDeCartas = todasLasCartas.join('\n');
console.log(cadenaDeCartas);

//adicional
const legendaryCards = yugiohCards.filter(card => 
    card === "Exodia the Forbidden One" ||
    card === "Dark Magician" ||
    card === "Blue-Eyes White Dragon" ||
    card === "Red-Eyes Black Dragon"
  );