const mainScreen = document.querySelector('.main-screen');
const mainScreenError = document.querySelector('.main-screen-error');
const pokeFrontImage = document.querySelector('.poke-front-image');
const pokeErrorImage = document.querySelector('.poke-error-image');
const pokeBackImage = document.querySelector('.poke-back-image');
const pokeName = document.querySelector('.pokename');
const pokeTypeOne = document.querySelector('.poke-type-one');
const pokeTypeTwo = document.querySelector('.poke-type-two');
const pokeWeight = document.querySelector('.poke-weight');
const pokeHeight = document.querySelector('.poke-height');


const fetchPokemon = (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
     fetch(url).then((res) => {
        
         //console.log(res);"
         if(res.status!="200"){
             console.log(res);
             errorPrint("./no-pikachu.gif")
             
         }else{
            return res.json();
         }
         
     }).then((data =>{
         console.log(data);
         let pokimgf = data.sprites.front_default;
         let pokimgb = data.sprites.back_default;
         let pokename = data.name;
         console.log(pokimgf);
         console.log(pokimgb);
         console.log(pokename);
         mainScreenError.classList.add('hide');
         resetType();
         pokeName.textContent=pokename.toUpperCase();
         pokeFrontImage.src=pokimgf;
         pokeBackImage.src=pokimgb;
         const pokeTypes  = data['types'];
         if(pokeTypes[0] && pokeTypes[1]) {
            console.log("::::::::verdadero, verdadero::::::: ");
            pokeTypeOne.textContent = pokeTypes[0]['type']['name'].toUpperCase();
            pokeTypeTwo.classList.remove('hide');
            pokeTypeTwo.textContent = pokeTypes[1]['type']['name'].toUpperCase();
         } else  if(pokeTypes[0] && pokeTypes[1]==null) { 
            console.log("::::::::verdadero, Falso::::::: ");
            pokeTypeOne.textContent = pokeTypes[0]['type']['name'].toUpperCase();
            pokeTypeTwo.classList.add('hide');
            pokeTypeTwo.textContent = '';
         }
         pokeWeight.textContent = data['weight'];
         pokeHeight.textContent = data['height'];

     }))
}

const errorPrint = (urlimg) =>{

    mainScreen.classList.add('hide');
    resetTypeError();
    console.log("entro a imprimir gif");
    pokeErrorImage.src=urlimg;  
    pokeWeight.textContent = ' ';
    pokeHeight.textContent = ' '; 
    
}

const btnpokemon = () =>{
    
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    fetchPokemon(pokeInput); 
}
const resetType = () => {
    mainScreen.classList.remove('hide');  
  }
const resetTypeError = () => {
    mainScreenError.classList.remove('hide');
  } 