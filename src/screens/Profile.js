import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Dimensions, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MainLayout from '../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'
import DataContext from '../context/ItemProvider'
import AsyncStorage from '@react-native-async-storage/async-storage'
import authReq from '../common/getReq'
import axios from 'axios'
import { showMessage } from "react-native-flash-message";

const Profile = (props) => {

    const [load, setLoad] = React.useState(false)
    const [data, setData] = React.useState('')

    useEffect(() => {
        async function fetchData() {
            setLoad(true)
            let token = await AsyncStorage.getItem('token');
            const config = {
                headers: { Authorization: `Bearer ${token}` },
            };
            axios.get(
                'http://dev1.websorbzdocker.online/users/api/profile',
                config
            ).then((res) => {
                setLoad(false)
                let parsedData = JSON.parse(res?.request?._response)
                let data = parsedData?.data?.list
                setData(data)
            })
                .catch((err) => {
                    console.log('err', err);
                    setLoad(false)
                    showMessage({
                        type: 'danger',
                        animated: true,
                        animationDuration: 300,
                        titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                        message: 'OOPS! Something went wrong.'
                    })
                    return
                })
        }
        fetchData();
    }, [])
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
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ height: Dimensions.get('window').height * (1 / 6), alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.logo} source={require('../images/logo.jpg')} />
                </View>
                <View style={{ width: '100%', marginLeft: 20, flexDirection: 'row', alignItems: 'center' }}>
                    <View
                        activeOpacity={0.8}
                        style={styles.profView}>
                        {data?.user_image_url ?
                            <Image style={{ height: 65, width: 65, borderRadius: 30 }} source={{ uri: data?.user_image_url }} />
                            :
                            <Icon name='person' size={35} color='white' />
                        }
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <View style={[styles.row, { marginBottom: 4 }]}>
                            <Text style={[styles.fieldValue, { fontSize: 18, fontFamily: 'Montserrat-Medium', width: '75%' }]} numberOfLines={2}>{data?.name}</Text>
                        </View>
                        {/* <Text style={[styles.continue, { textAlign: 'left' }]}>SG ID : 999-999-999</Text> */}
                    </View>
                </View>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        {/* <View style={styles.qrView}>
                            <Icon name='qr-code-sharp' size={90} color='black' />
                        </View> */}
                        <View style={styles.inputView}>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Email:</Text>
                                <Text style={[styles.fieldValue, { textTransform: 'none' }]}>{"   "}{data.email ? data.email : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Phone:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.phone ? data.phone : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Age:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.age ? data.age : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Gender:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.gender ? data.gender : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Address:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.home_address ? data.home_address : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Nationality:</Text>
                                <Text style={[styles.fieldValue, { textTransform: 'uppercase' }]}>{"   "}{data.nationality ? data?.nationality?.split('@4c@')[0] : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>National ID:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.national_id ? data.national_id : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>National ID Type:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.national_id_type ? data.national_id_type : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Blood Group:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.blood_group ? data.blood_group : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Building Number:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.building_no ? data.building_no : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Room Number:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.job_title ? data.job_title : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Company Name:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.company_name ? data.company_name : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Job Title:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.job_title ? data.job_title : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Driver Licence No:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.company_name ? data.company_name : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Passport Number:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.job_title ? data.job_title : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>UUID:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.uuid ? data.uuid : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>VISA Number:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.visa_number ? data.visa_number : '--'}</Text>
                            </View>
                            <View style={styles.row}>
                                <Text style={styles.fieldName}>Wallet Balance:</Text>
                                <Text style={styles.fieldValue}>{"   "}{data.wallet_balance ? data.wallet_balance : '--'}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('SignUp')}
                    activeOpacity={0.7}
                    style={styles.sendCode}>
                    <Text style={styles.sndText}>UPDATE</Text>
                </TouchableOpacity>
            </ScrollView>
        </MainLayout>
    )
}

export default Profile

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
        paddingTop: 50,
        paddingBottom: 20,
        marginHorizontal: 5,
        zIndex: -9999,
        marginTop: -40,
        marginBottom: 10
    },
    container: {
        width: Dimensions.get('window').width - 50,
    },
    continue: {
        fontSize: 16,
        fontFamily: 'Montserrat-Medium',
        color: 'white',
        textAlign: 'center'
    },
    inputView: {
        marginTop: 10
    },
    logo: {
        height: 60,
        width: 85,
    },
    sendCode: {
        borderRadius: 10,
        backgroundColor: '#55f0c2',
        paddingVertical: 18,
        marginTop: 20,
        alignItems: 'center',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 30
    },
    sndText: {
        color: '#214778',
        fontFamily: 'Montserrat-Bold',
        fontSize: 17
    },
    fieldName: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        width: 150,
    },
    fieldValue: {
        color: 'white',
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        textTransform: 'capitalize'
    },
    input: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 15,
        paddingLeft: 10,
        color: 'black',
        fontFamily: 'Montserrat-Regular',
        width: '60%'
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 10
    },
    checkBox: {
        height: 40,
        width: 40,
        backgroundColor: '#01232e',
        borderColor: '#55f0c2',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    id: {
        fontSize: 25,
        marginTop: 5,
        fontFamily: 'Montserrat-SemiBold'
    },
    profView: {
        height: 80,
        width: 80,
        borderRadius: 100,
        backgroundColor: '#033c51',
        alignSelf: 'center',
        zIndex: 9999,
        borderWidth: 1,
        borderColor: '#55f0c2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qrView: {
        backgroundColor: 'white',
        alignSelf: 'center',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    }
})

