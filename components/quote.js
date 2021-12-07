import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Quote(props) {

    return (
        <View style={styles.container}>
            {
                props.quote &&
                <View>
                    <View style={styles.quoteContainer}>
                        <Text style={{fontSize: 26, fontFamily: 'Caveat-Regular'}}>{'\t'}{props.quote.text}</Text>
                    </View>
                    <View style={styles.authorContainer}>
                        <Text style={{
                            fontSize: 22,
                            fontFamily: 'Caveat-Regular',
                            padding: 5
                        }}>— {props.quote.author} </Text>
                    </View>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },
    quoteContainer: {
        alignContent: 'center',
        width: '95%',
        margin: 5,
    },
    authorContainer: {
        alignItems: 'flex-end',
        margin: 5
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
});
