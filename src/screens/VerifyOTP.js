import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import OTPInputView from '@twotalltotems/react-native-otp-input'

const VerifyOTP = (props) => {
    const [otp, setOtp] = useState('');

    return (
        <View style={styles.main}>
            <Image style={styles.logo} source={require('../images/logo.jpg')} />
            <View style={styles.secondView}>
                <View style={styles.container}>
                    <Text style={styles.continue}>Enter 6 Digit Code</Text>
                    <OTPInputView
                        style={{ width: '100%', height: '20%', marginBottom: 40 }}
                        pinCount={6}
                        autoFocusOnLoad
                        code={otp}
                        keyboardType='number-pad'
                        codeInputFieldStyle={{
                            height: 60,
                            borderRadius: 8,
                            borderBottomWidth: 1,
                            color: '#214778',
                            fontFamily: 'Montserrat-Regular',
                            backgroundColor: '#B5B5B5',
                            fontWeight: 'bold',
                            fontSize: 20,
                            borderColor: '#B5B5B5'
                        }}
                        codeInputHighlightStyle={{
                            // borderColor: '#292929',
                        }}
                        onCodeChanged={(code => {
                            setOtp(code)
                        })}
                    />
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('HomePage')}
                        activeOpacity={0.7}
                        style={styles.sendCode}>
                        <Text style={styles.sndText}>Verify and Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default VerifyOTP

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    secondView: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 20,
    },
    container: {
        width: Dimensions.get('window').width - 60,
    },
    continue: {
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        paddingVertical: 50,
        color: '#214778'
    },
    phone: {
        borderRadius: 30,
        backgroundColor: '#94989c',
        paddingLeft: 20,
        fontFamily: 'Montserrat-Regular',
        paddingVertical: 14
    },
    logo: {
        height: 60,
        width: 70,
        marginLeft: 30,
        marginTop: 20
    },
    sendCode: {
        borderRadius: 30,
        backgroundColor: '#1AFF9B',
        paddingVertical: 18,
        // marginVertical: 10,
        marginTop :20,
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
