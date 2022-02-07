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
    const renderItem = (item, index) => {
        return (
            <View style={styles.carouselView}>
                <Image style={{ width: 130, height: 130 }} source={require('../../images/foodimg.png')} />
                <View style={styles.rightSection}>
                    <Text style={[styles.itemText, { marginTop: 15 }]}>Enjoy {item.item.offer} Off</Text>
                    <Text style={[styles.itemText, { fontFamily: 'Montserrat-SemiBold', fontSize: 23 }]} numberOfLines={2}>{item.item.name}</Text>
                    <Text style={[styles.itemText, { position: 'absolute', bottom: 0 }]}>*Order on above 150</Text>
                </View>
            </View>
        )
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.main}>
                <View style={styles.header}>
                    <Text style={styles.text}>Food Order</Text>
                    <View style={styles.iconView}>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Icon name='notifications-outline' color={'white'} size={26} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Icon name='cart-outline' color={'white'} size={28} style={styles.cart} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7}>
                            <Icon name='person-circle-outline' color={'white'} size={30} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contents}>
                    <View style={styles.container}>
                        <View style={styles.searchSection}>
                            <Icon style={styles.searchIcon} name="ios-search" size={20} color="#04564B" />
                            <TextInput
                                style={styles.input}
                                placeholder="Search here.."
                                placeholderTextColor={'#04564B'}
                            />
                        </View>
                        <Carousel
                            data={data}
                            inactiveSlideOpacity={0.4}
                            autoplay={true}
                            autoplayDelay={3000}
                            loop={true}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={Dimensions.get('window').width - 60}
                            renderItem={renderItem}
                            containerCustomStyle={{ marginTop: 30, alignSelf: 'center' }}
                        />
                        <View style={styles.categText}>
                            <Text style={styles.catText}>Category</Text>
                            <Text style={styles.cAll}>See All</Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 5 }}>
                            {data2.map(data => {
                                return (
                                    <>
                                        <TouchableOpacity activeOpacity={0.7} style={{ marginRight: 30 }}>
                                            <ImageBackground
                                                style={styles.recShape}
                                                source={require('../../images/recshape.png')}
                                            >
                                                <Image style={{ height: 100, width: 100 }} source={data.img} />
                                            </ImageBackground>
                                            <Text style={styles.itemName}>{data.name}</Text>
                                        </TouchableOpacity>
                                    </>
                                )
                            }
                            )}
                        </ScrollView>
                        <View style={[styles.categText, { marginTop: 35 }]}>
                            <Text style={styles.catText}>Today's Special</Text>
                            <Text style={styles.cAll}>See All</Text>
                        </View>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginLeft: 5, marginTop: 5 }}>
                            {data3.map(data => {
                                return (
                                    <>
                                        <TouchableOpacity activeOpacity={0.7} style={{ marginRight: 40 }}>
                                            <Image style={{ height: 145, width: 145 }}
                                                source={require('../../images/foodd.png')}
                                            />
                                            <Text style={[styles.itemName, { marginLeft: 0 }]}>{data.name}</Text>
                                        </TouchableOpacity>
                                    </>
                                )
                            }
                            )}
                        </ScrollView>
                    </View>
                </View>
            </View >
        </ScrollView>
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
        paddingVertical: 20
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center'
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
        backgroundColor: '#D8D8D8',
        marginTop: 30,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
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
        color: '#04564B',
        fontFamily: 'Montserrat-Regular',
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
        width: '50%',
        height: '90%',
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
        fontSize: 18,
        color: '#04564B'
    },
    cAll: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: '#04564B'
    },
    itemName: {
        // alignSelf: 'center',
        fontFamily: 'Montserrat-SemiBold',
        color: '#04564B',
        marginTop: 5,
        marginLeft: 7

    },
    recShape: {
        height: 150,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center'
    }
})