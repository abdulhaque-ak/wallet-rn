import React, { useEffect } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput, ActivityIndicator, Modal } from 'react-native'
import PhoneInput from "react-native-phone-number-input";
import AsyncStorage from '@react-native-async-storage/async-storage'
import MainLayout from '../components/MainLayout';
import { showMessage } from "react-native-flash-message";
import axios from 'axios'
import { baseURL } from '../common';

const SendOTP = (props) => {

    const [mobile, setMobile] = React.useState('')
    const [load, setLoad] = React.useState(false)

    const validate = () => {
        const formData = new FormData()
        formData.append('mobile', mobile)
        if (mobile == '') {
            showMessage({
                type: 'danger',
                animated: true,
                animationDuration: 300,
                titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                message: 'Mobile Number cannot be empty!'
            })
            return
        }
        else {
            // props.navigation.replace('VerifyOTP')

            setLoad(true)
            axios.post('http://dev1.websorbzdocker.online/users/api/send-otp', formData)
                .then(async (res) => {
                    setLoad(false)
                    if (res?.data?.status == 200) {
                        let otp = res?.data?.data?.user_data?.otp
                        showMessage({
                            type: 'success',
                            animated: true,
                            animationDuration: 300,
                            titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                            message: 'OTP sent to your mobile number'
                        })
                        props.navigation.replace('VerifyOTP', { otp: otp, mobile: mobile })
                    }
                    // if (res?.data?.messages) {
                    //     let message = res?.data?.messages
                    //     let data = res?.request?._response
                    //     let parsedData = JSON.parse(data)
                    //     let otp = parsedData?.data?.user_data?.otp
                    //     showMessage({
                    //         type: 'success',
                    //         animated: true,
                    //         animationDuration: 300,
                    //         titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                    //         message: message
                    //     })
                    //     props.navigation.replace('VerifyOTP', { otp: otp, email: email, password: password })
                    // }
                })
                .catch((error) => {
                    setLoad(false)
                    // let errorData = error?.response?.data
                    // console.log('errorData', errorData);
                    // if (errorData?.error == true) {
                    //     if (errorData?.message?.email) {
                    //         showMessage({
                    //             type: 'danger',
                    //             animated: true,
                    //             animationDuration: 300,
                    //             titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                    //             message: errorData.message?.email
                    //         })
                    //         return
                    //     } else if (errorData?.messages) {
                    //         showMessage({
                    //             type: 'danger',
                    //             animated: true,
                    //             animationDuration: 300,
                    //             titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                    //             message: errorData.messages
                    //         })
                    //         return
                    //     } else if (errorData?.message) {
                    //         showMessage({
                    //             type: 'danger',
                    //             animated: true,
                    //             animationDuration: 300,
                    //             titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                    //             message: errorData.message
                    //         })
                    //         return
                    //     }
                    // }
                })
        }
    }

    return (
        <MainLayout>
            <Modal
                visible={load}
                transparent={true}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#000000DC' }}>
                    <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular', marginBottom: 10 }}>Just a moment!</Text>
                    <View style={{ height: 30, width: 30, backgroundColor: '#55f0c2', alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                        <ActivityIndicator size={'small'} color={'black'} />
                    </View>
                </View>
            </Modal>
            <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.logo} source={require('../images/logo.jpg')} />
            </View>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <ImageBackground style={styles.secondView} blurRadius={1}>
                    <View style={styles.container}>
                        <Text style={styles.continue}>Login</Text>
                        {/* <Text style={styles.phoneNo}>Email Id</Text>
                        <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Password</Text>
                        <TextInput style={styles.input} onChangeText={(text) => setPassword(text)} /> */}

                        <Text style={styles.phoneNo}>Mobile Number</Text>
                        <TextInput style={styles.input} keyboardType='number-pad' onChangeText={(text) => setMobile(text)} />
                        {/* <PhoneInput
                            defaultCode="AE"
                            layout="second"
                            placeholder={' '}
                            // ChangeFormattedText={setPhone}
                            onChangeText={(phone) => {
                                setPhone(phone)
                                // dispatch({ type: 'ADD_USER', payload: phone })
                                // dispatch({ type: 'SET_LOADING', payload: false })
                            }}
                            countryPickerButtonStyle={{ backgroundColor: 'white', alignSelf: 'center', height: 55, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderRightColor: 'white' }}
                            textInputStyle={{ height: 50, padding: 0, color: '#214778', fontFamily: 'Montserrat-Bold' }}
                            textContainerStyle={{ height: 55, backgroundColor: 'white', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
                            containerStyle={{ width: '100%', backgroundColor: '#023643' }}
                            codeTextStyle={{ color: '#214778', fontFamily: 'Montserrat-Medium' }}
                        /> */}
                        <TouchableOpacity
                            onPress={validate}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>GET OTP</Text>
                        </TouchableOpacity>

                        {/* <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                            <Text style={[styles.phoneNo, { marginBottom: 0 }]}>Don't have an account? </Text>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={() => props.navigation.navigate('SignUp')}
                            >
                                <Text style={{ color: '#55f0c2', fontFamily: 'Montserrat-Bold' }}>{"  "}Sign Up</Text>
                            </TouchableOpacity>
                        </View> */}
                    </View>
                </ImageBackground>
            </ScrollView>
        </MainLayout >
        // <View style={styles.main}>
        //     <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
        //         <Image style={styles.logo} source={require('../images/logo.jpg')} />
        //     </View>
        //     <View style={styles.secondView}>
        //         <View style={styles.container}>
        //             <Text style={styles.continue}>Continue with phone</Text>
        //             <Text style={styles.phoneNo}>Mobile Number</Text>
        //             <PhoneInput
        //                 defaultCode="AE"
        //                 layout="second"
        //                 placeholder={' '}
        //                 // ChangeFormattedText={setPhone}
        //                 onChangeText={(phone) => {
        //                     setPhone(phone)
        //                     // dispatch({ type: 'ADD_USER', payload: phone })
        //                     // dispatch({ type: 'SET_LOADING', payload: false })
        //                 }}
        //                 countryPickerButtonStyle={{ backgroundColor: 'white', alignSelf: 'center', height: 55, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, borderRightColor: 'white' }}
        //                 textInputStyle={{ height: 50, padding: 0, color: '#214778', fontWeight: 'bold', fontFamily: 'Montserrat-Regular' }}
        //                 textContainerStyle={{ height: 55, backgroundColor: 'white', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
        //                 containerStyle={{ width: '100%', backgroundColor: '#b7cce8' }}
        //                 codeTextStyle={{ color: '#214778', fontWeight: 'bold' }}
        //             />
        //             <TouchableOpacity
        //                 onPress={() => {
        //                     if (phone == '') {
        //                         alert('Mobile number cannot be empty!')
        //                     } else {
        //                         props.navigation.navigate('VerifyOTP', phone)
        //                     }
        //                 }}
        //                 activeOpacity={0.7}
        //                 style={styles.sendCode}>
        //                 <Text style={styles.sndText}>Get OTP</Text>
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        // </View >
    )
}

export default SendOTP

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    secondView: {
        // flex: 1,
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
        borderRadius: 20,
        backgroundColor: '#022c3c90',
        alignItems: 'center',
        paddingVertical: 30,
        marginHorizontal: 5,
        marginBottom: 10,
    },
    container: {
        width: Dimensions.get('window').width - 30,
    },
    continue: {
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
        color: 'white',
        textAlign: 'center',
        marginBottom: 30
    },
    phone: {
        borderRadius: 30,
        backgroundColor: '#94989c',
        paddingLeft: 20,
        fontFamily: 'Montserrat-Regular',
        paddingVertical: 14
    },
    logo: {
        height: 100,
        width: 125,
        marginTop: 20,
    },
    sendCode: {
        borderRadius: 10,
        backgroundColor: '#55f0c2',
        paddingVertical: 18,
        marginTop: 30,
        alignItems: 'center'
    },
    goBack: {
        borderRadius: 30,
        backgroundColor: 'white',
        paddingVertical: 18,
        alignItems: 'center',
        borderColor: '#1AFF9B',
        borderWidth: 2
    },
    sndText: {
        color: '#214778',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    },
    backText: {
        color: '#0e3d6b',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    },
    phoneNo: {
        fontFamily: 'Montserrat-Regular',
        marginBottom: 5,
        marginLeft: 3,
        color: 'white'
    },
    input: {
        backgroundColor: 'white',
        height: 55,
        borderRadius: 10,
        paddingLeft: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'black'
    }
})