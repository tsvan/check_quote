import axios from "axios";
import {getRandomQuotes} from '../data/DataService'
import {server} from "./conf";

export function get_random_quotes(quotesCallback) {
    axios.get(server+'quotes/random')
        .then(
            (response) => {
                console.log('response.data.');
                quotesCallback(response.data.quotes)
            }
        )
        .catch(
            (error) => {
                console.log('error');
                quotesCallback(getRandomQuotes())
            }
        );
}