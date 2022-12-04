import React, { useEffect } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput, ActivityIndicator, Modal } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MainLayout from '../components/MainLayout';
import { showMessage } from "react-native-flash-message";
import axios from 'axios'
import Icon from 'react-native-vector-icons/Ionicons'
import { launchImageLibrary } from 'react-native-image-picker';
import authReq from '../common/authReq'
import CountryPicker from 'react-native-country-picker-modal'

const SignUp = (props) => {

    const [username, setUsername] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [conf_password, setConfPassword] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [campID, setCampID] = React.useState('')
    const [age, setAge] = React.useState('')
    const [gender, setGender] = React.useState('')
    const [nationality, setNationality] = React.useState('')
    const [home_addr, setHomeAddress] = React.useState('')
    const [blood, setBlood] = React.useState('')
    const [company_name, setCompanyName] = React.useState('')
    const [job_title, setJob] = React.useState('')
    const [passport_no, setPassport] = React.useState('')
    const [drive_licenece, setDriveLicence] = React.useState('')
    const [visa_number, setVisa] = React.useState('')
    const [national_id_type, setNationalIdType] = React.useState('')
    const [building_no, setBuildingNo] = React.useState('')
    const [room_no, setRoomNo] = React.useState('')
    const [national_id, setNationalId] = React.useState('')
    const [image, setImage] = React.useState()
    const [imgName, setImgName] = React.useState()
    const [image2, setImage2] = React.useState()
    const [imgName2, setImgName2] = React.useState()
    const [load, setLoad] = React.useState(false)
    const [data, setData] = React.useState('')
    const [token, setToken] = React.useState('')
    const [withFlag, setWithFlag] = React.useState(true)
    const [country, setCountry] = React.useState('')
    const [countryCode, setCountryCode] = React.useState('')
    const [withCountryNameButton, setWithCountryNameButton] = React.useState(true)
    const [withEmoji, setWithEmoji] = React.useState(true)
    const [withFilter, setWithFilter] = React.useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = React.useState(true)


    useEffect(() => {
        async function fetchData() {
            setLoad(true)
            let token = await AsyncStorage.getItem('token');
            setToken(token)
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
                setName(data?.name)
                setGender(data?.gender)
                setNationality(data?.nationality)
                setCountryCode(data?.nationality?.split('@4c@')[1])
            })
                .catch((err) => {
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

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
        setNationality(country.name + '@4c@' + country.cca2)
    }

    // console.log('rr', data?.user_image_url == null ? 'y' : 'n');
    // console.log('rr', image == null ? 'y' : 'n');

    const validate = () => {
        const formData = new FormData()
        if (name == '' || gender == '') {
            showMessage({
                type: 'danger',
                animated: true,
                animationDuration: 300,
                titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                message: 'Fields cannot be empty!'
            })
            return
        } else if (data?.user_image_url == undefined && image == undefined) {
            showMessage({
                type: 'danger',
                animated: true,
                animationDuration: 300,
                titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                message: 'User image is mandatory'
            })
            return
        }
        formData.append('name', name)
        formData.append('email', email)
        formData.append('age', age)
        formData.append('gender', gender)
        formData.append('home_address', home_addr)
        formData.append('nationality', nationality ? nationality : 'United Arab Emirates' + '@4c@' + 'AE')
        formData.append('national_id', national_id)
        formData.append('national_id_type', national_id_type)
        formData.append('blood_group', blood)
        formData.append('building_no', building_no)
        formData.append('room_no', room_no)
        formData.append('company_name', company_name)
        formData.append('job_title', job_title)
        formData.append('driver_licence_no', drive_licenece)
        formData.append('passport_no', passport_no)
        formData.append('visa_number', visa_number)
        image && imgName && formData.append('user_image', {
            uri: image,
            type: 'image/jpeg',
            name: imgName
        })
        image2 && imgName2 && formData.append('passport_image', {
            uri: image2,
            type: 'image/jpeg',
            name: imgName2
        })

        setLoad(true)
        authReq('profile-update', formData, token)
            .then(async ({ data }) => {
                setLoad(false)
                if (data.status == 200) {
                    showMessage({
                        type: 'success',
                        animated: true,
                        animationDuration: 225,
                        titleStyle: { color: 'black', fontFamily: 'OpenSans-SemiBold' },
                        message: data.messages,
                    })
                    props.navigation.navigate('HomePage')
                }
            })
            .catch((error) => {
                setLoad(false)
                let err = error?.response
                console.log('err', err);
                // if (error?.response != undefined) {
                //     showMessage({
                //         type: 'danger',
                //         animated: true,
                //         animationDuration: 300,
                //         titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                //         message: err
                //     })
                // }
                // return
            })
        // .catch((error) => {
        //     setLoad(false)
        //     let err = error
        //     let errorData = err?.response?.data
        //     if (errorData?.error == true) {
        //         let result = Object.values(errorData?.message)
        //         result && result?.map(item => {
        //             showMessage({
        //                 type: 'danger',
        //                 animated: true,
        //                 animationDuration: 500,
        //                 titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
        //                 message: item
        //             })
        //             return
        //         })
        //     }
        //     if (err.error == true) {
        //         showMessage({
        //             type: 'danger',
        //             animated: true,
        //             animationDuration: 300,
        //             titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
        //             message: 'Invalid Inputs'
        //         })
        //         return
        //     }
        // })
    }

    const chooseFile = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
        };
        launchImageLibrary(options, (res) => {
            if (res && res?.didCancel != true) {
                showMessage({
                    type: 'success',
                    animated: true,
                    animationDuration: 300,
                    titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                    message: 'Image Uploaded Successfully'
                })
                setImage(res.uri)
                setImgName(res.fileName)
            }
        })
    }

    const choosePassport = () => {
        let options = {
            mediaType: 'photo',
            quality: 1,
        };
        launchImageLibrary(options, (res) => {
            if (res && res?.didCancel != true) {
                showMessage({
                    type: 'success',
                    animated: true,
                    animationDuration: 300,
                    titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                    message: 'Passport Uploaded Successfully'
                })
                setImage2(res.uri)
                setImgName2(res.fileName)
            }
        })
    }

    return (
        <MainLayout>
            <Modal
                visible={load}
                transparent={true}
            >
                <View style={{ alignItems: 'center', justifyContent: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#000000DC' }}>
                    <Text style={{ color: 'white', fontFamily: 'Montserrat-Regular', marginBottom: 10 }}>Just a moment!</Text>
                    <View style={{ height: 30, width: 30, backgroundColor: '#55f0c2', alignItems: 'center', justifyContent: 'center', borderRadius: 30 }}>
                        <ActivityIndicator size={'small'} color={'black'} />
                    </View>
                </View>
            </Modal>
            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.logo} source={require('../images/logo.jpg')} />
            </View>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <ImageBackground style={styles.secondView} blurRadius={1}>
                    <View style={styles.container}>
                        <Text style={styles.continue}>Update Profile</Text>
                        {/* <Text style={styles.phoneNo}>Username <Text style={styles.star}>*</Text></Text>
                        <TextInput style={styles.input} onChangeText={(text) => setUsername(text)} /> */}
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Fullname <Text style={styles.star}>*</Text></Text>
                        <TextInput style={styles.input} defaultValue={data.name} onChangeText={(text) => setName(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Email </Text>
                        <TextInput style={styles.input} defaultValue={data.email} onChangeText={(text) => setEmail(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Age </Text>
                        <TextInput style={styles.input} defaultValue={data.age} onChangeText={(text) => setAge(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Gender <Text style={styles.star}>*</Text></Text>
                        <View style={[styles.input, { flexDirection: 'row', justifyContent: 'flex-start' }]}>
                            <TouchableOpacity onPress={() => setGender('Male')} activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                <View style={[styles.circle1, { borderColor: 'black' }]}>
                                    <View style={[styles.circle2, { backgroundColor: gender == 'Male' ? 'black' : 'transparent' }]} />
                                </View>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', color: 'black', marginLeft: 6 }}>Male</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setGender('Female')} activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                <View style={[styles.circle1, { borderColor: 'black' }]}>
                                    <View style={[styles.circle2, { backgroundColor: gender == 'Female' ? 'black' : 'transparent' }]} />
                                </View>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', color: 'black', marginLeft: 6 }}>Female</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setGender('Others')} activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.circle1, { borderColor: 'black' }]}>
                                    <View style={[styles.circle2, { backgroundColor: gender == 'Others' ? 'black' : 'transparent' }]} />
                                </View>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', color: 'black', marginLeft: 6 }}>Others</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <TextInput style={styles.input} defaultValue={data.gender} onChangeText={(text) => setGender(text)} /> */}
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Home Address </Text>
                        <TextInput style={styles.input} defaultValue={data.home_address} onChangeText={(text) => setHomeAddress(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Nationality <Text style={styles.star}>*</Text></Text>
                        <View style={styles.input}>
                            <CountryPicker
                                {...{
                                    countryCode,
                                    withFilter,
                                    withFlag,
                                    withCountryNameButton,
                                    withAlphaFilter,
                                    withEmoji,
                                    onSelect,
                                }}
                            />
                        </View>
                        {/* <TextInput style={styles.input} defaultValue={data.nationality} onChangeText={(text) => setNationality(text)} /> */}
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>National ID <Text style={styles.star}>*</Text></Text>
                        <TextInput style={styles.input} defaultValue={data.national_id} onChangeText={(text) => setNationalId(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>National ID Type <Text style={styles.star}>*</Text></Text>
                        <TextInput style={styles.input} defaultValue={data.national_id_type} onChangeText={(text) => setNationalIdType(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Blood Group </Text>
                        <TextInput style={styles.input} defaultValue={data.blood_group} onChangeText={(text) => setBlood(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Building Number <Text style={styles.star}>*</Text></Text>
                        <TextInput style={styles.input} defaultValue={data.building_no} onChangeText={(text) => setBuildingNo(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Room Number <Text style={styles.star}>*</Text></Text>
                        <TextInput style={styles.input} defaultValue={data.room_no} onChangeText={(text) => setRoomNo(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Company Name </Text>
                        <TextInput style={styles.input} defaultValue={data.company_name} onChangeText={(text) => setCompanyName(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Job Title <Text style={styles.star}>*</Text></Text>
                        <TextInput style={styles.input} defaultValue={data.job_title} onChangeText={(text) => setJob(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Driver Licence Number <Text style={styles.star}>*</Text></Text>
                        <TextInput style={styles.input} defaultValue={data.driver_licence_no} onChangeText={(text) => setDriveLicence(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Passport Number <Text style={styles.star}>*</Text></Text>
                        <TextInput style={styles.input} defaultValue={data.passport_no} onChangeText={(text) => setPassport(text)} />
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Visa Number <Text style={styles.star}>*</Text></Text>
                        <TextInput style={styles.input} defaultValue={data.visa_number} onChangeText={(text) => setVisa(text)} />

                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>User Image <Text style={styles.star}>*</Text></Text>
                        <TouchableOpacity onPress={chooseFile} activeOpacity={0.7} style={[styles.input, styles.dob]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>{image ? 'Profile Image Uploaded' : 'Change Profile Image'}</Text>
                                {image && <Icon name='checkmark-circle-outline' color='green' size={20} />}
                            </View>
                            <Icon name='caret-down-circle' color='black' size={25} />
                        </TouchableOpacity>
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Passport Image <Text style={styles.star}>*</Text></Text>
                        <TouchableOpacity onPress={choosePassport} activeOpacity={0.7} style={[styles.input, styles.dob]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>{image2 ? 'Passport Uploaded' : 'Choose Passport Image'}</Text>
                                {image2 && <Icon name='checkmark-circle-outline' color='green' size={20} />}
                            </View>
                            <Icon name='caret-down-circle' color='black' size={25} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={validate}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>UPDATE</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        </MainLayout >
    )
}

export default SignUp

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778',
    },
    star: {
        fontFamily: 'Montserrat-Bold',
        color: 'red'
    },
    secondView: {
        // flex: 1,
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
        borderRadius: 20,
        backgroundColor: '#022c3c90',
        alignItems: 'center',
        paddingVertical: 30,
        marginHorizontal: 5,
        marginBottom: 10,
    },
    container: {
        width: Dimensions.get('window').width - 30,
    },
    continue: {
        fontSize: 18,
        fontFamily: 'Montserrat-Medium',
        color: 'white',
        textAlign: 'center',
        marginBottom: 30
    },
    phone: {
        borderRadius: 30,
        backgroundColor: '#94989c',
        paddingLeft: 20,
        fontFamily: 'Montserrat-Regular',
        paddingVertical: 14
    },
    logo: {
        height: 70,
        width: 95,
        marginTop: 20,
    },
    sendCode: {
        borderRadius: 10,
        backgroundColor: '#55f0c2',
        paddingVertical: 18,
        marginTop: 30,
        alignItems: 'center'
    },
    goBack: {
        borderRadius: 30,
        backgroundColor: 'white',
        paddingVertical: 18,
        alignItems: 'center',
        borderColor: '#1AFF9B',
        borderWidth: 2
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
    phoneNo: {
        fontFamily: 'Montserrat-Regular',
        marginBottom: 5,
        marginLeft: 3,
        color: 'white'
    },
    input: {
        backgroundColor: 'white',
        height: 55,
        borderRadius: 10,
        paddingLeft: 10,
        fontFamily: 'Montserrat-Regular',
        color: 'black',
        justifyContent: 'center'
    },
    dob: {
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 10
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
})