import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    //CalculatorButton.tsx
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },

    displaySection: {
        width: '95%',
        backgroundColor: '#f0f0f0',
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
    },
    inputText: {
        fontSize: 24,
        color: '#333',
        textAlign: 'right',
    },
    outputText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'right',
        marginTop: 10,
    },
    //container for both types of buttons
    buttonsWrapper: {
      flexDirection: 'column', 
      width: '95%', 
      flex: 1, 
    },
    //container for buttons
    section: {
      flex: 0, 
      backgroundColor: '#e0e0e0',
      padding: 10,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    button: {
      backgroundColor: '#e5ecf3',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      height: 45,
      width: 70,
      marginBottom: 10,
    },
    text: {
      fontSize: 18,
      color: 'black',
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
      },
      radioButton: {
        backgroundColor: '#ccc',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
      },
      selected: {
        backgroundColor: '#013365', 
      },
      radioText: {
        color: '#000',
        fontSize: 16,
      },
      selectedText:{
        color:'#fff'
      },

      //index.tsx 
      container: {
        
        flexGrow: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      displaySection: {
        width: '90%',
        backgroundColor: '#f0f0f0',
        marginTop:100,
        padding: 15,
        marginBottom: 20,
        borderRadius: 10,
        borderColor: '#ccc',
        borderWidth: 1,
      },
      inputText: {
        fontSize: 24,
        color: '#333',
        textAlign: 'right',
      },
      outputText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'right',
        marginTop: 10,
      },
    });

    export default styles;