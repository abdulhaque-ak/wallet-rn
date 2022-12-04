import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View, ActivityIndicator, Modal, TouchableOpacity } from 'react-native'
import MainLayout from '../components/MainLayout';

const Language = (props) => {

    const [language, setLanguage] = React.useState('Hindi')

    return (
        <MainLayout>
            <Modal
                visible={true}
                transparent={true}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#000000DC' }}>
                    <Text style={{ color: 'white', fontFamily: 'Montserrat-SemiBold', marginBottom: 14 }}>Select Language</Text>
                    {/* <View style={{ height: 30, width: 30, backgroundColor: '#55f0c2', alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}> */}
                    <View style={styles.view}>
                        <View style={[styles.input]}>
                            <TouchableOpacity onPress={() => setLanguage('Hindi')} activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.circle1, { borderColor: 'black' }]}>
                                    <View style={[styles.circle2, { backgroundColor: language == 'Hindi' ? 'black' : 'transparent' }]} />
                                </View>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', color: 'black', marginLeft: 6 }}>Hindi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setLanguage('English')} activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 18 }}>
                                <View style={[styles.circle1, { borderColor: 'black' }]}>
                                    <View style={[styles.circle2, { backgroundColor: language == 'English' ? 'black' : 'transparent' }]} />
                                </View>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', color: 'black', marginLeft: 6 }}>English</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setLanguage('Arabic')} activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 18 }}>
                                <View style={[styles.circle1, { borderColor: 'black' }]}>
                                    <View style={[styles.circle2, { backgroundColor: language == 'Arabic' ? 'black' : 'transparent' }]} />
                                </View>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', color: 'black', marginLeft: 6 }}>Arabic</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setLanguage('Urdu')} activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.circle1, { borderColor: 'black' }]}>
                                    <View style={[styles.circle2, { backgroundColor: language == 'Urdu' ? 'black' : 'transparent' }]} />
                                </View>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', color: 'black', marginLeft: 6 }}>Urdu</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => props.navigation.replace('SendOTP')}
                        activeOpacity={0.7}
                        style={styles.sendCode}>
                        <Text style={styles.sndText}>SUMBIT</Text>
                    </TouchableOpacity>
                    {/* </View> */}
                </View>
            </Modal>
            <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.logo} source={require('../images/logo.jpg')} />
            </View>
        </MainLayout>
    )
}

export default Language

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    logo: {
        height: 100,
        width: 125,
        marginTop: 20,
    },
    view: {
        width: '75%'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'black',
        justifyContent: 'center',
        paddingVertical: 35
    },
    circle1: {
        height: 20,
        width: 20,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle2: {
        height: 8,
        width: 8,
        borderRadius: 30
    },
    sendCode: {
        borderRadius: 10,
        backgroundColor: '#55f0c2',
        paddingVertical: 18,
        marginTop: 30,
        alignItems: 'center',
        width: '75%'
    },
    sndText: {
        color: '#214778',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    },
})