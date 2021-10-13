import React from 'react';
import {StyleSheet, Text, View, Button, BackHandler, TextInput, TouchableOpacity, Image} from 'react-native';
import * as Font from "expo-font";

export default function StartScreen({ navigation }) {
    return (

        <View style={styles.container}>

            <Image
                style={styles.tinyLogo}
                source={require('../assets/headerImg.png')}
            />
            <TouchableOpacity  onPress={() => navigation.navigate('Quote')} style={styles.buttonAdd}>
                <Text style={{color:'#e7d9c4', fontSize: 18}} >Начать</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => navigation.navigate('AddQuote')} style={styles.buttonAdd}>
                <Text style={{color:'#e7d9c4', fontSize: 18}} >Добавить цитату</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => BackHandler.exitApp()} style={styles.buttonAdd}>
                <Text style={{color:'#e7d9c4', fontSize: 18}} >Выход</Text>
            </TouchableOpacity>

        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#e5decc',
    },
    button: {
        width: '50%',
        alignContent:'center',
        margin: 10
    },
    buttonAdd: {
        marginTop:10,
        marginBottom:10,
        width: '70%',
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
    tinyLogo: {
        width: 60,
        height: 60,
        margin:10
    },
});
