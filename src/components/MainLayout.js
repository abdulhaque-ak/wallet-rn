import React from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, View, } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const MainLayout = (props) => {
    return (
        <LinearGradient
            style={styles.main}
            colors={['#03535f', '#032241']}
        >
            <View
                opacity={0.1}
                style={{ position: 'absolute', height: Dimensions.get('window').height * (1 / 3.5), width: Dimensions.get('window').width * (1 / 3.5), borderBottomRightRadius: 80, backgroundColor: 'white' }} >
            </View>
            <View
                opacity={0.1}
                style={{ position: 'absolute', bottom: 0, right: 0, height: Dimensions.get('window').height * (1 / 3.5), width: Dimensions.get('window').width * (1 / 3.5), borderTopLeftRadius: 80, backgroundColor: 'white' }}>
            </View>
            {/* <LinearGradient
                locations={[0.1, 0.8]}
                colors={['#03757f', '#036776']} style={{ position: 'absolute', height: 180, width: 80, borderBottomRightRadius: 80 }}>
            </LinearGradient>
            <LinearGradient
                locations={[0.1, 0.8]}
                colors={['#033557', '#03244d']} style={{ position: 'absolute', bottom: 0, right: 0, height: 180, width: 80, borderTopLeftRadius: 80 }}>
            </LinearGradient> */}
            {props?.children}
        </LinearGradient>
    )
}

export default MainLayout

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white'
    },
    logoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
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
        marginBottom: 10
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
        borderRadius: 10,
        backgroundColor: '#1BFF9F',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 16,
        paddingHorizontal: 50
    },
    startText: {
        color: '#10305D',
        fontFamily: 'Montserrat-Bold',
        fontSize: 16
    },
    button: {
        position: 'absolute',
        bottom: 100,
        alignSelf: 'center'
    }
})