import React from 'react'
import { View, TouchableOpacity, Image, Text, FlatList, StyleSheet, ToastAndroid } from 'react-native'
import CategList2 from './CategList2'

const normalize = (data) => {
    for (let i = 1; i <= data.length % 3; i++) {
        data.push({})
    }
    return data
}

const CategList1 = (datas) => {
    let props = datas.props
    let data = datas.data
    return (
        <>
            <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={normalize(data || [])}
                numColumns={3}
                renderItem={({ item }) => (
                    item.hasOwnProperty('name') ? (
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => props.navigation.navigate('CategoryDetail2', item)}
                                style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#4efbe7' }}>
                                <Image source={item.image} />
                            </TouchableOpacity>
                            <Text style={styles.foodName} numberOfLines={1}>{item.name}</Text>
                        </View>
                    ) :
                        (
                            <View style={{ flex: 1 }}></View>
                        )
                )}
            />
        </>
    )
}

export default CategList1

const styles = StyleSheet.create({
    foodName: {
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        marginVertical: 10,
        textAlign: 'center',
        marginHorizontal: 3
    }
})