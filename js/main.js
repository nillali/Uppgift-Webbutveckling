// https://hp-api.herokuapp.com/


let contentContainer = document.getElementById('container');
let inputBtn = document.getElementById('input-btn');
let selectedHouse = document.getElementById('houses');
let houseBtn = document.getElementById('house-btn');
let houseHouse = document.getElementsByClassName('houses1');

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
            <a href ='#'>Click here to se info of the character</a>
            </section>
            `;
            
     }       
} catch (error) {
    console.log('error');
}
});

houseBtn.addEventListener('click', async function(){
try{
    let response = await fetch('http://hp-api.herokuapp.com/api/characters/house/slytherin' + houseHouse.value)
    let data = await response.json();
    console.log(data);

    contentContainer.innerHTML = `
    <h1>${houseHouse}</h1>
    `;

for (let i = 0; i < data.length; i++){
    contentContainer.innerHTML += `
            <section> 
            <h2>${data[i].name} </h2>
            <a>Click here to se info of the character</a>
            </section>
            `;
        }
    }catch(error){
        console.log(error);
    }
});