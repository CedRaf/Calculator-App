import { useState } from 'react';
import styles from '@/style/style';
import { View, Text, StyleSheet } from 'react-native';
import { evaluate, nthRoot } from 'mathjs';
import CalculatorButton from '@/components/CalculatorButton';

export default function HomeScreen() {
  const [result, setResult] = useState<number>(0);
  const [input, setInput] = useState<string>('');
  const [memory, setMemory] = useState<number>(0); 

  const handleButtonPress = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleOperation = () => {
    try {
      const finalAnswer = evaluate(input); 
      setResult(finalAnswer); 
      return finalAnswer;
    } catch (e) {
      setResult(0); 
    }
  };

  const handleBackSpace = () => {
    const reducedInput = input.slice(0, -1);
    setInput(reducedInput);
  };

  const handleClear = () => {
    setResult(0);
    setInput('');
    setMemory(0); 
  };

  const handleMemPlus = () =>{
    const storedValue = handleOperation();
    setMemory((prev) => prev + storedValue);
  }

  const handleMemMinus = () =>{
    const storedValue = handleOperation();
    setMemory((prev) => prev - storedValue);  
  }

  const handleMemReturn = () =>{
    setInput(memory.toString()); 
  }

  const handleXYRoot = () =>{
    let lastChar = input.charAt(input.length - 1);
    handleButtonPress(`nthRoot(${lastChar},`);
  }

  return (
    <View style={styles.container}>
      {/* Display Input and Result */}
      <View style={styles.displaySection}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        <Text style={styles.outputText}>{result !== null ? result : ''}</Text>
      </View>

      {/* Calculator Buttons */}
      <CalculatorButton
        onNthRoot = {handleXYRoot}
        onButtonPress={handleButtonPress}
        onOperation={handleOperation}
        onClear={handleClear}
        onBackSpace={handleBackSpace}
        inputValue={input}
        outputValue={result !== null ? result.toString() : ''}
      />
    </View>
  );
}


