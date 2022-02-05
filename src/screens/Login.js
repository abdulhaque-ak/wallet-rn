import React from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, TextInput, ScrollView, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const Login = (props) => {
    return (
        <>
            <View style={styles.main} >
                <View style={styles.logoView}>
                    <Image style={styles.logo} source={require('../images/logo.jpg')} />
                </View>
                <View style={styles.iconsRow}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.iconView}>
                        <Icon name='logo-google' color={'white'} size={25} />
                    </TouchableOpacity>
                    <View style={[styles.iconView, { marginHorizontal: 35 }]}>
                        <Text style={styles.icons}>f</Text>
                    </View>
                    <View style={styles.iconView}>
                        <Icon name='phone-portrait-outline' color={'white'} size={25} />
                    </View>
                </View>
                <ScrollView style={styles.getStart}>
                    <View style={{ width: Dimensions.get('window').width - 68, alignSelf: 'center' }}>
                        <TextInput placeholder='Email' placeholderTextColor={'white'} style={styles.inputView} />
                        <TextInput placeholder='Password' placeholderTextColor={'white'} style={[styles.inputView, { marginTop: 30 }]} />
                        <Text style={styles.forgot}>Forgot Password ?</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('SendOTP')}
                            activeOpacity={0.7}
                            style={[styles.inputView, { marginTop: 0, alignItems: 'center', justifyContent: 'center', paddingVertical: 15, backgroundColor: '#1AFF9B' }]}>
                            <Text style={styles.login}>Login</Text>
                        </TouchableOpacity>
                        <Text style={styles.or}>OR</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('SignUp')}
                            activeOpacity={0.7}
                            style={[styles.inputView, { marginTop: 0, alignItems: 'center', justifyContent: 'center', paddingVertical: 15, backgroundColor: 'white', borderWidth: 2, borderColor: '#1AFF9B', marginBottom: 20 }]}>
                            <Text style={styles.login}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    logoView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 100,
        width: 125,
        borderRadius: 10,
        marginTop: 80
    },
    getStart: {
        flex: 1
    },
    but: {
        borderRadius: 30,
        backgroundColor: '#336356',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 22,
        paddingHorizontal: 80
    },
    startText: {
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        fontSize: 16
    },
    iconsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 60
    },
    iconView: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#567298',
        borderRadius: 30
    },
    inputView: {
        width: '100%',
        backgroundColor: '#3E618D',
        alignSelf: 'center',
        borderRadius: 10,
        paddingLeft: 20,
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    },
    forgot: {
        fontFamily: 'Montserrat-Regular',
        color: 'white',
        marginVertical: 20,
        marginLeft: 2
    },
    icons: {
        color: 'white',
        fontSize: 28,
        fontFamily: 'Montserrat-Bold'
    },
    login: {
        color: '#214778',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    or: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        alignSelf: 'center',
        marginVertical: 30
    }
})