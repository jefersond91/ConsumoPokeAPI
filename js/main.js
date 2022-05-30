"use strict"

let form = document.querySelector("#search-pokemon")

document.addEventListener("DOMContentLoaded", () => fetchData ())
form.addEventListener("submit", event => buscarPokemon(event))

/*
        fetch( "url" )
        .then ( function( response){ // response es la respuesta que devuelve el servidor
                // codigo a realizar cuando se cumpla la promesa
        })
*/


function fetchData( pokemon="bulbasaur" ) {
        let url = `https://pokeapi.co/api/v2/pokemon/${ pokemon }`
        // fetch(url).then( response => console.log(response))
        fetch(url)
        .then( response => response.json( ) )
        .then( data =>{
                console.log( data )
                mostrarPokemon( data )
        })
}

function mostrarPokemon(  pokemonData ){
        let contenedor = document.getElementById( "pokemon-wrapper" )
        let img = contenedor.querySelector( "img" )
        let p = contenedor.querySelector( "p" )

        img.src = pokemonData.sprites.other.dream_world.front_default || pokemonData.sprites.front_default
        p.textContent = pokemonData.name
}

function buscarPokemon (event){
        let input = form.querySelector("input")
        let pokemonName = input.value.toLowerCase()

        // let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        // fetch(url).then( response => console.log(response))
        // fetch(url)
        // .then( response => response.json( ) )
        // .then( data =>{
        //         console.log( data )
        //         mostrarPokemon( data )
        // })
        fetchData( pokemonName )

        event.preventDefault()
}

function mostrarError(){
        let toast = document.getElementById("toast")
        toast.classList.toggle("escondido")

        setTimeout(() => toast.classList.toggle("escondido"),3000)
}