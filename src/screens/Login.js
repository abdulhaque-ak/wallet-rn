import React from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, TextInput, ScrollView, Dimensions } from 'react-native'

const Login = (props) => {
    return (
        <>
            <View style={styles.main} >
                <View style={styles.logoView}>
                    <View style={styles.logoBack}>
                        <Image style={styles.logo} source={require('../images/logo.jpg')} />
                        <Text style={styles.logoText}>Logo</Text>
                    </View>
                </View>
                <ScrollView style={styles.getStart}>
                    <View style={styles.iconsRow}>
                        <TouchableOpacity activeOpacity={0.7} style={styles.iconView}>
                            <Text style={styles.icons}>G</Text>
                        </TouchableOpacity>
                        <View style={[styles.iconView, { marginHorizontal: 25 }]}>
                            <Text style={styles.icons}>f</Text>
                        </View>
                        <View style={styles.iconView}>
                            <Text style={styles.icons}>M</Text>
                        </View>
                    </View>
                    <View style={{ width: Dimensions.get('window').width - 68, alignSelf: 'center' }}>
                        <TextInput placeholder='Email' placeholderTextColor={'white'} style={styles.inputView} />
                        <TextInput placeholder='Password' placeholderTextColor={'white'} style={[styles.inputView, { marginTop: 30 }]} />
                        <Text style={styles.forgot}>Forgot Password ?</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('SendOTP')}
                            activeOpacity={0.7}
                            style={[styles.inputView, { marginTop: 0, alignItems: 'center', justifyContent: 'center', paddingVertical: 15, backgroundColor: '#666a8a' }]}>
                            <Text style={styles.login}>Login</Text>
                        </TouchableOpacity>
                        <Text style={styles.or}>OR</Text>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('SignUp')}
                            activeOpacity={0.7}
                            style={[styles.inputView, { marginTop: 0, alignItems: 'center', justifyContent: 'center', paddingVertical: 15, backgroundColor: '#7e7f87' }]}>
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
        backgroundColor: '#d5d6de',
    },
    logoView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20
    },
    logoBack: {
        backgroundColor: '#3d997f',
        height: 140,
        width: 140,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    logo: {
        height: 80,
        width: 80,
        borderRadius: 10
    },
    logoText: {
        position: 'absolute',
        bottom: 7,
        color: 'white',
        fontFamily: 'Montserrat-SemiBold'
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
        backgroundColor: '#3d997f',
        borderRadius: 30
    },
    inputView: {
        width: '100%',
        backgroundColor: '#23473d',
        alignSelf: 'center',
        borderRadius: 10,
        paddingLeft: 20,
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    },
    forgot: {
        fontFamily: 'Montserrat-Regular',
        color: 'black',
        marginVertical: 20,
        marginLeft: 2
    },
    icons: {
        color: 'white',
        fontSize: 28,
        fontFamily: 'Montserrat-Bold'
    },
    login: {
        color: 'white',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16
    },
    or: {
        color: 'black',
        fontFamily: 'Montserrat-Regular',
        alignSelf: 'center',
        marginVertical: 30
    }
})