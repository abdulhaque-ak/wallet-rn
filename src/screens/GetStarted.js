import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const GetStarted = (props) => {
    const { colors } = useTheme()

    return (
        <View style={styles.main}>
            <Image style={{ width: Dimensions.get('window').width }} source={require('../images/V1.png')} />
            <View style={styles.logoView}>
                <Image style={styles.logo} source={require('../images/logo.jpg')} />
            </View>
            <Image style={{ width: Dimensions.get('window').width, zIndex: -9999 }} source={require('../images/V2.png')} />
            <View style={styles.button}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}
                    activeOpacity={0.7}
                    style={styles.but}
                >
                    <Text style={styles.startText}>
                        Get Started
                    </Text>
                    <Icon name='arrow-forward' style={{ marginLeft: 15 }} size={25} color={'#10305D'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778'
    },
    logoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        height: 100,
        width: 125,
        borderRadius: 10,
        zIndex: 9999
    },
    logoText: {
        position: 'absolute',
        bottom: 7,
        color: 'white',
        fontFamily: 'Montserrat-SemiBold'
    },
    getStart: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    but: {
        borderRadius: 40,
        backgroundColor: '#1BFF9F',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 18,
        paddingHorizontal: 60
    },
    startText: {
        color: '#10305D',
        fontFamily: 'Montserrat-Bold',
        fontSize: 16
    },
    button: {
        position: 'absolute',
        bottom: 60,
        alignSelf: 'center'
    }
})