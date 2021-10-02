import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Quote from '../components/quote';
import {getRandomQuote} from "../data/DataService";


export default function QuoteScreen({ navigation, route }) {
  const [currentQuote, setCurrentQuote] = React.useState(null);
  const [answered, setAnswered] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [isAnswerCorrect, setIsAnswerCorrect] = React.useState(null);


  React.useEffect(() => {
    console.log('use effect quotes screen');
    nextQuote()
  }, []);

  function pressAnswer(answer) {
    console.log(answer === currentQuote.is_correct ? 'верно' : 'неверно')
    setIsAnswerCorrect(answer === currentQuote.is_correct)
    setAnswered(true)
    if(answer === currentQuote.is_correct) {
      setScore(score+1)
    } else {
      setScore(0)
    }
  }

  function nextQuote() {
    let next = getRandomQuote();
      setCurrentQuote(next);
      setAnswered(false)
      console.log('next quote',next );
  }

  function realAuthorText(quote){
    let str = '';
    str = (quote.hasOwnProperty('real_author') ? 'Настоящий автор: '+ quote.real_author : '')
    return str;
  }

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.buttonBack}>
          <Button
            title="Назад"
            onPress={() => navigation.navigate('Start')}
          />
        </View>
        <View style={styles.score}>
          <Text>Счет: {score}</Text>
        </View>
      </View>

      {
        (!answered) ? (
          <View style={styles.container}>
            <Quote quote={currentQuote} />

            <View style={styles.answerButtons}>
              <View style={styles.buttonAnswer}>
                <Button
                  title="Есть такая цитата"
                  onPress={() => pressAnswer(true)}
                />
              </View>
              <View style={styles.buttonAnswer}>
                <Button
                  title="Нет такой цитаты"
                  onPress={() => pressAnswer(false)}
                />
              </View>
            </View>
          </View>

        ) : (
          <TouchableOpacity  onPress={() => nextQuote()} style={styles.answerResult}>
            {
              isAnswerCorrect ? (
                  <View style={styles.rightAnswer}>
                    <Text style={{color:'#1e750a', fontSize:18}}>Верно</Text>
                  </View>
              ) : (
                  <View style={styles.rightAnswer}>
                    <Text style={{color:'#e0196c', fontSize:18}}>Неверно</Text>
                  </View>
              )
            }
            <Text style={{textAlign:'center'}}>{realAuthorText(currentQuote)}</Text>

          </TouchableOpacity>
        )
      }
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin:5
  },
  button: {
    width: '40%',
    alignContent: 'center',
    margin: 10
  },
  buttonAnswer: {
    alignContent: 'center',
    width: '50%',
    padding:5
  },
  answerResult: {
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    margin:5
  },
  buttonBack: {
    alignContent: 'center',
    padding: 5,
    width: '50%',
  },
  score: {
    alignContent: 'center',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  answerButtons: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop:60,
    width:'100%'
  },
  rightAnswer: {
    width:'50%',
    margin:5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
