import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-snap-carousel';

const data = [
    {
        id: 1,
        name: 'First time User Pack',
        offer: '50%',
    },
    {
        id: 2,
        name: 'Food Pack 2',
        offer: '45%',
    },
    {
        id: 3,
        name: 'Food Pack 3',
        offer: '50%',
    }
]

const data2 = [
    {
        id: 22,
        img: require('../../images/pizza.png'),
        name: 'Pizza'
    },
    {
        id: 23,
        img: require('../../images/burger.png'),
        name: 'Burger'
    },
    {
        id: 24,
        img: require('../../images/pasta.png'),
        name: 'Pasta'
    }
]

const data3 = [
    {
        id: 33,
        img: require('../../images/pizza.png'),
        name: 'Combo 1'
    },
    {
        id: 34,
        img: require('../../images/burger.png'),
        name: 'Combo 2'
    },
    {
        id: 35,
        img: require('../../images/pasta.png'),
        name: 'Combo 3'
    }
]
const HomePage = () => {

    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
            <View style={styles.main}>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.text}>Water Order</Text>
                        <View style={styles.iconView}>
                            <TouchableOpacity activeOpacity={0.7} style={styles.cart}>
                                <Icon name='notifications-outline' color={'white'} size={26} />
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Icon name='person-circle-outline' color={'white'} size={30} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.searchSection}>
                        <Icon style={styles.searchIcon} name="ios-search" size={20} color="white" />
                        <TextInput
                            style={styles.input}
                            placeholder="Search here.."
                            placeholderTextColor={'white'}
                        />
                    </View>
                </View>
                <View style={styles.contents}>
                    <View style={styles.container}>
                        <View style={{ alignSelf: 'center', marginVertical: 40, flexDirection: 'row', alignItems: 'center' }}>
                            <ImageBackground
                                style={styles.recShape}
                                source={require('../../images/recshape.png')}
                            >
                                <Image style={{ height: 110, width: 60 }} source={require('../../images/bottle.png')} />
                            </ImageBackground>
                            <View>
                                <Text style={styles.ltr}>20 Ltr</Text>
                                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                                    <Text style={{ color: 'white', fontFamily: 'Montserrat-Medium', }}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center' }}>
                            <ImageBackground
                                style={styles.recShape}
                                source={require('../../images/recshape.png')}
                            >
                                <Image style={{ height: 110, width: 60 }} source={require('../../images/bottle.png')} />
                            </ImageBackground>
                            <View>
                                <Text style={styles.ltr}>5 Ltr</Text>
                                <TouchableOpacity activeOpacity={0.7} style={styles.button}>
                                    <Text style={{ color: 'white', fontFamily: 'Montserrat-Medium', }}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', marginVertical: 40, flexDirection: 'row', alignItems: 'center' }}>
                            <ImageBackground
                                style={styles.recShape}
                                source={require('../../images/recshape.png')}
                            >
                                <Image style={{ height: 110, width: 60 }} source={require('../../images/bottle.png')} />
                            </ImageBackground>
                            <View>
                                <Text style={styles.ltr}>1 Ltr</Text>
                                <TouchableOpacity activeOpacity={0.7} style={{ paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, backgroundColor: '#143664', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', fontFamily: 'Montserrat-Medium', }}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.bottomBut, { backgroundColor: '#1BFF9D' }]}>
                            <Text style={{ color: '#224A7B', fontFamily: 'Montserrat-SemiBold', }}>
                                Order Now
                            </Text>
                        </View>
                        <View style={[styles.bottomBut, { backgroundColor: '#ADBED3' }]} >
                            <Text style={{ color: '#143664', fontFamily: 'Montserrat-SemiBold', }}>
                                Order History
                            </Text>
                        </View>
                    </View>
                </View>
            </View >
        </ScrollView >
    )
}

export default HomePage

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#0e3d6b'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cart: {
        marginHorizontal: 18
    },
    text: {
        fontFamily: 'Montserrat-SemiBold',
        color: 'white',
        fontSize: 18
    },
    contents: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 44,
        borderTopRightRadius: 44,
    },
    container: {
        marginHorizontal: 20,
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D6E98',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        marginBottom: 25
    },
    searchIcon: {
        paddingLeft: 20,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
    },
    recShape: {
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        backgroundColor: '#143664',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ltr: {
        color: '#143664',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 24,
        marginLeft: 5,
        marginBottom: 10
    },
    bottomBut: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        alignSelf: 'center',
        paddingVertical: 18,
        borderRadius: 30,
        marginBottom: 20
    }
})