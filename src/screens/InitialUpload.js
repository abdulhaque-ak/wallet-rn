import React, { useContext } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground, TextInput, ActivityIndicator, Modal } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MainLayout from '../components/MainLayout';
import { showMessage } from "react-native-flash-message";
import Icon from 'react-native-vector-icons/Ionicons'
import { launchImageLibrary } from 'react-native-image-picker';
import authReq from '../common/authReq'
import DataContext from '../context/ItemProvider'
import CountryPicker from 'react-native-country-picker-modal'

const InitialUpload = (props) => {

    let token = props.route.params.token
    const [name, setName] = React.useState('')
    const [nationality, setNationality] = React.useState('')
    const [image, setImage] = React.useState()
    const [imgName, setImgName] = React.useState()
    const [load, setLoad] = React.useState(false)
    const [state, setState] = useContext(DataContext);
    const [withFlag, setWithFlag] = React.useState(true)
    const [country, setCountry] = React.useState('')
    const [countryCode, setCountryCode] = React.useState('AE')
    const [withCountryNameButton, setWithCountryNameButton] = React.useState(true)
    const [withEmoji, setWithEmoji] = React.useState(true)
    const [withFilter, setWithFilter] = React.useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = React.useState(true)
    const [gender, changeGender] = React.useState('Male')

    const validate = () => {
        const formData = new FormData()
        if (name == '' || gender == ''
        ) {
            showMessage({
                type: 'danger',
                animated: true,
                animationDuration: 300,
                titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
                message: 'Fields cannot be empty!'
            })
            return
        } else if (image == undefined) {
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
        formData.append('gender', gender)
        formData.append('nationality', nationality ? nationality : 'United Arab Emirates' + '@4c@' + 'AE')
        image && imgName && formData.append('user_image', {
            uri: image,
            type: 'image/jpeg',
            name: imgName
        })
        console.log('nationality', nationality);
        setLoad(true)
        authReq('profile-update', formData, token)
            .then(async ({ data }) => {
                setLoad(false)
                if (data.status == 200) {
                    await AsyncStorage.setItem('token', token);
                    setState({
                        signed: true,
                        token: token,
                    })
                    showMessage({
                        type: 'success',
                        animated: true,
                        animationDuration: 225,
                        titleStyle: { color: 'black', fontFamily: 'OpenSans-SemiBold' },
                        message: data.messages,
                    });
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

        // axios.post('http://dev1.websorbzdocker.online/users/api/profile-update', formData)
        //     .then(async (res) => {
        //         setLoad(false)
        //         let response = res?.data
        //         console.log('res111', response);
        //         if (response?.error == false) {
        //             showMessage({
        //                 type: 'success',
        //                 animated: true,
        //                 animationDuration: 300,
        //                 titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
        //                 message: response?.messages
        //             })
        //             props.navigation.replace('SendOTP')
        //         } else if (response?.error == true) {
        //             showMessage({
        //                 type: 'danger',
        //                 animated: true,
        //                 animationDuration: 300,
        //                 titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
        //                 message: response?.message
        //             })
        //         }
        //     })
        //     .catch((error) => {
        //         setLoad(false)
        //         let err = error
        //         let errorData = err?.response?.data
        //         console.log('errorData', errorData);
        //         if (errorData?.error == true) {
        //             let result = Object.values(errorData?.message)
        //             result && result?.map(item => {
        //                 showMessage({
        //                     type: 'danger',
        //                     animated: true,
        //                     animationDuration: 500,
        //                     titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
        //                     message: item
        //                 })
        //                 return
        //             })
        //         }
        //         if (err.error == true) {
        //             showMessage({
        //                 type: 'danger',
        //                 animated: true,
        //                 animationDuration: 300,
        //                 titleStyle: { color: 'black', fontFamily: 'Montserrat-SemiBold' },
        //                 message: 'Invalid Inputs'
        //             })
        //             return
        //         }
        //     })
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

    const onSelect = (country) => {
        setCountryCode(country.cca2)
        setCountry(country)
        setNationality(country.name + '@4c@' + country.cca2)
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
                        {/* <Text style={styles.continue}>Sign Up</Text> */}
                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Fullname <Text style={styles.star}>*</Text></Text>
                        <TextInput style={styles.input} onChangeText={(text) => setName(text)} />

                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Gender <Text style={styles.star}>*</Text></Text>
                        <View style={[styles.input, { flexDirection: 'row', justifyContent: 'flex-start' }]}>
                            <TouchableOpacity onPress={() => changeGender('Male')} activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                <View style={[styles.circle1, { borderColor: 'black' }]}>
                                    <View style={[styles.circle2, { backgroundColor: gender == 'Male' ? 'black' : 'transparent' }]} />
                                </View>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', color: 'black', marginLeft: 6 }}>Male</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeGender('Female')} activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 16 }}>
                                <View style={[styles.circle1, { borderColor: 'black' }]}>
                                    <View style={[styles.circle2, { backgroundColor: gender == 'Female' ? 'black' : 'transparent' }]} />
                                </View>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', color: 'black', marginLeft: 6 }}>Female</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => changeGender('Others')} activeOpacity={0.7} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={[styles.circle1, { borderColor: 'black' }]}>
                                    <View style={[styles.circle2, { backgroundColor: gender == 'Others' ? 'black' : 'transparent' }]} />
                                </View>
                                <Text style={{ fontFamily: 'Montserrat-SemiBold', color: 'black', marginLeft: 6 }}>Others</Text>
                            </TouchableOpacity>
                        </View>
                        {/* <TextInput style={styles.input} onChangeText={(text) => setGender(text)} /> */}

                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Nationality <Text style={styles.star}>*</Text></Text>
                        {/* <TextInput style={styles.input} onChangeText={(text) => setNationality(text)} /> */}
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

                        <Text style={[styles.phoneNo, { marginTop: 10 }]}>Profile Picture<Text style={styles.star}>*</Text></Text>
                        <TouchableOpacity onPress={chooseFile} activeOpacity={0.7} style={[styles.input, styles.dob]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: 'black', fontFamily: 'Montserrat-Regular', marginRight: 5 }}>{image ? 'Profile Image Uploaded' : 'Choose File'}</Text>
                                {image && <Icon name='checkmark-circle-outline' color='green' size={20} />}
                            </View>
                            <Icon name='caret-down-circle' color='black' size={25} />
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={validate}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>UPLOAD</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </ScrollView>
        </MainLayout >
    )
}

export default InitialUpload

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