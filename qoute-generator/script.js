const quoteContainer = document.querySelector('#quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.querySelector('.quote-author');
const newQuoteBtn = document.getElementById('new-quote');
const tweetQuoteBtn = document.getElementById('twitter');
const loader = document.querySelector('.loader');

// Get Quote from API
async function getQuote() {
    loading();
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        // const response = await fetch(proxyUrl + apiUrl, {
        //     headers: {"X-Requested-With": "XMLHttpRequest"}
        // });

        const response = await fetch(proxyUrl + apiUrl);

        const data = await response.json();
        if (data.quoteText.length > 120) {
            quoteText.classList.add('long-quote');
        } else {
            quoteText.classList.remove('long-quote');
        }
        quoteText.innerText = data.quoteText;
        quoteAuthor.innerText = data.quoteAuthor ?? "Unknown";
        // Stop loader, show quote container
        done();
    } catch (error) {
        //getQuote();
        console.log('Ooops, and error in fetching!, ', error);
    }
}

function tweetQuote() {
    const text = quoteText.innerText;
    const author = quoteAuthor.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text} - ${author}`;
    window.open(twitterUrl, '_blank');
}

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function done() {
    if (!loader.hidden) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

newQuoteBtn.addEventListener('click', getQuote);
tweetQuoteBtn.addEventListener('click', tweetQuote);

// On Load
getQuote();
