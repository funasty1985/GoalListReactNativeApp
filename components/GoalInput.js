import { StyleSheet, Modal, View, Button, TextInput, Image, FlatList} from 'react-native';
import { useState } from 'react';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState("");
    function goaltInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("");
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}> 
                <Image style={styles.image} source={require("../assets/images/target.png")}/>
                <TextInput 
                    value={enteredGoalText}    // two way binding
                    style={styles.textInput} 
                    placeholder='Your course goal' 
                    onChangeText={goaltInputHandler}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color="#b180f0"/>
                    </View>
                    <View style={styles.button}>
                        <Button 
                            onPress={addGoalHandler}
                            title='Add Goal'
                            color="#f31282"
                        />
                        </View>
                </View>
            </View>
        </Modal>
        
    )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: "center",
    borderColor: "#cccccc",
    padding: 16,
    backgroundColor: "#311b6b"
  },
  textInput:{
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor:"#e4d0ff",
    color: "#120438",
    width: '100%',
    borderRadius: 6,
    marginRight:8,
    padding: 16
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image: {
    width:100,
    height: 100,
    margin: 20
  }
})