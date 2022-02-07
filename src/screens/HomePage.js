import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'

const HomePage = (props) => {
    return (
        <View style={styles.main}>
            <TouchableOpacity activeOpacity={0.7}>
                <Icon name='menu-outline' color={'white'} style={styles.sideMenu} />
            </TouchableOpacity>
            <View style={styles.profileView}>
                <Image source={require('../images/user.png')} style={styles.profPic} />
                <Text style={styles.username} numberOfLines={2}>Neymar Jr.</Text>
                <TouchableOpacity activeOpacity={0.7}>
                    <Icon2 name='square-edit-outline' size={25} color={'#222C38'} style={{ marginTop: 10 }} />
                </TouchableOpacity>
            </View>
            <Text style={[styles.sideMenu, styles.name]} numberOfLines={1}>Hello,
                <Text style={{ fontFamily: 'Montserrat-Bold' }} numberOfLines={1}>
                    {' '}Neymar!
                </Text>
            </Text>
            <ScrollView>

                <View style={styles.mainLayout}>
                    <View style={{ width: '80%', alignSelf: 'center' }}>
                        <Text style={styles.featured}>Featured Services</Text>
                    </View>
                    <View style={styles.firstRow}>
                        <View style={styles.foodView}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('FoodScreens')}>
                                <Image style={styles.categImg} source={require('../images/food.png')} />
                            </TouchableOpacity>
                            <Text style={styles.categText}>Food</Text>
                        </View>
                        <View style={styles.waterView}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('WaterScreens')}>
                                <Image style={styles.categImg} source={require('../images/water.png')} />
                            </TouchableOpacity>
                            <Text style={styles.categText}>Water</Text>
                        </View>
                    </View>
                    <View style={styles.firstRow}>
                        <View style={styles.foodView}>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => props.navigation.navigate('WalletScreens')}>
                                <Image style={styles.categImg} source={require('../images/wallet.png')} />
                            </TouchableOpacity>
                            <Text style={styles.categText}>Wallet</Text>
                        </View>
                        <View style={styles.waterView}>
                            <TouchableOpacity activeOpacity={0.7}>
                                <Image style={styles.categImg} source={require('../images/gambling.png')} />
                            </TouchableOpacity>
                            <Text style={styles.categText}>Gambling</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
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
        marginTop: 15,
        marginBottom: 30
    },
    name: {
        fontFamily: 'Montserrat-Medium',
        width: Dimensions.get('window').width - 30,
        fontSize: 25
    },
    profileView: {
        backgroundColor: '#A2BDD0',
        width: Dimensions.get('window').width - 40,
        borderRadius: 20,
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 20
        // justifyContent: 'center'
    },
    profPic: {
        height: 80,
        width: 80,
        borderRadius: 50
    },
    username: {
        fontSize: 20,
        color: '#222C38',
        marginLeft: 14,
        marginTop: 10,
        width: 200,
        fontFamily: 'Montserrat-SemiBold',
    },
    edit: {
        position: 'absolute',
        color: 'white',
        right: 14,
        top: 8
    },
    mainLayout: {
        backgroundColor: '#A2BDD0',
        width: Dimensions.get('window').width - 40,
        borderRadius: 20,
        alignSelf: 'center'
    },
    firstRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        alignSelf: 'center',
        marginBottom: 50,
    },
    featured: {
        fontFamily: 'Montserrat-SemiBold',
        marginVertical: 20,
        fontSize: 20,
        color: '#0e3d6b'
    },
    foodView: {
        // backgroundColor: '#7f8b94',
        height: 140,
        width: '45%',
        borderRadius: 14,
    },
    waterView: {
        // backgroundColor: '#7f8b94',
        height: 140,
        width: '45%',
        borderRadius: 14,
    },
    categImg: {
        height: '100%',
        width: '100%'
    },
    categText: {
        alignSelf: 'center',
        fontFamily: 'Montserrat-Medium',
        marginTop: 7,
        fontSize: 18,
        color: '#0e3d6b'
    }
})