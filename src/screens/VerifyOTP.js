import React, { useContext, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MainLayout from '../components/MainLayout'
import { showMessage } from "react-native-flash-message";
import axios from 'axios'
import DataContext from '../context/ItemProvider'

const VerifyOTP = (props) => {
    let num = props.route.params.otp
    let mobile = props.route.params.mobile
    // let email = props.route.params.email
    const [otp, setOtp] = useState('');
    const [load, setLoad] = React.useState(false)
    const [state, setState] = useContext(DataContext);

    const verifyOTP = () => {
        if (otp == '') {
            showMessage({
                type: 'danger',
                animated: true,
                animationDuration: 300,
                titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                message: 'OTP cannot be empty!'
            })
            return
        }
        else {
            const formData = new FormData()
            formData.append('mobile', mobile)
            formData.append('otp', num)
            setLoad(true)
            axios.post('http://dev1.websorbzdocker.online/users/api/otp-verification', formData)
                .then(async (res) => {
                    setLoad(false)
                    let token = res?.data?.data?.token
                    let userData = res?.data?.data?.user_data
                    if (res?.data?.error == false) {
                        props.navigation.replace('InitialUpload', { token: token })
                        // await AsyncStorage.setItem('token', token);
                        // await AsyncStorage.setItem('client_id', userData?.uuid);
                        // let message = res?.data?.messages
                        // setState({
                        //     signed: true,
                        //     token: token,
                        //     clientId: userData?.uuid
                        // })
                        // showMessage({
                        //     type: 'success',
                        //     animated: true,
                        //     animationDuration: 300,
                        //     titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                        //     message: message
                        // })
                        // let data = res?.data
                        // let parsedData = JSON.parse(data)
                        // let token = parsedData?.data?.token
                        // console.log('data', res?.data);
                        // let userData = parsedData?.data?.user_data

                    }
                    return
                })
                .catch((error) => {
                    setLoad(false)
                    let err = error?.response?.data?.message
                    console.log('err', err);
                    if (error?.response != undefined) {
                        showMessage({
                            type: 'danger',
                            animated: true,
                            animationDuration: 300,
                            titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                            message: err
                        })
                    }
                    return
                    // if (err == undefined) {
                    //     let err2 = error?.response?.data?.message?.email
                    //     showMessage({
                    //         type: 'danger',
                    //         animated: true,
                    //         animationDuration: 300,
                    //         titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                    //         message: err2
                    //     })
                    //     return
                    // }
                    // showMessage({
                    //     type: 'danger',
                    //     animated: true,
                    //     animationDuration: 300,
                    //     titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                    //     message: err
                    // })
                    // return
                })
        }
        // props.navigation.navigate('UserDetails')
    }
    return (
        <MainLayout>
            <Modal
                visible={load}
                transparent={true}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#000000DC' }}>
                    <View style={{ height: 30, width: 30, backgroundColor: '#55f0c2', alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                        <ActivityIndicator size={'small'} color={'black'} />
                    </View>
                </View>
            </Modal>
            <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.logo} source={require('../images/logo.jpg')} />
            </View>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <Text style={styles.continue}>Enter the OTP number</Text>
                        <OTPInputView
                            style={{ width: '100%', height: '25%', marginBottom: 40, alignSelf: 'center' }}
                            pinCount={6}
                            autoFocusOnLoad
                            code={otp}
                            selectionColor='red'
                            keyboardType='number-pad'
                            // placeholderCharacter='_'
                            codeInputFieldStyle={{
                                height: 55,
                                borderRadius: 10,
                                borderBottomWidth: 1,
                                color: 'white',
                                fontFamily: 'Montserrat-Regular',
                                backgroundColor: '#012530',
                                fontWeight: 'bold',
                                fontSize: 20,
                                borderColor: '#015c67'
                            }}
                            codeInputHighlightStyle={{
                                borderColor: '#55f0c2',
                            }}
                            onCodeChanged={(code => {
                                setOtp(code)
                            })}
                        />
                        <TouchableOpacity
                            onPress={verifyOTP}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>VERIFY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            {/* <View style={styles.main}>
                <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.logo} source={require('../images/logo.jpg')} />
                </View>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <Text style={styles.continue}>Enter 4 Digit Code</Text>
                        <OTPInputView
                            style={{ width: '80%', height: '20%', marginBottom: 40, alignSelf: 'center' }}
                            pinCount={4}
                            autoFocusOnLoad
                            code={otp}
                            keyboardType='number-pad'
                            codeInputFieldStyle={{
                                height: 60,
                                borderRadius: 10,
                                borderBottomWidth: 1,
                                color: '#214778',
                                fontFamily: 'Montserrat-Regular',
                                backgroundColor: 'white',
                                fontWeight: 'bold',
                                fontSize: 20,
                                borderColor: '#214778'
                            }}
                            codeInputHighlightStyle={{
                                // borderColor: '#292929',
                            }}
                            onCodeChanged={(code => {
                                setOtp(code)
                            })}
                        />
                        <TouchableOpacity
                            onPress={verifyOTP}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>Verify and Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View > */}
        </MainLayout>
    )
}

export default VerifyOTP

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    secondView: {
        borderRadius: 20,
        backgroundColor: '#02253790',
        alignItems: 'center',
        paddingVertical: 20,
        marginHorizontal: 5,
    },
    container: {
        width: Dimensions.get('window').width - 30,
    },
    continue: {
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
        marginBottom: 30,
        color: 'white',
        textAlign: 'center'
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
        // marginLeft: 30,
        marginTop: 20
    },
    sendCode: {
        borderRadius: 10,
        backgroundColor: '#55f0c2',
        paddingVertical: 18,
        // marginVertical: 10,
        marginTop: 20,
        alignItems: 'center'
    },
    goBack: {
        borderRadius: 30,
        backgroundColor: 'white',
        paddingVertical: 18,
        alignItems: 'center',
        borderColor: '#0e3d6b',
        borderWidth: 3
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
    }
})
