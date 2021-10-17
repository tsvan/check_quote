import axios from "axios";
import {getRandomQuotes} from '../data/DataService'
import {server} from "../conf";
import {Alert} from "react-native";

export function getRandomQuotesAction(quotesCallback) {
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

export function addQuoteAction(data) {
    axios.post(server+'quotes/add', data)
        .then(
            (response) => {
                if(response.data.hasOwnProperty('error'))
                {
                    if(response.data.error === 'quote already exist' )
                    {
                        Alert.alert(
                            "Ошибка",
                            "Такая цитата уже добавлена",
                            [
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ]
                        );
                    } else {
                        Alert.alert(
                            "Ошибка",
                            "Не удалось отправить цитату",
                            [
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ]
                        );
                    }

                } else {
                    Alert.alert(
                        "Сообщение",
                        "Цитата была добавлена!",
                        [
                            { text: "OK", onPress: () => console.log("OK Pressed") }
                        ]
                    );
                }
            }
        )
        .catch(
            (error) => {
                console.log('error', error);
            }
        );
}