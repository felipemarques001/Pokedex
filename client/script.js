async function fetchPokemon(){
    for (let num = 1; num <= 150; num++) {
        try {
            const response = await fetch(`http://localhost:3000/pokemon/${num}`)
            let data = await response.json()
            showPokemon(data, num)
        } catch (error) {
            console.log(error)
        }  
    }
}

fetchPokemon()

function showPokemon(data, num){
    let ul = document.getElementById('ul');
    if(num < 10){
        ul.innerHTML += `<li class="${data[1]}" onclick="showPokemonDescription(this)">
        <section>
            <section class="description">
                <h2 class="name">${data[0]}</h2>
                <p id="${data[1]}">#0${num}</p>
                <p id="${data[1]}">${data[1]}</p>
            </section>
            <section class="status">
                <h4>Abilities</h4>
                <p>1°: ${data[2]}</p>
                <h4>Status</h4>
                <p>HP: ${data[3]}</p>
                <p>Attack: ${data[4]}</p>
                <p>Defense: ${data[5]}</p>
                <p>Speed: ${data[6]}</p>
            </section>
        </section>
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${num}.svg" alt="">
    </li>` 
    }else{
        ul.innerHTML += `<li class="${data[1]}" onclick="showPokemonDescription(this)">
        <section>
            <section class="description">
                <h2 class="name">${data[0]}</h2>
                <p id="${data[1]}">#${num}</p>
                <p id="${data[1]}">${data[1]}</p>
            </section>
            <section class="status">
                <h4>Abilities</h4>
                <p>1°: ${data[2]}</p>
                <h4>Status</h4>
                <p>HP: ${data[3]}</p>
                <p>Attack: ${data[4]}</p>
                <p>Defense: ${data[5]}</p>
                <p>Speed: ${data[6]}</p>
            </section>
        </section>
        
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${num}.svg" alt="">
    </li>`  
    }
}

function showPokemonDescription(th){
    th.classList.toggle('show');
}


