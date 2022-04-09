import React from 'react';
import { Button } from 'react-native-paper';
import { styles } from './styles';
import { btnTypes } from './types'

export default function CustomBtn({title, onPress, enabled, } : btnTypes){

	return(
		<Button 
		  mode={enabled ? "contained" : "outlined"} 
		  onPress={onPress} 
		  style={styles.btn}
          labelStyle={styles.labelStyle}
		>
		   {title}
		</Button>
		)
}