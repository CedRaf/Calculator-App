import React, {useState} from 'react';
import style from '../style/style';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Pressable} from 'react-native';


type ButtonProps = {
    onNthRoot : () => void; 
    onButtonPress: (value: string) => void;
    onOperation: () => void;
    onClear: () => void;
    onBackSpace: () => void;
    inputValue: string; 
    outputValue: string;
  };
export default function CalculatorButton({onNthRoot, onButtonPress, onOperation, onClear, onBackSpace }: ButtonProps) {
        const [isDegree, setIsDegree] = useState(true);
        const [isScientific, setIsScientific] = useState(true);
        
        const numberButtons = ['7','8','9','+', '⌫','4', '5', '6','-','Ans','1', '2', '3','x','M+','0','.', 'EXP', '/','M-','±','RND','=','AC', 'MR'];
    
        const scientificOperations = ['sin', 'cos', 'tan','','','sin⁻¹', 'cos⁻¹', 'tan⁻¹', 'π', 'e','xʸ', 'x³', 'x²', 'eˣ', '10ˣ','y√x', '3√x', '√x', 'ln', 'log' ,'(', ')', '1/x', '%', 'n!'];
        

    const translateButton= (value:string) => {
        switch (value){
            case 'sin⁻¹':
                onButtonPress('asin');
                break;
            case 'cos⁻¹':
                onButtonPress('acos');
                break;
            case 'tan⁻¹':
                onButtonPress('atan');
                if(isDegree){
                    onButtonPress(`deg(${value.slice(0,3)})`);
                }else{
                    onButtonPress(`${value.slice(0,3)}`);
                }
                break;
            case 'tan':
                if(isDegree){
                    onButtonPress(`deg(${value})`);
                }else{
                    onButtonPress(`${value}`);
                }
                break;
            case 'RND':
                onClear();
                onButtonPress(Math.random().toString());
                break;
            case 'AC':
                onClear();
                break;
            case '⌫':
                onBackSpace();
                break;
            case 'xʸ':
               onButtonPress('^');
                break;
            case 'x³':
               onButtonPress('^3');
                break;
            case 'x²':
                onButtonPress('^2');
                break;
            case 'eˣ':
               onButtonPress('exp('); //how to implement  since it requires a secondary input before converting to math.exp
                break;     
            case 'x':
                onButtonPress('*');
                break; 

                //incomplete equations
            // case 'y√x':
            //     onButtonPress('');
            //     break;
            // case '3√x':
            //     onButtonPress('');
            //     break;
            case '√x':
                onButtonPress('sqrt('); //test
                break;
            case 'ln':
                onButtonPress('log('); //test
                break;
            case 'log':
                onButtonPress('log10(');//test
                break;
            case 'EXP':
                onButtonPress('*10^'); //test
                break;
            case '1/x':
                onButtonPress('inv('); //test
                break;
            case '%':
                onButtonPress('/100');  //test
                break;
            case 'n!':
                onButtonPress('factorial(');  //test
                break;   
            case '±':
                onButtonPress('*-1'); //test
                break;
            case '10ˣ':
                onButtonPress('10^'); //test
                break; 
            // case 'M+':
            //     onButtonPress('');
            //     break;   
            // case 'M-':
            //     onButtonPress('');
            //     break;            
            // case 'MR':
            //     onButtonPress('');
            //     break;     
            case '=':
                onOperation();
                break;
            
            default:
                onButtonPress(value)

        }
    }

    return (
        <View style={style.container}>
          {/* Radian Degree, basic scientific toggle */}
         {/* calc mode*/}
          <View style={style.toggleContainer}>
          <Pressable
          style={[style.radioButton, !isScientific ? style.selected : null]}
          onPress={() => setIsScientific(false)}
        >
          <Text style={[style.radioText, !isScientific ? style.selectedText : null]}>Basic</Text>
        </Pressable>
        <Pressable
          style={[style.radioButton, isScientific ? style.selected : null]}
          onPress={() => setIsScientific(true)}
        >
          <Text style={[style.radioText, isScientific ? style.selectedText : null]}>Scientific</Text>
        </Pressable>

        {/* Radian Degree*/}
        <Pressable
            style={[style.radioButton, isDegree ? style.selected : null]}
            onPress={() => setIsDegree(true)}
        >
            <Text style={[style.radioText, isDegree ? style.selectedText : null]}>Deg</Text>
        </Pressable>

        <Pressable
            style={[style.radioButton, !isDegree ? style.selected : null]}
            onPress={() => setIsDegree(false)}
        >
            <Text style={[style.radioText, !isDegree ? style.selectedText : null]}>Rad</Text>
        </Pressable>

      </View>
  
          {/* Parent container for both buttons and display */}
          <View style={style.buttonsWrapper}>

             {/* Scientific Operations Section */}
             <View style={style.section}>
              <View style={style.grid}>
                {scientificOperations.map((value, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={style.button}
                    onPress={() => translateButton(value)}
                  >
                    <Text style={style.text}>{value}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            {/* Basic Numbers and Operations Section */}
            <View style={style.section}>
              <View style={style.grid}>
                {numberButtons.map((value, idx) => (
                  <TouchableOpacity
                    key={idx}
                    style={style.button}
                    onPress={() => translateButton(value)}
                  >
                    <Text style={style.text}>{value}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View> 
          </View>
        </View>
      );
      

}



  
  