import React from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import MainLayout from '../../components/MainLayout'
import Header from './components/Header'

const DetailPage = (props) => {
    const [like, setLike] = React.useState(false)
    let item = props.route.params
    let price = parseInt(item.price) + 50

    return (
        <MainLayout>

            <View style={styles.main}>
                <Header />
                <View style={{ flex: 0.6, borderBottomLeftRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.offerView}>
                        <Text style={styles.offer}>50%{"\n"}Off</Text>
                    </View>
                    <Image source={require('../../images/hfood.png')} />
                    <Text style={styles.prodName} numberOfLines={2}>{item.name}</Text>
                </View>
                <View style={{ flex: 0.4, backgroundColor: '#02273990', borderTopLeftRadius: 30, borderTopRightRadius: 30, marginHorizontal: 5 }}>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: 100,
                            alignSelf: 'center',
                            width: '50%',
                            borderRadius: 10,
                            flexDirection: 'row',
                            height: 40
                        }}>
                        <View style={{ flex: 1, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{ height: 40, width: 55, backgroundColor: '#4efbe7', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 28 }}>-</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ height: 38, width: 38, backgroundColor: 'white', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 15, color: 'black' }}>
                                    0
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center' }}>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{ height: 40, width: 55, backgroundColor: '#4efbe7', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'black', fontSize: 28 }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                            backgroundColor: '#55f0c2',
                            position: 'absolute',
                            bottom: 20,
                            alignSelf: 'center',
                            width: '50%',
                            paddingVertical: 15,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text style={{ color: 'black', fontFamily: 'Montserrat-SemiBold', fontSize: 16 }}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </MainLayout>
    )
}

export default DetailPage

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    layout: {
        // borderTopRightRadius: 30,
        // borderTopLeftRadius: 30,
        // backgroundColor: 'white',
        flex: 1,
    },
    container: {
        marginHorizontal: 20,
        marginBottom: 210,
    },
    prodName: {
        alignSelf: 'center',
        marginVertical: 15,
        color: 'white',
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
        textAlign: 'center'
    },
    imgView: {
        // height: 150,

        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        alignSelf: 'center',
    },
    desc: {
        marginTop: 10,
        color: 'black',
        fontFamily: 'Montserrat-Regular',
        lineHeight: 22,
    },
    buttView: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    butText: {
        color: 'white',
        fontFamily: 'Montserrat-Medium'
    },
    offerView: {
        backgroundColor: '#ff1b62',
        position: 'absolute',
        right: 10,
        top: 10,
        height: 50,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    offer: {
        color: 'black',
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    }
})