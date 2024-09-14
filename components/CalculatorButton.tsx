import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';


type ButtonProps = {
    onButtonPress: (value: string) => void;
    onOperation: () => void;
    onClear: () => void;
    onBackSpace: () => void;
  };
export default function CalculatorButton({ onButtonPress, onOperation, onClear, onBackSpace }: ButtonProps) {
    const buttons = [
        
        ['sin', 'cos', 'tan', '7','8','9','+','⌫'],
        ['sin⁻¹', 'cos⁻¹', 'tan⁻¹', 'π', 'e', '4', '5', '6', '-', 'Ans'],
        ['xʸ', 'x³', 'x²', 'eˣ', '10ˣ', '1', '2', '3', 'x', 'M+'],
        ['y√x', '3√x', '√x', 'ln', 'log', '0','.','EXP','/','M-'],
        ['(', ')', '1/x', '%', 'n!', '±', 'RND', 'AC', '=', 'MR'],
        
    ]

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
        <View style={style.buttonsOverlay}>
          {buttons.map((row, rowNum) => (
            <View key={rowNum} style={style.row}>
              {row.map((value, colNum) => (
                <TouchableOpacity key={colNum} style={style.button} onPress={() => translateButton(value)}
                >
                  <Text style={style.text}>{value}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
      );

}

const style= StyleSheet.create({

    buttonsOverlay: {
        flexDirection: 'column', // Stack the rows vertically
        backgroundColor: 'grey'
    },
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginTop: 5,
    },
    button: {
        flex: 1, 
        margin: 5, 
        backgroundColor: '#ddd', 
        paddingVertical: 15, 
        alignItems: 'center',
        borderRadius: 5, 
      },
      text: {
        fontSize: 20, 
        color: 'black', 
      },

});

