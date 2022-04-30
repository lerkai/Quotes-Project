const quotes = [
    {
        name:'A1',
        quote:'Q1'
    },
    {
        name:'A2',
        quote:'Q2'
    },
    {
        name:'A3',
        quote:'Q3'
    },
    {
        name:'A4',
        quote:'Q4'
    },
    {
        name:'A5',
        quote:'Q5'
    },
    {
        name:'A6',
        quote:'Q6'
    },
    {
        name:'A7',
        quote:'Q7'
    },
    {
        name:'A8',
        quote:'Q8'
    },
];

const quoteBtn = document.querySelector('#quoteBtn');
const quote = document.querySelector('#quote');
const quoteAuthor = document.querySelector('#quoteAuthor');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote() {
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
