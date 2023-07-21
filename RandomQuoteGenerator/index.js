const url = "https://api.api-ninjas.com/v1/quotes?";
const h1Element = document.querySelector(".quote")
const buttonElement = document.querySelector(".button")

async function getQuotes() {
    buttonElement.addEventListener("click", async()=>{
        try {
            const response = await fetch(url, {
                headers: {
                    'X-Api-Key': 'ouhWIgQrQk/qDXVaaH/vQA==bC7AwsHPqe7HTA3L',
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            h1Element.innerHTML = data[0].quote
        } catch (e) {
            console.log(e);
        }
    })
}

getQuotes();
