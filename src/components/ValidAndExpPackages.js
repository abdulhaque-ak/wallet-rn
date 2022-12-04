
import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const ValidAndExpPackages = ({ title, color, data }) => {
    return (
        <View style={[styles.items, { marginVertical: 10 }]}>
            <View style={[styles.topView, { backgroundColor: color }]}>
                <Text style={[styles.pckText, { color: title == 'EXPIRED' ? 'white' : 'black' }]}>{title}</Text>
            </View>
            <View>
                <View style={styles.row}>
                    <Icon name='timer-outline' color={'white'} size={20} />
                    <Text style={[styles.texts, styles.packName]} numberOfLines={1}>{data?.name ? data.name : 'SG Premium Membership'}</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.row}>
                        <Icon name='calendar-outline' color={'white'} style={{ marginRight: 4 }} />
                        < Text style={[styles.texts, { fontFamily: 'Montserrat-SemiBold', fontSize: 15 }]}>17-02-2022</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.hyphen}>
                            -
                        </Text>
                        < Text style={[styles.texts, { fontFamily: 'Montserrat-SemiBold', fontSize: 15 }]}>17-03-2022</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.rightText}>30 Days</Text>
                <Text style={styles.rightText}>30 AED</Text>
                {!data &&
                    <>
                        <View style={[styles.row, { justifyContent: 'flex-end' }]}>
                            <Icon name='caret-up' color={'white'} style={{ marginRight: 2 }} />
                            <Text style={[styles.rightText, { fontFamily: 'Montserrat-Regular' }]}>6 MB</Text>
                        </View>
                        <View style={[styles.row, { justifyContent: 'flex-end' }]}>
                            <Icon name='caret-down' color={'white'} style={{ marginRight: 2 }} />
                            <Text style={[styles.rightText, { fontFamily: 'Montserrat-Regular' }]}>6 MB</Text>
                        </View>
                    </>
                }
            </View>
        </View >
    )
}

export default ValidAndExpPackages

const styles = StyleSheet.create({
    items: {
        backgroundColor: '#021620',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#55f0c2',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topView: {
        backgroundColor: '#00ff00',
        position: 'absolute',
        right: 20,
        top: -9,
        paddingHorizontal: 8,
        borderRadius: 8
    },
    pckText: {
        color: 'black',
        fontFamily: 'Montserrat-Medium'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    texts: {
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    },
    packName: {
        marginLeft: 5,
        width: 200,
    },
    hyphen: {
        marginLeft: 2,
        marginRight: 2,
        color: 'white'
    },
    rightText: {
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'right'
    },
})