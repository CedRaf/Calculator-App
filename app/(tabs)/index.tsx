import { useState } from 'react';
import {View, Text, Button} from 'react-native';
import { evaluate } from 'mathjs';
// import { Buttons } from '@/components/Buttons'

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

  const hadleClear = () =>{
    setResult(null);
    setInput('');  
  }

  return (
    <View>
      <Text>Hello World!</Text>
    </View>
  );
}

