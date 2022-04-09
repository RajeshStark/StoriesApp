import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Searchbar } from 'react-native-paper'
import CustomBtn from '../../Components/CustomBtn'
import CustomSearchbar from '../../Components/CustomSearchbar'
import { homeProps } from '../../Navigation/types'
import { getStories } from '../../Services'
import { STORY_API } from '../../Utils/Config'
import styles from './HomeStyle'

export default function Home({ navigation }: homeProps) {

    const [count, setCount] = useState(0)
    const [searchText, setSearchText] = useState('')
    const [allAsteroids, setAllAsteroids] = useState([] as any)
    const [filterBy, setFilterBy] = useState('')

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count => count + 1)
            handleSubmit()
        }, 10000);
        return () => {
            clearInterval(timer)
        }
    }, [count])

    const handleSubmit = () => {
        getStories(count)
            .then(value => {
                setAllAsteroids([...allAsteroids, ...value.hits])
            })
            .catch(err => console.log(err))
    }

    const handleLoadMore = () => {
        setCount(count => count + 1)
        handleSubmit()
    }

    const searchData = () => {

        if (searchText.length === 0) {
            if (filterBy === 'title') return allAsteroids.sort((a: any, b: any) => a.title.toUpperCase() > b.title.toUpperCase())
            if (filterBy === 'createdAt') return allAsteroids.sort((a: any, b: any) => a.created_at_i < b.created_at_i)
            return allAsteroids
        }

        let tempArr = [] as any

        for (const i in allAsteroids) {
            if ((allAsteroids[i].title && allAsteroids[i].title.toUpperCase().includes(searchText.toUpperCase())) ||
                (allAsteroids[i].url && allAsteroids[i].url.toUpperCase().includes(searchText.toUpperCase())) ||
                (allAsteroids[i].author && allAsteroids[i].author.toUpperCase().includes(searchText.toUpperCase()))) {
                tempArr = [...tempArr, allAsteroids[i]]
                console.log('tempArr', tempArr.length)
                console.log('searchText', searchText)
            }
        }
        if (filterBy === 'title') return tempArr.sort((a: any, b: any) => a.title.toUpperCase() > b.title.toUpperCase())
        if (filterBy === 'createdAt') return tempArr.sort((a: any, b: any) => a.created_at_i < b.created_at_i)
        return tempArr
    }

    return (
        <SafeAreaView style={styles.container}>

            <CustomSearchbar
                placeholder="Search by Title, Url, Author Name"
                onChangeText={(value) => setSearchText(value)}
                value={searchText}
            />

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '90%' }}>


                <CustomBtn
                    title='Filter By Title'
                    onPress={() => setFilterBy('title')}
                    enabled={filterBy === 'title' ? true : false}
                />

                <CustomBtn
                    title='Filter By Created At'
                    onPress={() => setFilterBy('createdAt')}
                    enabled={filterBy === 'createdAt' ? true : false}
                />

            </View>

            <FlatList
                contentContainerStyle={{ marginTop: 20 }}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={1}
                keyExtractor={(item) => item.objectID}
                data={searchData()}
                renderItem={({ item }) => {

                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Details', {
                                item: item
                            })}
                            style={styles.touchablestyles}>

                            <Text style={styles.txt}>
                                <Text style={styles.subtxt}>Title:</Text>  {item.title}
                            </Text>
                            <Text style={styles.txt}>
                                <Text style={styles.subtxt}>URL:</Text>  {item.url}
                            </Text>
                            <Text style={styles.txt}>
                                <Text style={styles.subtxt}>Created At:</Text>  {item.created_at}
                            </Text>
                            <Text style={styles.txt}>
                                <Text style={styles.subtxt}>Author:</Text>  {item.author}
                            </Text>
                        </TouchableOpacity>
                    )
                }}
            />

        </SafeAreaView>
    )
}
