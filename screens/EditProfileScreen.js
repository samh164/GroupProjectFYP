import  React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

const EditProfileScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <Text>Edit Profile Screen</Text>
        
      </View>
    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#FDF5F4',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
  }
});

