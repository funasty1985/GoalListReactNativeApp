import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
import { useState } from 'react';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modelIsVisiable, setModelIsVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    // setCourseGoals([...courseGoals, enteredGoalText]);
    // when we update a state based on the previous state use function
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      {text:enteredGoalText, id: Math.random().toString()}]
      )
    endAddGoalHandler();
  };

  function startAddGoalHandler(){
    setModelIsVisible(true);
  }

  function deleteGoalHandler(id) {
    console.log("Delete is clicked")
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id != id);
    });
  }
  function endAddGoalHandler(){
    console.log('onCancel is clicked')
    setModelIsVisible(false);
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button
        title='Add New Goal'
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modelIsVisiable}    
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList data={courseGoals} renderItem={(itemData) => {
          return (
            <GoalItem
              id={itemData.item.id}
              text={itemData.item.text}
              onDeleteItem={deleteGoalHandler}
            />
           )
        }} 
        alwaysBounceVertical={false}
        keyExtractor={(item, index)=> {
          return item.id
        }}
        >
        </FlatList>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex:1,
  },
  goalsContainer: {
    flex: 5
  },
});