import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { DetailsProp } from '../../Navigation/types'

import styles from './DetailStyle'

export default function Detail({ route }: DetailsProp) {

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ marginHorizontal: 16 }}>{JSON.stringify(route.params.item)}</Text>
        </SafeAreaView>
    )
}
