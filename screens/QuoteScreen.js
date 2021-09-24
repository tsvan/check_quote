import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Quote from '../components/quote';
let quotes = [
  { id: 1, author: 'Альберт Эйнштейн', quote: 'Все мы гении. Но если вы будете судить рыбу по её способности взбираться на дерево, она проживёт всю жизнь, считая себя дурой.', info: '' },
  { id: 2, author: 'Фаина Раневская', quote: 'Если у тебя есть человек, которому можно рассказать сны, ты не имеешь права считать себя одиноким...', info: '' },
  { id: 3, author: 'Поль Жеральди', quote: 'Нужно иметь что-то общее, чтобы понимать друг друга, и чем-то отличаться, чтобы любить друг друга.', info: '' },
  { id: 4, author: 'Михаил Булгаков', quote: '... самый страшный гнев, гнев бессилия.', info: '' },
  { id: 5, author: 'Хатико: Самый верный друг (Hachiko: A Dog', quote: 'Они научили меня ценить верность... И никогда не забывать о тех, кого любишь.', info: '' },
];

export default function QuoteScreen({ navigation, route }) {
  const [currentQuoteIndex, setCurrentQuoteIndex] = React.useState(0);
  const [currentQuote, setCurrentQuote] = React.useState(null);

  function pressAnswer(answer) {
    if (currentQuoteIndex < quotes.length) {
      setCurrentQuote(quotes[currentQuoteIndex + 1]);
      setCurrentQuoteIndex(currentQuoteIndex + 1);
      console.log('next quote');
    }
    console.log(answer)
  }

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Назад"
          onPress={() => navigation.navigate('Start')}
        />
      </View>

      <Quote quote={currentQuote} />

      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title="Да"
            onPress={() => pressAnswer('yes')}
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            title="Нет"
            onPress={() => pressAnswer('no')}
          />
        </View>
      </View>

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
  },
  button: {
    width: '40%',
    alignContent: 'center',
    margin: 10
  },
  buttonsContainer: {
    flexDirection: 'row'
  }
});
