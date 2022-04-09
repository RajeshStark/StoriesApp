import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../Screens/Details/Details';
import Home from '../Screens/Home/Home';
import { StackNavigationDetails } from './types';

const Stack = createNativeStackNavigator<StackNavigationDetails>();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Detail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;