// https://hp-api.herokuapp.com/


let contentContainer = document.getElementById('container');
let inputBtn = document.getElementById('input-btn');
let selectedHouse = document.getElementById('houses');
let houseBtn = document.getElementById('house-btn');
let extraContainer = document.getElementById('extra-container');

inputBtn.addEventListener('click', async function(){
    
    try {
        let response = await fetch('http://hp-api.herokuapp.com/api/characters')
        let data = await response.json();
        console.log(data);
        console.log(data[0].name);
        
        for (let i = 0; i < 33; i++){
            console.log(i);
            contentContainer.innerHTML += `
            <section> 
            <h2>${data[i].name} </h2>
            <p>(${data[i].house})</p>
            <img class="profile-picture" src="${data[i].image}" alt="Picure of character"></img><br>
            <a href ='#'>Click here to se info of the character</a>
            </section>
            `;
            
        }       
    } catch (error) {
        console.log('error');
    }
    
});
    houseBtn.addEventListener('click', async function(){
        let houseSearch = document.getElementById('house-search').value;
        
        try{
            
            let response = await fetch('http://hp-api.herokuapp.com/api/characters/house/' 
            + houseSearch)
            let data = await response.json();
            console.log(data);
            
            for (let i = 0; i < 33; i++){
                
                extraContainer.innerHTML = `
                <h1>${data[i].house}</h1>
                `;
                
                
    contentContainer.innerHTML += `
            <section> 
            <h2>${data[i].name} </h2>
            <p>(${data[i].house})</p>
            <img class="profile-picture" src="${data[i].image}" alt="Picure of character"></img><br>
            <a>Click here to se info of the character</a>
            </section>
            `;
        }
    }catch(error){
        console.log(error);
    }
});
