let quoteNumber = document.querySelector(".quote-number .number");
let quote = document.querySelector(".quote");


    fetch("https://api.adviceslip.com/advice")
        .then((data) => {
            return data.json()
        }).then((data) => {
            let name = data.slip
            quoteNumber.innerText = name.id
            quote.innerText = name.advice
        })
