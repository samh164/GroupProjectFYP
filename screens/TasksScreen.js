import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';

const colors = {
  themeColor: '#FDF5F4',
  white: '#fff',
  pink: '#EE6457',
  background: '#f4f6fc',
  greyish: '#a4a4a4',
  tint: '#D8D6D7'

}


const TasksScreen = ({navigation}) => {
  return (
  <View >
        <StatusBar barStyle='light-content' backgroundColor={colors.themeColor} />
        <View style={{ backgroundColor: colors.themeColor}}>
          <View style={{
            padding: 16,
            flexDirection: 'row',
            justifyContent:'space-between'
          }}
          >
            <Entypo 
            name='text' 
            size={30} 
            style={{ color: colors.pink}}
            />
            <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons 
              name='bell-outline' 
              size={30} 
              style={{ color: colors.pink}}
              />
              <AntDesign 
              name='user' 
              size={30} 
              style={{ color: colors.pink}}
              />

            </View>
          </View>
          <View style={{ padding: 16 }}>
            <Text style={{ color: color.white, fontSize: 30 }}>
              {"Hello"}
            </Text>

            <View style={{
              paddingHorizontal: 16,
              paddingVertical: 6,
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: colors.tint,
              borderRadius: 20,
              marginVertical:20,
              alignItems: 'center'
            }}>
              <MaterialCommunityIcons 
              name='magnify' 
              size={30} 
              style={{ color: colors.white}}
              />

            </View>

          </View>
          
        </View>


        
      </View>
  );
  };

  export default TasksScreen;

//   const styles = StyleSheet.create({
//     container:{
//         backgroundColor: colors.themeColor,
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     }
// });
