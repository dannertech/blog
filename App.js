import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import CreateScreen from './src/screens/CreateScreen';
import ShowScreen from './src/screens/ShowScreen';
import IndexScreen from './src/screens/IndexScreen';
import EditScreen from './src/screens/EditScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerTitle: 'Blogs'
      }}>
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen} />
        <Stack.Screen name="Create" component={CreateScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

