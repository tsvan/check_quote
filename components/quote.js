import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Quote(props) {
  const [quote, setquote] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text> Верна ли цитата ?</Text>
      {props.quote && 
        <View>

          <View style={styles.quoteContainer}>
            <Text>{props.quote.text}</Text>
          </View>

          <View style={styles.authorContainer}>
            <Text>{props.quote.author}</Text>
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
