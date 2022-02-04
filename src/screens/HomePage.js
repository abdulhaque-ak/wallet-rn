import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const HomePage = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.sideMenu}>=</Text>
            <View style={styles.profileView}>
                <View style={styles.profPic}></View>
                <Text style={styles.username} numberOfLines={2}>Neymar Jr.</Text>
                <Text style={styles.edit}>Edit</Text>
            </View>
            <Text style={[styles.sideMenu, { fontFamily: 'Montserrat-SemiBold' }]}>Hello Neymar!</Text>
            <View style={styles.mainLayout}>
                <View style={{ width: '80%', alignSelf: 'center' }}>
                    <Text style={styles.featured}>Featured Services</Text>
                </View>
                <View style={styles.firstRow}>
                    <View style={styles.foodView}>
                    </View>
                    <View style={styles.waterView}></View>
                </View>
                <View style={styles.firstRow}>
                    <View style={styles.foodView}>

                    </View>
                    <View style={styles.waterView}></View>
                </View>
            </View>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#0e3d6b'
    },
    sideMenu: {
        fontSize: 30,
        color: 'white',
        marginLeft: 20,
        marginVertical: 30
    },
    profileView: {
        backgroundColor: '#c5d4e0',
        width: Dimensions.get('window').width - 40,
        borderRadius: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 20
        // justifyContent: 'center'
    },
    profPic: {
        height: 90,
        width: 90,
        backgroundColor: '#67696b',
        borderRadius: 50
    },
    username: {
        fontSize: 20,
        color: '#0e3d6b',
        marginLeft: 20,
        width: 200,
        alignSelf: 'center',
        fontFamily: 'Montserrat-SemiBold',
    },
    edit: {
        position: 'absolute',
        color: 'white',
        right: 14,
        top: 8
    },
    mainLayout: {
        backgroundColor: '#c5d4e0',
        width: Dimensions.get('window').width - 40,
        borderRadius: 20,
        alignSelf: 'center'
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginBottom: 30
    },
    featured: {
        fontFamily: 'Montserrat-Regular',
        marginVertical: 20,
        fontSize: 18,
        color: '#0e3d6b'
    },
    foodView: {
        backgroundColor: '#7f8b94',
        height: 140,
        width: '45%',
        borderRadius: 14,
    },
    waterView: {
        backgroundColor: '#7f8b94',
        height: 140,
        width: '45%',
        borderRadius: 14,
    }
})