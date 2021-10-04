import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StartMain from '../components/Start/StartMain';

const StartStack = createNativeStackNavigator();

const Start = () => {
  return (
    <StartStack.Navigator>
      <StartStack.Screen
        name="StartMain"
        component={StartMain}
        options={{headerShown: false}}
      />
    </StartStack.Navigator>
  );
};

export default Start;
