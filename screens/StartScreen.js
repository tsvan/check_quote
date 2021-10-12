import React from 'react';
import { StyleSheet, Text, View, Button,BackHandler, TextInput } from 'react-native';

export default function StartScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:18, margin: 5}}>Есть ли такая цитата?</Text>
            <View style={styles.button}>
                <Button
                    title="Начать"
                    onPress={() => navigation.navigate('Quote')}
                />
            </View>
            <View style={styles.button} >
                <Button
                    title="Добавить цитату"
                    onPress={() => navigation.navigate('AddQuote')}
                />
            </View>

            <View style={styles.button} >
                <Button
                    title="Выход"
                    onPress={() => BackHandler.exitApp()}
                />
            </View>
        
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
    }
});
