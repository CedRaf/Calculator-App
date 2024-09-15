import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    //CalculatorButton.tsx

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
      padding: 8,
      
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    buttonOp: {
      backgroundColor: '#e5ecf3',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      height: 45,
      width: 70,
      borderColor:'black',
      borderWidth:'1px'
    },

    buttonNum: {
        backgroundColor: '#e5ecf4',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 45,
        width: 70,
        borderColor:'black',
        borderWidth:'1px',
      },
    text: {
      fontSize: 18,
      color: 'black',
      fontWeight:'bold'
    },
    toggleContainer: {
        flexDirection:'row',
        marginBottom: 20,
        marginLeft:200,
      },
      radioButton: {
        backgroundColor: '#ccc',
        padding: 10,
        marginHorizontal: 5,
        borderRadius: 5,
        height: 45,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
      },
      selected: {
        backgroundColor: '#013365', 
      },
      radioText: {
        color: '#000',
        fontSize: 16,
        fontWeight:'bold',
        textAlign:'center',
        justifyContent:'center'
      },
      selectedText:{
        color:'#fff'
      },

      //index.tsx 
      container: {
        height:'90%',
        flexGrow: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    
      },
      displaySection: {
        width: '90%',
        height:'10%',
        backgroundColor: '#f0f0f0',
        marginTop:170,
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
        marginTop:-3,
      },
      outputText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'right',
        marginTop: 5,
      },
    });

    export default styles;