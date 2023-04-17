import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CreateScreen from './src/screens/CreateScreen';
import ShowScreen from './src/screens/ShowScreen';
import IndexScreen from './src/screens/IndexScreen';
import EditScreen from './src/screens/EditScreen';
import { BlogProvider } from './src/context/BlogContext';

import AppBar from './src/components/AppBar';


const Stack = createStackNavigator();

export default function App() {

  return (
    <BlogProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={IndexScreen}/>
        <Stack.Screen name="Show" component={ShowScreen} />
        <Stack.Screen name="EditScreen" component={EditScreen}/>
        <Stack.Screen name="Create" component={CreateScreen} options={{
          header: ((props) => {
            return (
              <AppBar title="Create Post" goBack={props.navigation.goBack} name="keyboard-backspace"/>
            )
          })
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </BlogProvider>
  );
};

