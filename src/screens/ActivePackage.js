import React, { useState } from 'react'
import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MainLayout from '../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'
import { validP, expP } from '../common'
import ValidAndExpPackages from '../components/ValidAndExpPackages'

const ActivePackage = (props) => {

    const goNext = () => {
        props.navigation.navigate('Profile')
    }

    return (
        <MainLayout>
            <View style={styles.top}>
                <Image style={styles.logo} source={require('../images/logo.jpg')} />
                <TouchableOpacity
                    onPress={goNext}
                    activeOpacity={0.7}
                    style={styles.profIcon}>
                    <Icon name='person' size={24} color={'white'} />
                </TouchableOpacity>
            </View>
            <View style={styles.secondView}>
                <View style={styles.container}>
                    <Text style={styles.heading}>Active Package</Text>
                    <ValidAndExpPackages title='ACTIVE' color='#00ff00' navigation={props.navigation} />

                    <Text style={styles.heading}>Valid Packages</Text>
                    <FlatList
                        data={validP}
                        keyExtractor={(id, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={(item) =>
                            <ValidAndExpPackages
                                data={item.item}
                                title='VALID'
                                color='#00ffff'
                                navigation={props.navigation}
                            />}
                    />

                    <Text style={styles.heading}>Expired Packages</Text>
                    <FlatList
                        data={expP}
                        keyExtractor={(id, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={(item) =>
                            <ValidAndExpPackages
                                data={item.item}
                                title='EXPIRED'
                                color='#ed1c24'
                                navigation={props.navigation}
                            />}
                    />

                </View>
            </View>
        </MainLayout >
    )
}

export default ActivePackage

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    secondView: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#02273990',
        alignItems: 'center',
        paddingBottom: 20,
        marginHorizontal: 5,
        marginBottom: 10
    },
    container: {
        flex: 1,
        marginTop: 10,
        width: Dimensions.get('window').width - 50,
    },
    logo: {
        height: 60,
        width: 85,
    },
    profIcon: {
        position: 'absolute',
        right: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#033c51',
        borderRadius: 30,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    top: {
        height: Dimensions.get('window').height * (1 / 6),
        alignItems: 'center',
        justifyContent: 'center'
    },
    heading: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10
    },
})
