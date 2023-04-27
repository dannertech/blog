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
        <Stack.Screen name="Home" component={IndexScreen} options={{
          header: ((props) => {
            return <AppBar title="Home" goBack={null} name={undefined}/>
          })
        }}/>
        <Stack.Screen name="Show" component={ShowScreen} options={{
          header: ((props) => {
            return <AppBar title="Show" goBack={props.navigation.goBack} name="keyboard-backspace"/>
          })
        }}/>
        <Stack.Screen name="Edit" component={EditScreen} options={{
          header: ((props) => {
            return (
              <AppBar goBack={props.navigation.goBack} title="Edit Post" name="keyboard-backspace" />
            )
          })
        }}/>
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

