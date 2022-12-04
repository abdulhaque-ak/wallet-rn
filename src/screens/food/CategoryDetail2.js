import React, { useEffect, useRef } from 'react'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-snap-carousel';
import { primaryColor, up } from '../../common';
import CategList1 from '../../components/CategList1';
import Header from './components/Header';
import MainLayout from '../../components/MainLayout';

const CategoryDetail2 = (props) => {
    let datas = props?.route?.params
    const [value, setValue] = React.useState([0, 0, 0, 0, 0])
    const [add, setAdd] = React.useState([false, false, false, false, false])
    const [count, setCount] = React.useState(0)

    const increment = (index) => {
        setValue(value => {
            const newVals = [...value];
            const val = newVals[index] + 1
            newVals[index] = val
            return newVals
        })
    }

    const decrement = (index) => {
        value[index] != 1 && setValue(value => {
            const newVals = [...value];
            const val = newVals[index] - 1
            newVals[index] = val
            return newVals
        })
        if (value[index] == 1) {
            setAdd(prevs => {
                const newVals = [...prevs];
                const val = !newVals[index]
                newVals[index] = val
                return newVals
            }),
                setValue(value => {
                    const newVals = [...value];
                    const val = newVals[index] - 1
                    newVals[index] = val
                    return newVals
                })
        }
    }

    const renderDatas = ({ item, index }) => {
        let price = parseInt(item.price) + 50
        return (
            <View style={{ marginHorizontal: 10, flexDirection: 'row', marginBottom: 30 }}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => props.navigation.navigate('DetailPage', item)}
                >
                    <View style={{ backgroundColor: '#4efbe7', borderRadius: 5, padding: 10 }}>
                        <Image resizeMode='cover' source={item.image} style={{ height: 120, width: 90 }} />
                        <View style={{ backgroundColor: '#143664', paddingHorizontal: 5, paddingVertical: 2, position: 'absolute', right: 4, top: 4 }}>
                            <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular' }}>50% Off</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ marginLeft: 10, width: '70%', justifyContent: 'space-between' }}>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ width: '85%', fontSize: 22, fontFamily: 'Montserrat-SemiBold', color: 'white' }} numberOfLines={2}>{item.name}</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'Montserrat-Regular' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Montserrat-Regular', textDecorationLine: 'line-through', color: '#b8b8b8' }}>
                                {'\u20B9'}{price}
                            </Text>
                            <Text style={{ fontSize: 20, fontFamily: 'Montserrat-Bold', textDecorationLine: 'none', color: 'white' }}>
                                {' '}Rs.{item.price}
                            </Text>
                        </Text>
                    </View>
                    {add[index] != true &&
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                setAdd(prevs => {
                                    const newVals = [...prevs];
                                    const val = !newVals[index]
                                    newVals[index] = val
                                    return newVals
                                }),
                                    increment(index)
                            }}
                            style={{ backgroundColor: '#55f0c2', alignItems: 'center', justifyContent: 'center', borderRadius: 10, width: 110, paddingVertical: 12, paddingHorizontal: 12 }}>
                            <Text style={{ color: primaryColor, fontFamily: 'Montserrat-Bold' }}>Add</Text>
                        </TouchableOpacity>
                    }
                    {add[index] != false &&
                        <View style={{ flexDirection: 'row', backgroundColor: 'white',  justifyContent: 'space-between', borderRadius: 10, width: 110 }}>
                            <TouchableOpacity
                                onPress={() => decrement(index)}
                                activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 12, backgroundColor: '#55f0c2', borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }}>
                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat-Medium', fontWeight: 'bold' }}>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#143664', fontSize: 18, fontFamily: 'Montserrat-Medium' }}>
                                    {value[index]}
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => increment(index)}
                                activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 12, backgroundColor: '#55f0c2', borderTopRightRadius: 8, borderBottomRightRadius: 8 }}>
                                <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Montserrat-Medium', fontWeight: 'bold' }}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
            </View>
        )

    }

    useEffect(() => {
        let cartCount = Object.values(value).reduce((prev, curr) => {
            return prev += curr > 0 ? 1 : 0
        }, 0)
        setCount(cartCount)
    }, [value])

    return (
        <MainLayout>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Header count={count} />
                    <View style={styles.contents}>
                        <View style={styles.container}>
                            <View style={[styles.categText, { marginTop: 20 }]}>
                                <Text style={styles.catText}>{datas.name}</Text>
                            </View>
                            <FlatList
                                data={up || []}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={(item, index) => renderDatas(item, index)}
                                extraData={value}
                            />
                        </View>
                    </View>
                </View >
            </ScrollView >
        </MainLayout>
    )
}

export default CategoryDetail2

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cart: {
        marginHorizontal: 22
    },
    text: {
        fontFamily: 'Montserrat-SemiBold',
        color: 'white',
        fontSize: 18
    },
    contents: {
        flex: 1,
        backgroundColor: '#02273990',
        borderTopLeftRadius: 44,
        borderTopRightRadius: 44,
        marginHorizontal: 5
    },
    container: {
        marginHorizontal: 20,
    },
    itemText: {
        fontFamily: 'Montserrat-Medium',
        color: '#04564B',
        fontSize: 15
    },
    carouselView: {
        backgroundColor: '#08C6AC',
        padding: 20,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightSection: {
        width: '60%',
        height: '100%'
    },
    categText: {
        marginHorizontal: 10,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    catText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        color: 'white',
    },
    countView: {
        backgroundColor: '#08C6AC',
        zIndex: 999,
        height: 21,
        width: 21,
        position: 'absolute',
        top: -6,
        right: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    count: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 12,
        color: 'black'
    }
})