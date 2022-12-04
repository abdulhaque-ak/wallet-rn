import React, { useContext, useEffect } from 'react'
import { Dimensions, ScrollView, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MainLayout from '../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'
import SwipeablePanel from 'react-native-sheets-bottom';
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage'
import DataContext from '../context/ItemProvider'

const ActivePackage = (props) => {
    const [modal, setModal] = React.useState(true)
    const [active, setActive] = React.useState(false)
    const [datas, setData] = React.useState('')
    const [state, setState] = useContext(DataContext);

    useEffect(() => {
        async function fetchData() {
            let uuid = await AsyncStorage.getItem('client_id');
            setData(uuid)
        }
        fetchData();
    }, [])
    

    const goNext = () => {
        props.navigation.navigate('Profile')
    }

    const data = [
        {
            id: 1,
            icon1: require('../images/food.png'),
            title1: 'Foodmate',
            nav1: 'FoodScreens',
            icon2: require('../images/water.png'),
            title2: 'Water Plus',
            nav2: 'WaterScreens',
            icon3: require('../images/wallet.png'),
            title3: 'Wallet',
            nav3: 'WalletScreens',
        },
        {
            id: 2,
            icon1: require('../images/laundry.png'),
            title1: 'Laundry',
            nav1: 'GambleScreens',
            icon2: require('../images/shopping.png'),
            title2: 'Super Market',
            nav2: 'GambleScreens',
            icon3: require('../images/diaryy.png'),
            title3: 'My Diary',
            nav3: 'GambleScreens',
        },
        {
            id: 3,
            icon1: require('../images/cookbook.png'),
            title1: 'Mess Book',
            nav1: 'GambleScreens',
            icon2: require('../images/book.png'),
            title2: 'Cash Book',
            nav2: 'GambleScreens',
            icon3: require('../images/contact.png'),
            title3: 'Directory Book',
            nav3: 'GambleScreens',
        },
        {
            id: 4,
            icon1: require('../images/searchh.png'),
            title1: 'Find Device',
            nav1: 'GambleScreens',
            icon2: require('../images/file.png'),
            title2: 'File Transfer',
            nav2: 'GambleScreens',
            icon3: require('../images/time.png'),
            title3: 'Prayer Time',
            nav3: 'GambleScreens',
        },
    ]

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.carouselView}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate(item.nav1)}
                    activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={item.icon1} resizeMode='center' />
                    <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-Medium' }}>{item.title1}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate(item.nav2)}
                    activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={item.icon2} resizeMode='center' />
                    <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-Medium' }}>{item.title2}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate(item.nav3)}
                    activeOpacity={0.8} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={item.icon3} resizeMode='center' />
                    <Text style={{ color: '#0e3d6b', fontFamily: 'Montserrat-Medium' }}>{item.title3}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
            {/* {modal &&
                <MainLayout>
                    <Modal
                        transparent={true}
                        visible={modal}
                    >
                        <View style={{ backgroundColor: '#000e1299', flex: 1, justifyContent: 'center', }}>
                            <View
                                style={{
                                    backgroundColor: "#033c51",
                                    marginHorizontal: 10,
                                    borderRadius: 20,
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
                                        <Text style={{ color: '#333333', fontFamily: 'Montserrat-Medium', fontSize: 16 }}>CONNECT</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </MainLayout>
            } */}
            <MainLayout>
                <View style={styles.top}>
                    <Image style={styles.logo} source={require('../images/logo.jpg')} />
                    <TouchableOpacity
                        onPress={goNext}
                        activeOpacity={0.7}
                        style={styles.profIcon}>
                        <Icon name='person' size={18} color={'white'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <View style={{ backgroundColor: '#021d24', borderRadius: 10, borderWidth: 1, borderColor: '#55f0c2' }}>
                            <View style={{ padding: 10 }}>
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={styles.text}>Your SG ID</Text>
                                    <Text style={[styles.text, { fontSize: 17, fontFamily: 'Montserrat-Medium' }]}>{datas ? datas : '*** *** ***'}</Text>
                                </View>
                                <View>
                                    <Text style={styles.text}>Connected at</Text>
                                    <Text style={[styles.text, { fontSize: 17, fontFamily: 'Montserrat-Medium' }]}>Al Shuwaib System 1</Text>
                                </View>
                            </View>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={[styles.items, { marginVertical: 25 }]}>
                                <View style={styles.topView}>
                                    <View style={styles.topView2}>
                                        <Text style={styles.pckText}>Active</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.row}>
                                        <Icon name='timer-outline' color={'white'} size={20} />
                                        <Text style={[styles.texts, styles.packName]} numberOfLines={1}>SG Premium Membership</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <View style={styles.row}>
                                            <Icon name='calendar-outline' color={'white'} style={{ marginRight: 4 }} />
                                            < Text style={[styles.texts, { fontFamily: 'Montserrat-SemiBold', fontSize: 15 }]}>17-02-2022</Text>
                                        </View>
                                        <View style={styles.row}>
                                            <Text style={styles.hyphen}>
                                                -
                                            </Text>
                                            < Text style={[styles.texts, { fontFamily: 'Montserrat-SemiBold', fontSize: 15 }]}>17-03-2022</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.rightText}>30 Days</Text>
                                    <Text style={styles.rightText}>30 AED</Text>
                                    <View style={[styles.row, { justifyContent: 'flex-end' }]}>
                                        <Icon name='caret-up' color={'white'} style={{ marginRight: 2 }} />
                                        <Text style={[styles.rightText, { fontFamily: 'Montserrat-Regular' }]}>6 MB</Text>
                                    </View>
                                    <View style={[styles.row, { justifyContent: 'flex-end' }]}>
                                        <Icon name='caret-down' color={'white'} style={{ marginRight: 2 }} />
                                        <Text style={[styles.rightText, { fontFamily: 'Montserrat-Regular' }]}>6 MB</Text>
                                    </View>
                                </View>
                            </View>
                            <Text style={styles.service}>Services at your findertips</Text>
                            <Carousel
                                data={data}
                                inactiveSlideOpacity={0.4}
                                removeClippedSubviews={false}
                                sliderWidth={Dimensions.get('window').width}
                                itemWidth={Dimensions.get('window').width - 50}
                                renderItem={renderItem}
                                containerCustomStyle={{ marginTop: 0, marginBottom: 10, alignSelf: 'center' }}
                                enableMomentum={true}
                                decelerationRate={'fast'}
                            />
                            <View style={{ height: 80, backgroundColor: '#021d24', marginTop: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../images/ad.png')} />
                            </View>

                        </ScrollView>
                    </View>
                </View>
                <TouchableOpacity onPress={() => setActive(true)} activeOpacity={0.8} style={{ position: 'absolute', height: 50, width: 50, backgroundColor: '#022739', borderRadius: 50, bottom: 10, right: 10, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name='menu' color={'white'} size={30} />
                </TouchableOpacity>
                <SwipeablePanel
                    fullWidth
                    isActive={active}
                    onClose={() => setActive(false)}
                    onPressCloseButton={() => setActive(false)}
                    showCloseButton={true}
                    closeOnTouchOutside={true}
                    closeRootStyle={{ backgroundColor: '#022739' }}
                >
                    <View>
                        <View style={{ backgroundColor: '#022739', height: 70, width: 80, alignItems: 'center', justifyContent: 'center', borderRadius: 10, alignSelf: 'center', marginTop: 25, marginBottom: 40 }}>
                            <Image style={{ height: 60, width: 70 }} source={require('../images/logo.jpg')} />
                        </View>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => setActive(false)}
                            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginVertical: 15 }}>
                            <Icon name='home' size={30} color={'#022739'} />
                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Medium', marginLeft: 15, color: '#022739' }}>HOME</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => props.navigation.navigate('ActivePackage')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginVertical: 15 }}>
                            <Icon name='link' size={30} color={'#022739'} />
                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Medium', marginLeft: 15, color: '#022739' }}>CONNECT TO VALID PACKAGE</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => props.navigation.navigate('AvailablePackages')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginVertical: 15 }}>
                            <Icon name='document-outline' size={30} color={'#022739'} />
                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Medium', marginLeft: 15, color: '#022739' }}>AVAILABLE PLANS</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => props.navigation.navigate('Profile')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginVertical: 15 }}>
                            <Icon name='person-circle-outline' size={30} color={'#022739'} />
                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Medium', marginLeft: 15, color: '#022739' }}>YOUR PROFILE</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={async () => {
                                await AsyncStorage.clear()
                                setState({ signed: false })
                            }}
                            style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 30, marginVertical: 15 }}>
                            <Icon name='close' size={30} color={'#022739'} />
                            <Text style={{ fontSize: 16, fontFamily: 'Montserrat-Medium', marginLeft: 15, color: '#022739' }}>Logout</Text>
                        </TouchableOpacity>
                        <View style={{ borderBottomColor: '#c5c9c6', borderBottomWidth: 1 }} />
                    </View>
                </SwipeablePanel>
            </MainLayout>
        </>
    )
}

