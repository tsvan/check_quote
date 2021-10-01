import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Quote from '../components/quote';
import {getRandomQuote} from "../data/DataService";


export default function QuoteScreen({ navigation, route }) {
  const [currentQuote, setCurrentQuote] = React.useState(null);
  const [answered, setAnswered] = React.useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(null);


  React.useEffect(() => {
    console.log('use effect quotes screen');
    nextQuote()
  }, []);

  function pressAnswer(answer) {
    console.log(answer === currentQuote.is_correct ? 'верно' : 'неверно')
    setIsAnswerCorrect(answer === currentQuote.is_correct)
    setAnswered(true)
  }

  function nextQuote() {
    let next = getRandomQuote();
      setCurrentQuote(next);
      setAnswered(false)
      console.log('next quote',next );
  }

  function generateAnswerText(quote){
    let answer = isAnswerCorrect ? 'верно' : 'неверно';
    answer += ' .' + (quote.hasOwnProperty('real_author') ? 'Настоящий автор:'+ quote.real_author : '')
    return answer;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonBack}>
        <Button
          title="Назад"
          onPress={() => navigation.navigate('Start')}
        />
      </View>

      {
        (!answered) ? (
          <View style={styles.container}>
            <Quote quote={currentQuote} />

            <View style={styles.buttonsContainer}>
              <View style={styles.button}>
                <Button
                  style={styles.button}
                  title="Да"
                  onPress={() => pressAnswer(true)}
                />
              </View>
              <View style={styles.button}>
                <Button
                  style={styles.button}
                  title="Нет"
                  onPress={() => pressAnswer(false)}
                />
              </View>
            </View>
          </View>

        ) : (
          <View style={styles.container}>
            <Text>Ответ: {generateAnswerText(currentQuote)}</Text>
            <View style={styles.button}>
                <Button
                  style={styles.button}
                  title="Далее"
                  onPress={() => nextQuote()}
                />
              </View>
          </View>
        )
      }
      <View>
        <Text>Footer</Text>
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
    margin:20
  },
  button: {
    width: '40%',
    alignContent: 'center',
    margin: 10
  },
  buttonBack: {
    width: '40%',
    alignContent: 'center',
    margin: 10,
    marginTop: 40
  },
  buttonsContainer: {
    flexDirection: 'row'
  }
});
