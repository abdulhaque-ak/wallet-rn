import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import PhoneInput from "react-native-phone-number-input";

const SendOTP = (props) => {
    const [phone, setPhone] = React.useState()

    return (
        <View style={styles.main}>
            <Image style={styles.logo} source={require('../images/logo.jpg')} />
            <View style={styles.secondView}>
                <View style={styles.container}>
                    <Text style={styles.continue}>Continue with phone</Text>
                    <PhoneInput
                        defaultCode="IN"
                        layout="second"
                        placeholder='Phone Number'
                        onChangeFormattedText={(text) => {
                            setPhone(text)
                        }}
                        countryPickerButtonStyle={{ backgroundColor: '#d4d4d4', alignSelf: 'center', height: 55, borderTopLeftRadius: 25, borderBottomLeftRadius: 25, borderRightColor: 'white' }}
                        textInputStyle={{ height: 50, padding: 0, fontFamily: 'Montserrat-Regular' }}
                        textContainerStyle={{ height: 55, backgroundColor: '#d4d4d4', borderTopRightRadius: 25, borderBottomRightRadius: 25 }}
                        containerStyle={{ width: '100%' }}
                    />
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('VerifyOTP')}
                        activeOpacity={0.7}
                        style={styles.sendCode}>
                        <Text style={styles.sndText}>Send Code</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('Login')}
                        activeOpacity={0.7}
                        style={styles.goBack}>
                        <Text style={styles.backText}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default SendOTP

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#0e3d6b',
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
        paddingVertical: 50
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
        width: 60,
        marginLeft: 30,
        marginTop: 20
    },
    sendCode: {
        borderRadius: 30,
        backgroundColor: '#0e3d6b',
        paddingVertical: 18,
        marginVertical: 30,
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
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    },
    backText: {
        color: '#0e3d6b',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    }
})