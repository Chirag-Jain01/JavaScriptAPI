document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".input");
    const meaningElement = document.querySelector(".meaning");
    const exampleElement = document.querySelector(".example");
    const wordElement = document.querySelector(".word");
    const phoneticsElement = document.querySelector(".phonetics");
    const button = document.querySelector(".search");

    async function getMeaning() {
        try {
            const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
            const response = await fetch(url);
            const data = await response.json();
            const wordMeaning = data[0].meanings[0].definitions[0].definition;
            const wordExample = data[0].meanings[0].definitions[0].example;
            const phoneticsElement = data[0].phonetic;
            
            meaningElement.innerText = "Meaning : " +wordMeaning; 
            exampleElement.innerText = "Example : " + wordExample; 
            wordElement.innerText = input.value
            phoneticsElement.innerText = phoneticsElement
            console.log(input.value);
        } catch (e) {
            console.log(e);
        }
    }
    button.addEventListener("click", () => {
        getMeaning();
    });
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            getMeaning();
        }
    });
});