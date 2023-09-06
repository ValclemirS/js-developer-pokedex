/*evento de click do botão*/
pokemonList.addEventListener("click", (event) => {
    const clickedPokemon = event.target.closest(".pokemon");
    if (clickedPokemon) {
        
        const allPokemons = document.querySelectorAll(".pokemon");
        
        allPokemons.forEach((pokemon) => {
            pokemon.classList.remove("clicked");
        });

        
        clickedPokemon.classList.add("clicked");
    }
});
