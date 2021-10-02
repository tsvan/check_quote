import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Quote(props) {

  return (
    <View style={styles.container}>
      {props.quote &&
        <View>

          <View style={styles.quoteContainer}>
            <Text style={{fontSize:16}}>{'\t'}{props.quote.text}</Text>
          </View>

          <View style={styles.authorContainer}>
            <Text style={{fontStyle: 'italic', fontSize:16}}>— {props.quote.author}</Text>
          </View>

        </View>
      
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%'
  },
  quoteContainer: {
    alignContent: 'center',
    margin: 10
  },
  authorContainer: {
    alignItems: 'flex-end',
    margin: 10
  },
});
