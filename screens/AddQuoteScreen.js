import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {addQuoteAction} from "../actions/QuoteAction";

export default function AddQuoteScreen({ navigation }) {

    const [quote, setQuote] = React.useState('');
    const [author, setAuthor] = React.useState('');
    const [isCorrect, setIsCorrect] = React.useState('1');
    function addQuote() {

        if(quote.length < 10) {
            Alert.alert(
                "Ошибка",
                "Цитата должна быть больше 10 символов",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
            return;
        }

        let data = new FormData();
        data.append("author", author);
        data.append("text", quote);
        data.append("is_correct", isCorrect);
        addQuoteAction(data);
        setQuote('')
        setAuthor('')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.buttonBack}>
                    <Text>Назад</Text>
                </TouchableOpacity>
                <View style={styles.score}>
                </View>
            </View>
            <View style={styles.inputContainer}>
                <Text  style={{ marginTop:5, marginBottom:5 }}>Автор цитаты:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setAuthor}
                    value={author}
                    placeholder={'Конфуций'}

                />
                <Text style={{ marginTop:5, marginBottom:5 }}>Текст цитаты(<Text style={{color:'red'}}>*</Text>):</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setQuote}
                    value={quote}
                    placeholder={'Не тот велик, кто никогда не падал, а тот велик — кто падал и вставал!'}
                    editable
                    multiline
                    numberOfLines={6}
                />

                <Text style={{ marginTop:5, marginBottom:5 }}>Существует ли такая цитата?(<Text style={{color:'red'}}>*</Text>):</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={isCorrect}
                        style={{ width:'100%'}}
                        onValueChange={(itemValue, itemIndex) => setIsCorrect(itemValue)}
                    >
                        <Picker.Item style={{ fontSize:18}} label="Есть такая цитата" value="1" />
                        <Picker.Item style={{ fontSize:18}}  label="Нет такой цитаты" value="0" />
                    </Picker>
                </View>
                <TouchableOpacity  onPress={() => addQuote()} style={styles.buttonAdd}>
                    <Text style={{color:'#e7d9c4', fontSize: 18}} >Отправить</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:'100%',
        backgroundColor: '#e5decc',
        padding:5
    },
    button: {
        width: '50%',
        alignContent:'center',
        margin: 10
    },
    inputContainer: {
        flex: 1,

        width: '100%',
        alignContent:'center',
        padding: 10
    },
    input: {
        borderWidth: 1,
        borderRadius:3,
        paddingHorizontal: 5,
        paddingVertical:5,
        fontSize:18
    },
    pickerContainer: {
        padding: 5,
        width:'100%',
        borderWidth: 1,
        borderRadius:3,
    },
    header: {
        flexDirection: 'row',
        marginTop:60,
        width:'100%',
        padding:5
    },
    buttonBack: {
        alignContent: 'center',
        padding: 5,
        width: '50%',
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
        flex:1,
        borderWidth:1,
        borderRadius:5,
        borderColor: 'rgba(63,62,62,0.5)',
    },
    score: {
        alignContent: 'center',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonAdd: {
        marginTop:10,
        marginBottom:10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:1,
        borderRadius:5,
        borderColor: 'rgba(158, 150, 150, .5)',
        backgroundColor: '#5b4108',
        shadowColor: '#5b4108',
        shadowOpacity: 0.8,
        shadowRadius: 7,
        elevation: 3,
        shadowOffset: {
            height: 1,
            width: 1
        },
        padding:15
    },
});
