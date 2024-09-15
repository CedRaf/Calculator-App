import { useState } from 'react';
import styles from '@/style/style';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
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

  const handleXYRoot = () => {
    // Split input to separate y and x (e.g., for "y√x", y = input before the last number, x = the last number)
    const inputArray = input.split(/([+\-*/])/); // Split input by operators
    const x = inputArray.pop(); // x is the last value (number we want the root of)
    const y = inputArray.join(''); // y is the rest of the input (base of the root)
    
    if (x && y) {
      // Use the nthRoot function from mathjs to compute y√x
      const result = evaluate(`nthRoot(${x}, ${y})`);
      
      // Set the result
      setResult(result);
      setInput(result.toString()); // Update the input to show the result
    } else {
      // Handle cases where y or x is missing or invalid
      setResult(0);
      setInput('');
    }
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Display Input and Result */}
      <View style={styles.displaySection}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        <Text style={styles.outputText}>{result !== null ? result : ''}</Text>
      </View>

      {/* Calculator Buttons */}
      <CalculatorButton
        onMemPlus = {handleMemPlus}
        onMemMinus = {handleMemMinus}
        onMemReturn = {handleMemReturn}
        onNthRoot = {handleXYRoot}
        onButtonPress={handleButtonPress}
        onOperation={handleOperation}
        onClear={handleClear}
        onBackSpace={handleBackSpace}
        inputValue={input}
        outputValue={result !== null ? result.toString() : ''}
      />
    </ScrollView>
  );
}