export default ActivePackage

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    secondView: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#02273990',
        alignItems: 'center',
        paddingBottom: 2,
        marginHorizontal: 5,
        marginBottom: 10
    },
    container: {
        flex: 1,
        marginTop: 10,
        width: Dimensions.get('window').width - 50,
    },
    logo: {
        height: 60,
        width: 85,
    },
    profIcon: {
        position: 'absolute',
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#033c51',
        borderRadius: 30,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    top: {
        height: Dimensions.get('window').height * (1 / 6),
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14
    },
    service: {
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 18,
        marginTop: 20,
        marginBottom: 10
    },
    items: {
        backgroundColor: '#021620',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginBottom: 0,
        borderWidth: 1,
        borderColor: '#55f0c2',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    pckText: {
        color: 'black',
        fontFamily: 'Montserrat-Medium',
        fontSize: 15
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    texts: {
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    },
    packName: {
        marginLeft: 5,
        width: 200,
    },
    hyphen: {
        marginLeft: 2,
        marginRight: 2,
        color: 'white'
    },
    rightText: {
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'right'
    },
    topView: {
        position: 'absolute',
        alignItems: 'center',
        left: 0,
        right: 0,
        top: -10,
    },
    topView2: {
        backgroundColor: '#00ff00',
        paddingHorizontal: 8,
        borderRadius: 6
    },
    carouselView: {
        backgroundColor: 'white',
        paddingVertical: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})
