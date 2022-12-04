import React, { useState } from 'react'
import { Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { primaryColor } from '@common'
import Icon from 'react-native-vector-icons/Ionicons';
import SwipeablePanel from 'react-native-sheets-bottom';

const width = Dimensions.get('window').width

const data1 = [
    {
        id: 1,
        name1: 'Food Mate',
        image1: require('../images/food.png'),
        target1: 'FoodScreens',
        name2: 'Water Plus',
        image2: require('../images/water.png'),
        target2: 'WaterScreens',
        name3: 'Wallet',
        image3: require('../images/wallet.png'),
        target3: 'WalletScreens',
    },
    {
        id: 2,
        name1: 'Laundry',
        image1: require('../images/laundry.png'),
        target1: 'GambleScreens',
        name2: 'Super Market',
        image2: require('../images/shopping.png'),
        target2: 'GambleScreens',
        name3: 'My Diary',
        image3: require('../images/diaryy.png'),
        target3: 'GambleScreens'
    },
    {
        id: 3,
        name1: 'Mess Book',
        image1: require('../images/cookbook.png'),
        target1: 'GambleScreens',
        name2: 'Cash Book',
        image2: require('../images/book.png'),
        target2: 'GambleScreens',
        name3: 'Directory Book',
        image3: require('../images/contact.png'),
        target3: 'GambleScreens'
    },
    {
        id: 4,
        name1: 'Find Device',
        image1: require('../images/searchh.png'),
        target1: 'GambleScreens',
        name2: 'File Transfer',
        image2: require('../images/file.png'),
        target2: 'GambleScreens',
        name3: 'Prayer Time',
        image3: require('../images/time.png'),
        target3: 'GambleScreens'
    }
]

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


const HomePage = (props) => {

    const [active, setActive] = useState(false)
    const [modal, setModal] = React.useState(true)

    const renderItem1 = ({ item, index }) => {
        return (
            <>
                <View style={[styles.carouselView, { marginBottom: 30, padding: 0, paddingVertical: 15, justifyContent: 'center', backgroundColor: '#A2BDD0' }]}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate(item.target1)}
                        activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={item.image1} style={{ marginTop: 20 }} />
                        <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>{item.name1}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate(item.target2)}
                        activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={item.image2} style={{ marginTop: 20 }} />
                        <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>{item.name2}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate(item.target3)}
                        activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={item.image3} style={{ marginTop: 20 }} />
                        <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>{item.name3}</Text>
                    </TouchableOpacity>
                </View>
            </>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.carouselView}>
                <Image style={{ width: 100, height: 100 }} source={require('../images/foodimg.png')} />
                <View style={styles.rightSection}>
                    <Text style={[styles.itemText, { fontFamily: 'Montserrat-SemiBold', fontSize: 18 }]} numberOfLines={2}>Food is the best</Text>
                </View>
            </View>
        )
    }
    return (
        <>
            <Modal
                transparent={true}
                visible={modal}
            >
                <View style={{ backgroundColor: '#000e12', flex: 1, justifyContent: 'center', }}>
                    <View
                        style={{
                            backgroundColor: "#033c51",
                            marginHorizontal: 10,
                            borderRadius: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderColor: '#5fe2d8'
                        }}
                    >
                        <View style={{ height: 80, width: 80, alignItems: 'center', justifyContent: 'center', backgroundColor: '#033c51', marginTop: - 40, borderRadius: 50, borderWidth: 1, borderColor: '#5fe2d8' }}>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', fontFamily: 'Montserrat-Bold', color: 'white' }}>!</Text>
                        </View>
                        <Text style={{ fontSize: 20, fontFamily: 'Montserrat-Bold', marginTop: 20, color: 'white' }}>IMPORTANT MESSAGE</Text>
                        <Text style={{ textAlign: 'center', fontFamily: 'Montserrat-Regular', marginVertical: 10, fontSize: 16, color: 'white' }}>You have a valid package at the {"\n"} current location. Do you want to connect now ?</Text>
                        <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginVertical: 30, marginHorizontal: 17 }}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setModal(false)} style={{ width: '35%', backgroundColor: '#ff1b62', paddingVertical: 16, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 2 }}>
                                <Text style={{ color: 'white', fontFamily: 'Montserrat-Medium', fontSize: 16 }}>CANCEL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setModal(false)} style={{ width: '65%', backgroundColor: '#4efbe7', paddingVertical: 16, borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: '#333333', fontFamily: 'Montserrat-Regular', fontSize: 16 }}>CONNECT</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>



            <View style={styles.main}>
                <View style={{ position: 'absolute', flex: 1, zIndex: -10 }}>
                    <View style={{ borderRadius: width, width: width * 2, height: width * 2, backgroundColor: primaryColor, marginTop: -(width * 2 - 300), marginLeft: width * -0.75 }} />
                </View>
                <View style={[styles.topView]}>
                    <View style={styles.prof}>
                        <Image style={styles.logo} source={require('../images/logo.jpg')} />
                        <Image source={require('../images/shiyas.jpeg')} style={styles.profPic} />
                    </View>
                    <Text style={styles.profName} numberOfLines={1}>
                        Hi Muhammed Shiyas
                    </Text>
                    <View style={{ height: 130, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20, marginBottom: 30, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.id}>Your SG ID is</Text>
                        <Text style={[styles.id, { fontFamily: 'Montserrat-Bold', fontSize: 30, color: 'black' }]}>123-456-789</Text>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginLeft: 50 }} />
                        <View>
                            <Text style={{ textAlign: 'center', marginHorizontal: 9, fontFamily: 'Montserrat-Regular', fontSize: 18, color: 'black' }}>Services at your fingertips</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginRight: 50 }} />
                    </View>

                    <View style={[styles.carouselView, { padding: 0, borderRadius: 0, borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 20, marginHorizontal: 10, justifyContent: 'center', backgroundColor: '#A2BDD0' }]}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('FoodScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/food.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>Foodmate</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('WaterScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/water.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>Water Plus</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('WalletScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/wallet.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>Wallet</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={{ backgroundColor: '#A2BDD0', marginHorizontal: 10, paddingVertical: 25, textAlign: 'center', fontFamily: 'Montserrat-Medium', fontSize: 18, color: 'black' }}>Upcoming Services</Text>

                    <View style={[styles.carouselView, { borderRadius: 0, padding: 0, marginHorizontal: 10, justifyContent: 'center', backgroundColor: '#A2BDD0' }]}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('GambleScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/laundry.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>Laundry</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('GambleScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/shopping.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>Super Market</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('GambleScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/diaryy.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>My Diary</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.carouselView, { paddingTop: 20, borderRadius: 0, padding: 0, marginHorizontal: 10, justifyContent: 'center', backgroundColor: '#A2BDD0' }]}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('GambleScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/cookbook.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>Mess Book</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('GambleScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/book.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>Cash Book</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('GambleScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/contact.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>Directory Book</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.carouselView, { paddingVertical: 20, marginBottom: 30, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderRadius: 0, padding: 0, marginHorizontal: 10, justifyContent: 'center', backgroundColor: '#A2BDD0' }]}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('GambleScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/searchh.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>Find Device</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('GambleScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/file.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>File Transfer</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('GambleScreens')}
                            activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../images/time.png')} />
                            <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-SemiBold', marginTop: 10 }}>Prayer Time</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Carousel
                        data={data1}
                        inactiveSlideOpacity={0.4}
                        autoplay={true}
                        removeClippedSubviews={false}
                        autoplayDelay={300}
                        loop={true}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width - 20}
                        renderItem={renderItem1}
                        enableMomentum={true}
                        decelerationRate={'fast'}
                    />

                    <Carousel
                        data={data1}
                        inactiveSlideOpacity={0.4}
                        autoplay={true}
                        removeClippedSubviews={false}
                        autoplayDelay={300}
                        loop={true}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width - 20}
                        renderItem={renderItem1}
                        enableMomentum={true}
                        decelerationRate={'fast'}
                    /> */}

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginLeft: 50 }} />
                        <View>
                            <Text style={{ textAlign: 'center', marginHorizontal: 9, fontFamily: 'Montserrat-Regular', fontSize: 18, color: 'black' }}>Ads for you</Text>
                        </View>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black', marginRight: 50 }} />
                    </View>

                    <Carousel
                        data={data}
                        inactiveSlideOpacity={0.4}
                        autoplay={true}
                        removeClippedSubviews={false}
                        autoplayDelay={300}
                        loop={true}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width - 20}
                        renderItem={renderItem}
                        containerCustomStyle={{ marginVertical: 20, alignSelf: 'center' }}
                        enableMomentum={true}
                        decelerationRate={'fast'}
                    />
                </ScrollView >
                <TouchableOpacity onPress={() => setActive(true)} activeOpacity={0.8} style={{ position: 'absolute', height: 50, width: 50, backgroundColor: primaryColor, borderRadius: 50, bottom: 10, right: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name='menu' color={'white'} size={40} />
                </TouchableOpacity>
                <SwipeablePanel
                    fullWidth
                    isActive={active}
                    onClose={() => setActive(false)}
                    onPressCloseButton={() => setActive(false)}
                    showCloseButton={true}
                    closeOnTouchOutside={true}
                >
                    <View>
                        <View style={{ backgroundColor: primaryColor, height: 70, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 10, alignSelf: 'center', marginTop: 25, marginBottom: 40 }}>
                            <Image style={{ height: 60, width: 70 }} source={require('../images/logo.jpg')} />
                        </View>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setActive(false)}
                            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginVertical: 15 }}>
                            <Icon name='home' size={30} />
                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Medium', marginLeft: 15 }}>HOME</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => props.navigation.navigate('ActivePackage')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginVertical: 15 }}>
                            <Icon name='link' size={30} />
                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Medium', marginLeft: 15 }}>CONNECT TO VALID PACKAGE</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => props.navigation.navigate('AvailablePackages')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginVertical: 15 }}>
                            <Icon name='document-outline' size={30} />
                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Medium', marginLeft: 15 }}>AVAILABLE PLANS</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => props.navigation.replace('Profile')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginVertical: 15 }}>
                            <Icon name='person-circle-outline' size={30} />
                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Medium', marginLeft: 15 }}>YOUR PROFILE</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            // onPress={() => props.navigation.navigate('')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginVertical: 15 }}>
                            <Icon name='settings' size={30} />
                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Medium', marginLeft: 15 }}>APP SETTINGS</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                    </View>
                </SwipeablePanel>
            </View >
        </>
    )
}

