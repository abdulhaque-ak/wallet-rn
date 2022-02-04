import React from 'react'
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native'

const GetStarted = (props) => {
    return (
        <View style={styles.main}>
            <View style={styles.logoView}>
                <View style={styles.logoBack}>
                    <Image style={styles.logo} source={require('../images/logo.jpg')} />
                    <Text style={styles.logoText}>Logo</Text>
                </View>
            </View>
            <View style={styles.getStart}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Login')}
                    activeOpacity={0.7}
                    style={styles.but}
                >
                    <Text style={styles.startText}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#52c4a4'
    },
    logoView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.6
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
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    but: {
        borderRadius: 30,
        backgroundColor: '#336356',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 20,
        paddingHorizontal: 80
    },
    startText: {
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        fontSize: 16
    }
})