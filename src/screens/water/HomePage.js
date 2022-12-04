import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MainLayout from '../../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'
import { datas } from '../../common'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const HomePage = (props) => {
    const [load, setLoad] = React.useState(false)
    const [datas, setData] = React.useState([])

    const goNext = () => {
        props.navigation.navigate('Profile')
    }

    useEffect(() => {
        async function fetchData() {
            setLoad(true)
            let token = await AsyncStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            axios.get(
                'http://dev1.websorbzdocker.online/users/api/camps/packages/water',
                config
            ).then((res) => {
                setLoad(false)
                let parsedData = JSON.parse(res?.request?._response)
                let data = parsedData?.data?.list
                setData(data)
            })
                .catch((err) => {
                    setLoad(false)
                })
        }
        fetchData()
    }, [])

    const renderItem = ({ item }) => {
        return (
            <View
                activeOpacity={0.7}
                style={[styles.items, { marginTop: 6 }]}
            >
                <View>
                    <View style={styles.row}>
                        <Text style={styles.text}>Camp id: </Text>
                        <Text style={[styles.text, styles.packName, { fontFamily: 'Montserrat-Bold' }]}>{item?.camp_id}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 4 }}>
                        <Text style={styles.text}>Quantity: </Text>
                        < Text style={[styles.text, { fontFamily: 'Montserrat-Bold' }]}>{item?.quantity}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 4 }}>
                        <Text style={styles.text}>Package Name: </Text>
                        < Text style={[styles.text, { flexShrink: 1, fontFamily: 'Montserrat-Bold' }]}>{item?.package_name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 4 }}>
                        <Text style={styles.text}>Amount: </Text>
                        < Text style={[styles.text, { fontFamily: 'Montserrat-Bold' }]}>د.إ {item?.amount}</Text>
                    </View>
                </View>

            </View>
        )
    }

    return (
        <MainLayout>
            <Modal
                visible={load}
                transparent={true}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#000000DC' }}>
                    <View style={{ height: 30, width: 30, backgroundColor: '#55f0c2', alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                        <ActivityIndicator size={'small'} color={'black'} />
                    </View>
                </View>
            </Modal>
            <View style={styles.header}>
                <Text style={styles.text}>Water Order</Text>
                <View style={styles.iconView}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.cart}>
                        <Icon name='notifications-outline' color={'white'} size={26} />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Icon name='person-circle-outline' color={'white'} size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="ios-search" size={20} color="white" />
                <TextInput
                    style={styles.input}
                    placeholder="Search here.."
                    placeholderTextColor={'white'}
                />
            </View>
            <View style={styles.secondView}>
                <View style={styles.container}>
                    <View style={styles.pkgView}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={datas}
                            keyExtractor={(id, index) => index.toString()}
                            renderItem={renderItem}
                        />
                    </View>
                </View>
            </View>
        </MainLayout>
    )
}

export default HomePage

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
        paddingTop: 20,
        paddingBottom: 20,
        marginHorizontal: 5,
        marginBottom: 10
    },
    container: {
        flex: 1,
        width: Dimensions.get('window').width - 50,
    },
    logo: {
        height: 60,
        width: 85,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
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
    sysView: {
        backgroundColor: '#021620',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#55f0c2'
    },
    avail: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 17,
        marginLeft: 10
    },
    sysName: {
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 20
    },
    items: {
        backgroundColor: '#021620',
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#55f0c2',
        // flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-between'
    },
    pkgView: {
        flex: 1,
    },
    text: {
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    },
    rightText: {
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'right'
    },
    packName: {
        marginLeft: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        paddingLeft: 20,
    },
    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        color: 'white',
        fontFamily: 'Montserrat-Regular',
    },
    cart: {
        marginHorizontal: 18
    },
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#021d24',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 30,
        marginBottom: 25
    },
})
