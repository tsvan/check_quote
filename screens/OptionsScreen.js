import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function OptionsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Options</Text>
            <View style={styles.button}>
                <Button
                    title="Назад"
                    onPress={() => navigation.navigate('Start')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '50%',
        alignContent:'center',
        margin: 10
    }
});
