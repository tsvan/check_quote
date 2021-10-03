import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, ImageBackground} from 'react-native';
import Quote from '../components/quote';
import {getRandomQuote, getRandomCorrectText, getRandomInCorrectText} from "../data/DataService";


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
    // setTimeout(()=>{nextQuote()}, 2000);
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
        <TouchableOpacity onPress={() => navigation.navigate('Start')} style={styles.buttonBack}>
          <Text>Назад</Text>
        </TouchableOpacity>
        <View style={styles.score}>
          <Text><Text style={{fontWeight:'bold'}}>Счет:</Text> {score}</Text>
        </View>
      </View>

      {
        (!answered) ? (

            <View style={styles.quoteContainer}>
              <ImageBackground source={require('../assets/img.png')} resizeMode={"cover"} style={styles.image}>

                <Quote quote={currentQuote} />
              </ImageBackground>

            <View style={styles.answerButtons}>
              <TouchableOpacity  onPress={() => pressAnswer(true)} style={styles.buttonCorrect}>
                <Text style={{color:'white'}} >Есть такая цитата</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => pressAnswer(false)} style={styles.buttonInCorrect}>
                <Text style={{color:'white'}}>Нет такой цитаты</Text>
              </TouchableOpacity>
            </View>
          </View>

        ) : (
          <TouchableOpacity  onPress={() => nextQuote()} style={styles.answerResult}>
            {
              isAnswerCorrect ? (
                  <View style={styles.rightAnswer}>
                    <Text style={{color:'#1e750a', fontSize:18}}>{getRandomCorrectText()}</Text>
                  </View>
              ) : (
                  <View style={styles.rightAnswer}>
                    <Text style={{color:'#e0196c', fontSize:18,}}>{getRandomInCorrectText()}</Text>
                  </View>
              )
            }
            <Text style={{textAlign:'center', fontStyle: 'italic'}}>{realAuthorText(currentQuote)}</Text>

          </TouchableOpacity>
        )
      }
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
  quoteContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    padding:5,
  },

  button: {
    width: '40%',
    alignContent: 'center',
    margin: 10
  },
  buttonInCorrect: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    width: '50%',
    borderWidth:1,
    borderRadius:5,
    borderColor: 'rgba(158, 150, 150, .5)',
    backgroundColor: '#d55757',
    shadowColor: "#dc1f1f",
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1
    },
    padding:15
  },

  buttonCorrect: {
    alignContent: 'center',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    borderWidth:1,
    borderRadius:5,
    borderColor: 'rgba(158, 150, 150, .5)',
    backgroundColor: '#50ab45',
    shadowColor: "#41a21a",
    shadowOpacity: 0.8,
    shadowRadius: 7,
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1
    },
    padding:15
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
  answerButtons: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 20,
    marginBottom:30,
  },
  header: {
    flexDirection: 'row',
    marginTop:60,
    width:'100%',
    padding:5
  },
  rightAnswer: {
    width:'50%',
    margin:5,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign:'center',
    alignContent: 'center',
  },
  image: {
    flex: 1,
    width:'100%',
    borderColor: 'rgba(158, 150, 150, .5)',
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden'
  },
});
