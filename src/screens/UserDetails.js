import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import MainLayout from '../components/MainLayout'
import Icon from 'react-native-vector-icons/Ionicons'

const UserDetails = (props) => {
    const [gender, setGender] = React.useState('')
    const next = () => {
        props.navigation.navigate('Profile')
    }
    return (
        <MainLayout>
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ height: Dimensions.get('window').height * (1 / 6), alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={styles.logo} source={require('../images/logo.jpg')} />
                </View>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.profView}>
                    <Icon name='camera' color={'#011d27'} size={40} />
                </TouchableOpacity>
                <View style={styles.secondView}>
                    <View style={styles.container}>
                        <Text style={styles.continue}>Your SG ID</Text>
                        <Text style={[styles.continue, styles.id]}>123-456-789</Text>
                        <View style={styles.inputView}>
                            <Text style={styles.fieldName}>Your Name</Text>
                            <TextInput style={styles.input} />
                            <Text style={styles.fieldName}>Nationality</Text>
                            <TextInput style={styles.input} />
                            <Text style={styles.fieldName}>Date of Birth</Text>
                            <TextInput style={styles.input} />
                        </View>
                        <View style={styles.radio}>
                            <TouchableOpacity
                                onPress={() => setGender('m')}
                                activeOpacity={0.7}
                                style={styles.checkBox}>
                                <Icon name='checkmark' color={'#55f0c2'} size={20} style={{ display: gender == 'm' ? 'flex' : 'none' }} />
                            </TouchableOpacity>
                            <Text style={[styles.fieldName, { marginLeft: 10, marginRight: 20 }]}>Male</Text>
                            <TouchableOpacity
                                onPress={() => setGender('f')}
                                activeOpacity={0.7}
                                style={styles.checkBox}>
                                <Icon name='checkmark' color={'#55f0c2'} size={20} style={{ display: gender == 'f' ? 'flex' : 'none' }} />
                            </TouchableOpacity>
                            <Text style={[styles.fieldName, { marginLeft: 10, marginRight: 20 }]}>Female</Text>
                            <TouchableOpacity
                                onPress={() => setGender('o')}
                                activeOpacity={0.7}
                                style={styles.checkBox}>
                                <Icon name='checkmark' color={'#55f0c2'} size={20} style={{ display: gender == 'o' ? 'flex' : 'none' }} />
                            </TouchableOpacity>
                            <Text style={[styles.fieldName, { marginLeft: 10 }]}>Other</Text>
                        </View>
                        <TouchableOpacity
                            onPress={next}
                            activeOpacity={0.7}
                            style={styles.sendCode}>
                            <Text style={styles.sndText}>NEXT</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </ScrollView>
        </MainLayout>
    )
}

export default UserDetails

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
    logo: {
        height: 60,
        width: 85,
    },
    sendCode: {
        borderRadius: 10,
        backgroundColor: '#55f0c2',
        paddingVertical: 18,
        marginTop: 20,
        alignItems: 'center'
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
        marginBottom: 4,
        marginLeft: 15
    },
    inputView: {
        marginTop: 15
    },
    input: {
        backgroundColor: '#01232e',
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 10,
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 10,
    },
    checkBox: {
        height: 30,
        width: 30,
        backgroundColor: '#01232e',
        borderColor: '#55f0c2',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    id: {
        fontSize: 25,
        marginVertical: 5,
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
        // position: 'absolute',
    }
})
