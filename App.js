import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import TableauBord from './src/component/pages/TableauBord.js';
import Lesson from './src/component/pages/Lesson.js';
import Exercice from './src/component/pages/Exercice.js';

const App = () => {

  // const Menu = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  
  return (
      <NavigationContainer>

        {/* <Menu.Navigator>
          <Menu.Screen name="Lessons" component={Lesson} />
        </Menu.Navigator> */}

        <Stack.Navigator>
          <Stack.Screen name="TableauBord" component={TableauBord} />
          <Stack.Screen name="Lesson" component={Lesson} />
          <Stack.Screen name="Exercice" component={Exercice} />
        </Stack.Navigator>

      </NavigationContainer>
  );
}

export default App;
