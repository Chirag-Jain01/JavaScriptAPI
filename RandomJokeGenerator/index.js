const setup = document.querySelector(".setup")
const delivery = document.querySelector(".delivery")
const getJokes = document.querySelector(".getJokes")

const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';


async function fetchJokes(){
    try {
        getJokes.addEventListener("click",async ()=>{
        const response = await fetch(url)
        const data = await response.json()
        if(data.setup==undefined && data.delivery==undefined){
            console.log("Server Error");
        }else{
            setup.innerText = data.setup
            delivery.innerText = data.delivery
        }  
        })
}
catch(error){
    console.log(error);
}
}


fetchJokes()