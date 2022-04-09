import React from 'react';
import { Searchbar } from 'react-native-paper';
import { styles } from './styles';
import { inputTypes } from './types'

export default function CustomSearchbar({ placeholder, onChangeText, value, testID}: inputTypes) {

    return (
        <Searchbar
            placeholder={placeholder}
            onChangeText={onChangeText}
            value={value}
            style={styles.inputstyle}
            inputStyle={styles.inputlabelstyle}
            testID={testID}
        />
    )
}