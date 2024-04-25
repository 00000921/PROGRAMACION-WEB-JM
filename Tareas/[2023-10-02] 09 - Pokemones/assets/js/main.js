//declaracion de variables logicas
let pokemons = [];

//declaracion de variables visuales
let pokeForm = null;
let pokeParty = null;
const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

//bind views
const bindElements = () =>{
    pokeForm = document.querySelector("#pokemon-form");
    pokeParty = document.querySelector("#pokemon-party-section");
}

const setFormListener = () =>{
    pokeForm.addEventListener("submit", e =>{
        e.preventDefault();
        
        const data = new FormData(pokeForm);
        const _pokemon = {};
        let hasError = false;
        data.forEach((value, key) =>{
            if(!value)
            hasError = true;
            _pokemon[key] = value;
            //console.log(key + " value: " + value);
        })
        
        if(hasError){
            alert("Se encontraron errores");
            return;
        }
        pokemons.unshift(_pokemon);
        renderPokemons(pokemons);
        //pokeForm.reset();
    })

}

const createPokemonCard = (poke) => {
    const content = `
    <figure>
        <img src="${poke.sprite}" alt="Pokemon Sprite">
    </figure>
    
    <div class="info">
        <h4> ${poke.name} </h4>
        <p> # ${poke.index} </p>
        <p> Altura: ${poke.height} </p>
        <p> Peso: ${poke.weight} </p>
    </div>
    
    <div class="stats">
        <div class="stat">
            <p> HP: </p>
            <div class="bar">
                <div style = "width: ${(poke.hp/255)*100}%"></div>
            </div>
        </div>
      
      <div class="stat">
            <p> ATK: </p>
            <div class="bar">
            <div style = "width: ${(poke.atk/255)*100}%"></div>
            </div>
      </div>

      <div class="stat">
            <p> DEF: </p>
            <div class="bar">
            <div style = "width: ${(poke.def/255)*100}%"></div>
            </div>
      </div>

      <div class="stat">
            <p> SPA: </p>
            <div class="bar">
            <div style = "width: ${(poke.spa/255)*100}%"></div>
            </div>
      </div>

      <div class="stat">
            <p>SPD: </p>
            <div class="bar">
            <div style = "width: ${(poke.spd/255)*100}%"></div>
            </div>
      </div>
      
    </div>
    <button class = "delete-pokemon"> <i class="fa-solid fa-trash"></i> </button>
    `;

    const _article = document.createElement("article");
    _article.innerHTML = content;
    _article.dataset.index = poke.index;
    _article.style.backgroundColor = colours[poke.type_1];
    _article.querySelector(".delete-pokemon").addEventListener("click", ()=> {
        _article.innerHTML = "";
        pokeParty.removeChild(_article);
    })

    return _article;
}


const renderPokemons = () => {
    pokeParty.innerHTML = "<h3> Pokemon Party </h3>";
    pokemons.forEach(poke => {
        pokeParty.appendChild(createPokemonCard(poke));
    })
}


const Main = () => {
    bindElements();
    setFormListener();
    console.log(colours["normal"])
}

window.onload = Main;