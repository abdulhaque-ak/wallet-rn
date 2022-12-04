import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux';
import MainLayout from '../../components/MainLayout';

const SendOTP = (props) => {

    const dispatch = useDispatch()

    return (
        <MainLayout>
            <View style={styles.main}>
                <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.logo} source={require('../../images/logo.jpg')} />
                </View>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <Text style={styles.phoneNo}>Coming Soon!</Text>
                        <Image style={{ width: 100, height: 20 }} source={require('../../images/gif2.gif')} />
                    </View>
                </View>
            </View>
        </MainLayout>
    )
}

export default SendOTP

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    secondView: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: '#02273990',
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 5
    },
    container: {
        width: Dimensions.get('window').width - 60,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 100,
        width: 125,
        marginTop: 20,
    },
    phoneNo: {
        fontFamily: 'Montserrat-SemiBold',
        marginBottom: 4,
        marginLeft: 3,
        color: 'white',
        fontSize: 17
    }
})