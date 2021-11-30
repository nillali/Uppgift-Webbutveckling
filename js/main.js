// https://hp-api.herokuapp.com/
// insåg en bit in på arbetet att många av karaktärerna saknade en del innehåll - hoppas det är ok för uppgiften ändå..


let contentContainer = document.getElementById('container');
let inputBtn = document.getElementById('input-btn');
let selectedHouse = document.getElementById('houses');
let houseBtn = document.getElementById('house-btn');
let headlineContainer = document.getElementById('headline-container');

inputBtn.addEventListener('click', async function(){
    
    try {
        let response = await fetch('https://hp-api.herokuapp.com/api/characters')
        let data = await response.json();
        console.log(data);
        console.log(data[0].name);

        
        headlineContainer.innerHTML = "";
        contentContainer.innerHTML = "";
        
        
        for (let i = 0; i < 33; i++){ // Satte loopen medvetet till 33 för utseendets skull. Fanns inte tillräckligt med innehåll i karaktärena.
            console.log(i);
            contentContainer.innerHTML += `
        <section> 
            <h2>${data[i].name} </h2>
            <p>Actor: ${data[i].actor}</p>
            <img class="profile-picture" src="${data[i].image}" alt="Picure of character"></img>
            <p>House: ${data[i].house}</p>
            <p>Ancestry: ${data[i].ancestry}</p>
            <p>Patronus: ${data[i].patronus}</p>
            <p>Gender: ${data[i].gender}</p>
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
            
            let response = await fetch('https://hp-api.herokuapp.com/api/characters/house/' + houseSearch)
            let data = await response.json();
            console.log(data);

        
            contentContainer.innerHTML = "";
            
            for (let i = 0; i < data.length; i++){
                
                headlineContainer.innerHTML = `
                <h1>${data[i].house}</h1>
                `;
                contentContainer.innerHTML += `
                <section> 
                <h2>${data[i].name} </h2>
                <p>Actor: ${data[i].actor}</p>
                <img class="profile-picture" src="${data[i].image}" alt="Picure of character"></img>
                <p>House: ${data[i].house}</p>
                <p>Ancestry: ${data[i].ancestry}</p>
                <p>Patronus: ${data[i].patronus}</p>
                <p>Gender: ${data[i].gender}</p>
                </section>
                `;
                
            }
            
        }catch(error){
            console.log(error);
            extraContainer.innerHTML = "Något gick fel!";
        }
        
});




