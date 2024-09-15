import { useState } from 'react';
import styles from '@/style/style';
import { View, Text, StyleSheet } from 'react-native';
import { evaluate } from 'mathjs';
import CalculatorButton from '@/components/CalculatorButton';

export default function HomeScreen() {
  const [result, setResult] = useState<number | null>(null);
  const [input, setInput] = useState<string>('');

  const handleButtonPress = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleOperation = () => {
    try {
      const finalAnswer = evaluate(input); // Evaluate the input expression
      setResult(finalAnswer); // Set the result
    } catch (e) {
      setResult(null); // Clear result if error occurs
    }
  };

  const handleBackSpace = () => {
    const reducedInput = input.slice(0, -1); // Remove the last character
    setInput(reducedInput);
  };

  const handleClear = () => {
    setResult(null);
    setInput('');
  };

  return (
    <View style={styles.container}>
      {/* Display Input and Result */}
      <View style={styles.displaySection}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        <Text style={styles.outputText}>{result !== null ? result : ''}</Text>
      </View>

      {/* Calculator Buttons */}
      <CalculatorButton
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


