import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MainLayout from '../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'
import { datas } from '../common'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const AvailablePackages = (props) => {
    const [load, setLoad] = React.useState(false)
    const [data, setData] = React.useState('')

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
                'http://dev1.websorbzdocker.online/users/api/camps/packages/internet',
                config
            ).then((res) => {
                setLoad(false)
                let parsedData = JSON.parse(res?.request?._response)
                setData(parsedData)
            })
                .catch((err) => {
                    console.log('err', err);
                    setLoad(false)
                })
        }
        fetchData()
    }, [])


    const RenderItem = ({ item }) => {
        if (data?.message == "No record available") {
            return (
                < View
                    activeOpacity={0.7}
                    style={[styles.items, { marginTop: 35 }]}
                >
                    <Text style={[styles.texts, { alignSelf: 'center' }]} numberOfLines={1}>No records available</Text>
                </View >
            )
        } else {
            return null
        }
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
                    <View style={styles.sysView}>
                        <View style={styles.row}>
                            <Icon name='document-outline' color={'white'} size={30} />
                            <Text style={styles.avail}>Available Packages @</Text>
                        </View>
                        <Text style={styles.sysName}>Al shuwaib System 1</Text>
                    </View>
                    <RenderItem />
                </View>
            </View>
        </MainLayout>
    )
}

export default AvailablePackages

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
        marginTop: 35
    },
    texts: {
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
        width: 200
    }
})
