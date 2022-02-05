import React, { useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const SignUp = (props) => {
    return (
        <View style={styles.main}>
            <Image style={styles.logo} source={require('../images/logo.jpg')} />
            <View style={styles.secondView}>
                <View style={styles.container}>
                    <Text style={styles.continue}>Sign Up</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TextInput placeholder='Email' placeholderTextColor={'#10305D'} style={styles.inputView} />
                        <TextInput placeholder='Password' placeholderTextColor={'#10305D'} style={styles.inputView} />
                        <TextInput placeholder='Re-enter Password' placeholderTextColor={'#10305D'} style={styles.inputView} />
                        <TextInput placeholder='Phone number' placeholderTextColor={'#10305D'} keyboardType='number-pad' style={styles.inputView} />
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('HomePage')}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>Sign Up</Text>
                        </TouchableOpacity>
                    </ScrollView>

                </View>
            </View>
        </View >
    )
}

export default SignUp

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
        flex: 1,
        width: Dimensions.get('window').width - 60,
    },
    continue: {
        fontSize: 22,
        fontFamily: 'Montserrat-SemiBold',
        paddingVertical: 50,
        color: '#0e3d6b'
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
        marginVertical: 40,
        alignItems: 'center',
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
    },
    inputView: {
        width: '100%',
        backgroundColor: '#B3B3B3',
        alignSelf: 'center',
        borderRadius: 10,
        paddingLeft: 20,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 25
    },
})
