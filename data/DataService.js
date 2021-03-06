import authors_data from "./authors_data";
import quotes_data from "./quotes_data";

const RANDOM_WEIGHT = 4;

function getRandomAuthor() {
    return authors_data[Math.floor((Math.random() * authors_data.length))].name;
}

function getRandAuthorNotEquals(author) {

    let newAuthor = authors_data[Math.floor((Math.random() * authors_data.length))];
    while (newAuthor === author) {
        newAuthor = authors_data[Math.floor((Math.random() * authors_data.length))];
    }
    return newAuthor.name;
}

export function formatQuote(quote) {
    let rand = Math.floor(Math.random() * RANDOM_WEIGHT);
    if (quote.is_correct) {
        if (rand === 0) {
            quote.real_author = quote.author;
            quote.author = getRandAuthorNotEquals(quote.author);
            quote.is_correct = false;
        }
    } else {
        quote.author = getRandomAuthor();
    }

    return quote;
}

export function getRandomQuotes() {
    let quotes = quotes_data.sort(() => Math.random() - Math.random()).slice(0, 20);
    quotes.map(function (quote) {
        return formatQuote(quote)
    })

    return quotes;
}

export function getRandomCorrectText() {
    let answers = [
        'Абсолютно верно!',
        'Правильный Ответ!',
        'Точно!',
        'Вы правы!',
    ]
    let rand = Math.floor(Math.random() * 3);
    return answers[rand];
}

export function getRandomInCorrectText() {
    let answers = [
        'Неверно.',
        'Ответ неверный.',
        'Неправильный ответ.',
        'Вы ошиблись.',
    ]
    let rand = Math.floor(Math.random() * 3);
    return answers[rand];
}
