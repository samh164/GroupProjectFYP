import  React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const FormsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>forms Screen</Text>
        
      </View>
    );
};

export default FormsScreen;

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
  }
});
