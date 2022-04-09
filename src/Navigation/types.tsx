import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

export type StackNavigationDetails = {
    Home: undefined;
    Details: { item: Array<JSON> | any }
}


type HomeNavigationProp = NativeStackNavigationProp<StackNavigationDetails, 'Home'>

export interface homeProps {
    navigation: HomeNavigationProp;
}

type DetailsRouteProp = RouteProp<StackNavigationDetails, 'Details'>

export interface DetailsProp {
    route: DetailsRouteProp;
}