export default HomePage

const styles = StyleSheet.create({
    main: {
        flex: 1,
        // backgroundColor: '#0e3d6b',
        backgroundColor: '#b7cce8'
    },
    sideMenu: {
        fontSize: 30,
        color: 'white',
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 30
    },
    topView: {
    },
    name: {
        fontFamily: 'Montserrat-Medium',
        width: Dimensions.get('window').width - 30,
        fontSize: 25
    },
    viewCenter: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    profileView: {
        width: Dimensions.get('window').width - 40,
        borderRadius: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 20,
        marginTop: 30
        // justifyContent: 'center'
    },
    profPic: {
        height: 80,
        width: 80,
        borderRadius: 50
    },
    username: {
        fontSize: 20,
        color: 'white',
        marginLeft: 14,
        marginTop: 10,
        width: '60%',
        fontFamily: 'Montserrat-SemiBold',
    },
    edit: {
        position: 'absolute',
        color: 'white',
        right: 14,
        top: 8
    },
    mainLayout: {
        backgroundColor: '#A2BDD0',
        width: Dimensions.get('window').width - 20,
        borderRadius: 10,
        // alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // marginBottom: 40,
        // padding: 30
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        marginBottom: 50,
    },
    featured: {
        fontFamily: 'Montserrat-SemiBold',
        marginVertical: 20,
        fontSize: 20,
        color: '#0e3d6b'
    },
    foodView: {
        // backgroundColor: '#7f8b94',
        height: 140,
        width: '45%',
        borderRadius: 14,
    },
    waterView: {
        // backgroundColor: '#7f8b94',
        height: 140,
        width: '45%',
        borderRadius: 14,
    },
    categImg: {
        height: '90%',
        width: '90%'
    },
    categText: {
        alignSelf: 'center',
        fontFamily: 'Montserrat-Medium',
        marginTop: 5,
        fontSize: 16,
        color: '#0e3d6b',
    },
    logo: {
        height: 80,
        width: 90,
        borderRadius: 10,
    },
    prof: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 20,
        alignSelf: 'center',
        marginTop: 40
    },
    profName: {
        fontFamily: 'Montserrat-SemiBold',
        color: 'white',
        fontSize: 28,
        marginLeft: 10,
        marginVertical: 20
    },
    id: {
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold'
    },
    icons: {
        height: 100,
        width: 100
    },
    carouselView: {
        backgroundColor: '#a3080c',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rightSection: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
    },
    itemText: {
        fontFamily: 'Montserrat-Medium',
        color: 'white',
        fontSize: 15
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#737373',
        borderRadius: 10
    }
})