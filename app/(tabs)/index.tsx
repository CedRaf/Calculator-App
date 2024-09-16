import { useEffect, useState } from 'react';
import styles from '@/style/style';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { evaluate, nthRoot } from 'mathjs';
import CalculatorButton from '@/components/CalculatorButton';

export default function HomeScreen() {
  const [result, setResult] = useState<number>(0);
  const [input, setInput] = useState<string>('');
  const [memory, setMemory] = useState<number>(0); 
  const [isDegree, setIsDegree] = useState<boolean>  (false);
  
  useEffect(() => {
    console.log('isDegree changed:', isDegree);
  }, [isDegree]);
  const handleButtonPress = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleOperation = () => {
    try {
      if(!isDegree){
        const finalAnswer = evaluate(input); 
        setResult(finalAnswer); 
        return finalAnswer;
      }
      else if(isDegree){
        const finalAnswer = evaluate(`${input} )* (pi / 180))`); 
        setResult(finalAnswer); 
        return finalAnswer;
      }

    } catch (e) {
      console.error('Error evaluating expression:', e);
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
    handleBackSpace();
    handleButtonPress(`nthRoot(${lastChar},`);
  }

  const handle3XRoot = () =>{
    let lastChar = input.charAt(input.length - 1);
    handleBackSpace();
    handleButtonPress(`nthRoot(${lastChar},3)`);
  }



  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Display Input and Result */}
      <View style={styles.displaySection}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        <Text style={styles.outputText}>{result !== null ? result : ''}</Text>
      </View>

      {/* Calculator Buttons */}
      <CalculatorButton
        
       on3rdRoot = {handle3XRoot}
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
        isDegree={isDegree}
        setIsDegree={setIsDegree}
        
      />
    </ScrollView>
  );
}


