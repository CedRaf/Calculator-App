import { useState } from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';
import { evaluate } from 'mathjs';
import CalculatorButton  from '@/components/CalculatorButton'

export default function HomeScreen() { 

  const [result, setResult] = useState<number | null>(null); 
  const [error, setError] = useState<string | null>(null); 
  const [input, setInput] = useState<string>('');

  const handleButtonPress = (value : string) =>{
    setInput(prev => prev + value);
  }

  const handleOperation = () =>{
    try{
      const finalAnswer = evaluate(input); 
      setResult(finalAnswer); 
      setError(null); 
    }catch (e){
      setError('Error Occurred');
      setResult(null); 
    }
  }
  const handleBackSpace = () =>{
    
    const reducedInput = input.slice(0, -1);
    setInput(reducedInput);
  

  }

  const handleClear = () =>{
    setResult(null);
    setInput('');  
  }

  return (
    <View style={styles.container}>
      <Text>{input}</Text>
      <Text>{result}</Text>
      <CalculatorButton
        onButtonPress={handleButtonPress}
        onOperation={handleOperation}
        onClear={handleClear}
        onBackSpace={handleBackSpace}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow:1,
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
});

