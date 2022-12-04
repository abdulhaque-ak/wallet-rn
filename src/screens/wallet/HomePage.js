import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MainLayout from '../../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'

const HomePage = () => {

    return (
        <MainLayout>
            <View style={styles.main}>
                <View>
                    <View style={styles.header}>
                        <Text style={styles.text}>Wallet</Text>
                    </View>
                </View>
                <View style={styles.contents}>
                    <View style={styles.container}>
                        <Text style={styles.available}>Available Balance</Text>
                        <View style={styles.bottom} >
                            <Text style={styles.card}>0000  0000  0000  0000</Text>
                            <View style={[styles.row, { marginTop: 50 }]}>
                                <Text style={styles.amount}>$0.00</Text>
                                <View style={styles.row}>
                                    <View style={[styles.circle, { left: 10 }]}></View>
                                    <View style={styles.circle}></View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.qr}>
                            <Icon name='qr-code-outline' size={100} color='black' />
                        </View>
                    </View>
                </View>
            </View >
        </MainLayout>
    )
}

export default HomePage

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text: {
        fontFamily: 'Montserrat-SemiBold',
        color: 'white',
        fontSize: 18
    },
    contents: {
        flex: 1,
        backgroundColor: '#02273990',
        borderTopLeftRadius: 44,
        borderTopRightRadius: 44,
        marginHorizontal: 5
    },
    container: {
        marginHorizontal: 20,
    },
    available: {
        fontSize: 17,
        fontFamily: 'Montserrat-SemiBold',
        color: 'white',
        marginVertical: 20
    },
    card: {
        fontSize: 17,
        fontFamily: 'Montserrat-SemiBold',
        color: '#214778',
    },
    top: {
        backgroundColor: '#021d24',
        marginHorizontal: 10,
        height: 30,
        marginTop: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20
    },
    gap: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        height: 20,
    },
    bottom: {
        backgroundColor: '#55f0c2',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 30
    },
    box: {
        backgroundColor: 'white',
        width: 30,
        height: 20,
        borderRadius: 6,
        position: 'absolute',
        top: 20,
        left: 30
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    amount: {
        fontSize: 30,
        fontFamily: 'Montserrat-Bold',
        color: '#214778'
    },
    circle: {
        height: 30,
        width: 30,
        backgroundColor: '#ffffff90',
        borderRadius: 50
    },
    qr: {
        backgroundColor: 'white',
        alignSelf: 'center',
        padding: 5
    }
})