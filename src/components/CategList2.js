import React from 'react'
import { View, TouchableOpacity, Image, Text, FlatList, StyleSheet } from 'react-native'

const normalize = (data) => {
    for (let i = 1; i <= data.length % 3; i++) {
        data.push({})
    }
    return data
}

const CategList2 = (props) => {
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}></View>
            {/* <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={normalize(props?.data || [])}
                numColumns={3}
                renderItem={({ item }) => (
                    item.hasOwnProperty('name') ? (
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => props.navigation.navigate('CategoryDetail1', { title: "North Indian" })}
                                style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#0e3d6b' }}>
                                <Image source={item.image} />
                            </TouchableOpacity>
                            <Text style={styles.foodName} numberOfLines={1}>{item.name}</Text>
                        </View>
                    ) :
                        (
                            <View style={{ flex: 1 }}></View>
                        )
                )}
            /> */}
        </>
    )
}

export default CategList2

const styles = StyleSheet.create({
    foodName: {
        color: '#0e3d6b',
        fontFamily: 'Montserrat-Medium',
        marginVertical: 10,
        textAlign: 'center',
        marginHorizontal: 3
    }
})