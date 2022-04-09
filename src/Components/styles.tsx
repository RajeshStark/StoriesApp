import { StyleSheet } from 'react-native';
import { DEVICE_WIDTH } from '../Utils/Dimensions';

export const styles = StyleSheet.create({
    btn: {
        width: DEVICE_WIDTH * 0.43,
        margin: 10,
        borderRadius: 5,
        marginTop: 20,

    },
    labelStyle: {
        fontSize: 12,
        textTransform: 'capitalize'
    },
    inputstyle: {
        width: DEVICE_WIDTH * 0.9, 
        marginTop: 16 
    },
    inputlabelstyle: {
        fontSize: 14
    }
})