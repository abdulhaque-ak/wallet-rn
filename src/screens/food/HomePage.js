import React, { useEffect } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, ToastAndroid } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-snap-carousel';
// import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import { primaryColor } from '@common'
import CALENDAR from '../../components/Calendar';
import Header from './components/Header';
import MainLayout from '../../components/MainLayout';

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
    const [markedDates, setMarkedDates] = React.useState({})
    const [isStartDatePicked, setIsStartDatePicked] = React.useState(false)
    const [isEndDatePicked, setIsEndDatePicked] = React.useState(false)
    const [startDate, setStartDate] = React.useState('')
    const [modalVisible, setModalVisible] = React.useState(true)
    const [confirmModal, setConfirmModal] = React.useState(false)
    const [paymentDt, setPaymentDt] = React.useState('')
    const [date, setDate] = React.useState('')
    const [formattedDate, setFormattedDate] = React.useState('')
    const [type, setType] = React.useState('')

    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.carouselView}>
                <Image style={{ width: 100, height: 100 }} source={require('../../images/foodimg.png')} />
                <View style={styles.rightSection}>
                    <Text style={[styles.itemText, { marginTop: 5 }]}>Enjoy {item.offer} Off</Text>
                    <Text style={[styles.itemText, { fontFamily: 'Montserrat-SemiBold', fontSize: 18 }]} numberOfLines={2}>{item.name}</Text>
                    <Text style={[styles.itemText, { position: 'absolute', bottom: 0 }]}>*Order on above 150</Text>
                </View>
            </View>
        )
    }

    const onDayPress = (day) => {
        let markedDates = {}
        markedDates[day.dateString] = { startingDay: true, selected: true, selectedColor: primaryColor };
        setMarkedDates(markedDates)
        // if (isStartDatePicked == false) {
        //     let markedDates = {}
        //     markedDates[day.dateString] = { startingDay: true, selected: true, selectedColor: primaryColor };
        //     setMarkedDates(markedDates)
        //     setIsStartDatePicked(true)
        //     setIsEndDatePicked(false)
        //     setStartDate(day.dateString)
        // }
        // else {
        //     let mrkdDates = markedDates
        //     let strtDate = moment(startDate);
        //     let endDate = moment(day.dateString);
        //     let range = endDate.diff(startDate, 'days')
        //     if (range > 0) {
        //         for (let i = 1; i <= range; i++) {
        //             let tempDate = strtDate.add(1, 'day');
        //             tempDate = moment(tempDate).format('YYYY-MM-DD')
        //             if (i < range) {
        //                 mrkdDates[tempDate] = { selected: true, selectedColor: primaryColor };
        //             } else {
        //                 mrkdDates[tempDate] = { endingDay: true, selected: true, selectedColor: primaryColor };
        //             }
        //         }
        //         setMarkedDates(mrkdDates)
        //         setIsStartDatePicked(false)
        //         setIsEndDatePicked(true)
        //         setStartDate('')
        //     } else {
        //         alert('Select an upcomming date!');
        //     }
        // }
    }

    const currDate = (date) => {
        setDate(date)
        let dt = new Date()
        let nextMon = dt.getMonth() + 2
        let month1 = ''
        nextMon == 1 || nextMon == 13 ? month1 = 'Jan' : nextMon == 2 ? month1 = 'Feb' : nextMon == 3 ? month1 = 'Mar' : nextMon == 4 ? month1 = 'Apr' : nextMon == 5 ? month1 = 'May' : nextMon == 6 ? month1 = 'Jun' : nextMon == 7 ? month1 = 'Jul' : nextMon == 8 ? month1 = 'Aug' : nextMon == 9 ? month1 = 'Sep' : nextMon == 10 ? month1 = 'Oct' : nextMon == 11 ? month1 = 'Nov' : month1 = 'Dec'
        let paymentDate = date < 10 ? ("0" + date) + "-" + month1 + "-" + dt.getFullYear() : date + "-" + month1 + "-" + dt.getFullYear()
        setPaymentDt(paymentDate)
        // date1 == 12 && 
        // console.log('month', mn < 9 ? 0 + `${dt.getMonth() + 2}` : `${dt.getMonth() + 1}`)
        // let nxtMnth = dt.getMonth() + 2 < 10 ? 0 + `${dt.getMonth() + 2}` : dt.getMonth() + 2
        // console.log('month', date + "-" + nxtMnth + "-" + dt.getFullYear())
    }
    return (
        <MainLayout>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Header />
                    {/* <View style={styles.header}>
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
                </View> */}
                    <View style={styles.contents}>
                        <View style={styles.container}>
                            <Modal
                                transparent={true}
                                visible={modalVisible}
                            >
                                <View style={{ backgroundColor: '#000e12e6', flex: 1, justifyContent: 'center', paddingHorizontal: 10 }}>
                                    <View style={{ backgroundColor: '#033c51', paddingVertical: 15, marginBottom: 3, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                        <Text style={{ color: 'white', fontFamily: 'Montserrat-Medium', fontSize: 17, textAlign: 'center' }}>Choose your payment date</Text>
                                    </View>
                                    <CALENDAR
                                        date={date}
                                        changeDate={currDate}
                                    />
                                    {/* <Calendar
                                    minDate={new Date()}
                                    markingType='dot'
                                    style={{ marginBottom: 10 }}
                                    markedDates={markedDates}
                                    onDayPress={onDayPress}
                                /> */}
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (paymentDt == '') {
                                                alert("Please choose your payment date!")
                                            } else {
                                                setConfirmModal(true)
                                                // let currDt = new Date()
                                                // let currDate = currDt.getMonth() + 1 < 10 ? (currDt.getDate() + "-" + ("0" + (currDt.getMonth() + 1)) + "-" + currDt.getFullYear()) : (currDt.getDate() + "-" + parseInt(currDt.getMonth() + 1) + "-" + currDt.getFullYear())
                                                // let selectedDt = moment(Object.keys(markedDates)[0]).format('DD-MM-YYYY')
                                                // if (currDate == selectedDt) {
                                                //     alert(`Sorry! You can't choose today's date!`)
                                                // } else {
                                                //     setConfirmModal(true)
                                                // }
                                            }
                                        }}
                                        activeOpacity={0.7}
                                        style={{ backgroundColor: '#55f0c2', alignItems: 'center', justifyContent: 'center', marginTop: 10, paddingVertical: 15, borderRadius: 10 }}>
                                        <Text style={{ color: primaryColor, fontFamily: 'Montserrat-SemiBold', fontSize: 15 }}>Confirm Date</Text>
                                    </TouchableOpacity>
                                </View>
                            </Modal>

                            <Modal
                                transparent={true}
                                visible={confirmModal}
                            >
                                <View style={{ backgroundColor: '#000e12e6', flex: 1, justifyContent: 'center', paddingHorizontal: 10 }}>
                                    <View style={{
                                        backgroundColor: '#033c51',
                                        paddingTop: 30,
                                        paddingBottom: 10,
                                        paddingLeft: 10,
                                        borderRadius: 10,
                                        borderWidth: 1,
                                        borderColor: '#5fe2d8'
                                    }}>
                                        <View style={{ marginTop: 20, paddingHorizontal: 5 }}>
                                            <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular', fontSize: 18 }}>Are you sure you want to confirm this date ?</Text>
                                        </View>

                                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 20, marginVertical: 20, paddingHorizontal: 5, color: 'white' }}>
                                            {/* {moment(Object.keys(markedDates)[0]).format('DD-MM-YYYY')} */}
                                            {paymentDt}
                                        </Text>

                                        {/* <Text style={{ color: 'black', fontFamily: 'Montserrat-Regular', fontSize: 20, paddingHorizontal: 5 }}>
                                        <Text style={{ fontFamily: 'Montserrat-Bold' }}>
                                            {moment(Object.keys(markedDates)[0]).format('DD-MM-YYYY')}
                                        </Text>
                                        <Text style={{ color: primaryColor, fontSize: 18 }}>{" "}to{" "}</Text>
                                        <Text style={{ fontFamily: 'Montserrat-Bold' }}>
                                            {moment(Object.keys(markedDates)[Object.keys(markedDates).length - 1]).format('DD-MM-YYYY')}
                                        </Text>
                                    </Text> */}

                                        <View style={{ flexDirection: 'row', marginRight: 10, justifyContent: 'space-between' }}>
                                            <TouchableOpacity
                                                activeOpacity={0.7}
                                                onPress={() => {
                                                    setConfirmModal(false)
                                                }}
                                                style={{ width: '48%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ff1b62', paddingVertical: 14, borderRadius: 10 }}>
                                                <Text style={{ color: 'white', fontFamily: 'Montserrat-SemiBold', fontSize: 18 }}>No</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                activeOpacity={0.7}
                                                onPress={() => {
                                                    setModalVisible(false)
                                                    setConfirmModal(false)
                                                    ToastAndroid.showWithGravity(
                                                        `You payment date will be ${paymentDt}`,
                                                        ToastAndroid.SHORT,
                                                        ToastAndroid.BOTTOM,
                                                    )
                                                }}
                                                style={{ width: '48%', alignItems: 'center', justifyContent: 'center', backgroundColor: '#4efbe7', paddingVertical: 17, borderRadius: 10 }}>
                                                <Text style={{ color: '#333333', fontFamily: 'Montserrat-SemiBold', fontSize: 18 }}>Yes</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                            {/* <View style={styles.searchSection}>
                            <Icon style={styles.searchIcon} name="ios-search" size={20} color="#04564B" />
                            <TextInput
                                style={styles.input}
                                placeholder="Search here.."
                                placeholderTextColor={'#04564B'}
                            />
                        </View> */}

                            <View style={[styles.categText, { marginTop: 20 }]}>
                                <Text style={styles.catText}>Select Category</Text>
                                {/* <Text style={styles.cAll}>See All</Text> */}
                            </View>
                            <View style={{ marginHorizontal: 10 }}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => {
                                        setType('vg')
                                    }}
                                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ height: 20, width: 20, borderRadius: 20, borderWidth: 1, borderColor: '#807d7d', backgroundColor: type == 'vg' ? '#ff1b62' : 'white' }} />
                                    <Text style={styles.cats}>Veg</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => {
                                        setType('nvg')
                                    }}
                                    style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
                                    <View style={{ height: 20, width: 20, borderRadius: 20, borderWidth: 1, borderColor: '#807d7d', backgroundColor: type == 'nvg' ? '#ff1b62' : 'white' }} />
                                    <Text style={styles.cats}>Non-Veg</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    onPress={() => {
                                        setType('snvg')
                                    }}
                                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ height: 20, width: 20, borderRadius: 20, borderWidth: 1, borderColor: '#807d7d', backgroundColor: type == 'snvg' ? '#ff1b62' : 'white' }} />
                                    <Text style={styles.cats}>Semi-non-Veg</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.categText, { marginTop: 20, marginBottom: 10 }]}>
                                <Text style={styles.catText}>What would you like to have?</Text>
                            </View>
                            <View style={{ marginHorizontal: 10, paddingBottom: 20 }}>
                                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "North Indian" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#4efbe7' }}>
                                            <Image source={require('../../images/north.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>North Indian</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "South Indian" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#4efbe7' }}>
                                            <Image source={require('../../images/south.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>South Indian</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "Arabian" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#4efbe7' }}>
                                            <Image source={require('../../images/arabic.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>Arabian</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "Turkish" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#4efbe7' }}>
                                            <Image source={require('../../images/kebab.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>Turkish</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "Chinese" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#4efbe7' }}>
                                            <Image source={require('../../images/chinese.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>Chinese</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center' }}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => props.navigation.navigate('CategoryDetail1', { title: "Russian" })}
                                            style={{ paddingVertical: 20, marginRight: 0, justifyContent: 'center', alignItems: 'center', marginRight: 5, backgroundColor: '#4efbe7' }}>
                                            <Image source={require('../../images/russian.png')} />
                                        </TouchableOpacity>
                                        <Text style={styles.foodName}>Russian</Text>
                                    </View>
                                </View>
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
                                containerCustomStyle={{ marginTop: 0, marginBottom: 10, alignSelf: 'center' }}
                                enableMomentum={true}
                                decelerationRate={'fast'}
                            />
                        </View>
                    </View>
                </View >
            </ScrollView >
        </MainLayout>
    )
}

export default HomePage

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
        backgroundColor: '#02273990',
        borderTopLeftRadius: 44,
        borderTopRightRadius: 44,
        marginHorizontal: 5
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
        width: '60%',
        height: '100%'
    },
    categText: {
        marginHorizontal: 10,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    catText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        color: 'white',
    },
    cAll: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: '#04564B'
    },
    itemName: {
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
    },
    cats: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        color: 'white',
        marginLeft: 10
    },
    foodName: {
        color: 'white',
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center',
        marginTop: 5
    }
})