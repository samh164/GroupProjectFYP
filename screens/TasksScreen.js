import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';





const TasksScreen = ({navigation}) => {
  return (
  <View style={styles.container}>
        <Text>Tasks Screen</Text>
        
      </View>
  );
  };

  export default TasksScreen;

  const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    }
});
