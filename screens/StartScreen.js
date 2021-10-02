import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function StartScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{fontSize:16, margin: 5}}>Есть ли такая цитата?</Text>
            <View style={styles.button}>
                <Button
                    title="Начать"
                    onPress={() => navigation.navigate('Quote')}
                />
            </View>
            <View style={styles.button} >
                <Button
                    title="Настройки"
                    onPress={() => navigation.navigate('Options')}
                />
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1235',
        color:'red',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    button: {
        width: '50%',
        alignContent:'center',
        margin: 10
    }
});
