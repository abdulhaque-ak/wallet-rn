import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Carousel from 'react-native-snap-carousel';
import { ni, si, ar, ch, rus, tur } from '../../common';
import CategList1 from '../../components/CategList1';
import Header from './components/Header';
import MainLayout from '../../components/MainLayout';

const CategoryDetail1 = (props) => {
    let title = props?.route?.params?.title

    const data = [
        {
            id: 1,
            name: 'First time User Pack',
            offer: '50%',
        },
        {
            id: 2,
            name: 'Food Pack 2',
            offer: '45%',
        },
        {
            id: 3,
            name: 'Food Pack 3',
            offer: '50%',
        }
    ]


    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.carouselView}>
                <Image style={{ width: 100, height: 100 }} source={require('../../images/foodimg.png')} />
                <View style={styles.rightSection}>
                    <Text style={[styles.itemText, { marginTop: 5 }]}>Enjoy {item.offer} Off</Text>
                    <Text style={[styles.itemText, { fontFamily: 'Montserrat-SemiBold', fontSize: 18 }]} numberOfLines={2}>{item.name}</Text>
                    <Text style={[styles.itemText, { position: 'absolute', bottom: 0 }]}>*Order on above 150</Text>
                </View>
            </View>
        )
    }

    const renderDatas = (title, props) => {
        return (
            <CategList1
                title={title}
                props={props}
                data={title == 'North Indian' ? ni : title == 'South Indian' ? si : title == 'Arabian' ? ar : title == 'Chinese' ? ch : title == 'Russian' ? rus : tur} />
        )

    }
    return (
        <MainLayout>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Header />
                    <View style={styles.contents}>
                        <View style={styles.container}>
                            <View style={[styles.categText, { marginTop: 20 }]}>
                                <Text style={styles.catText}>{title}</Text>
                            </View>
                            <View style={{ marginHorizontal: 10, paddingBottom: 20 }}>
                                {renderDatas(title, props)}
                            </View>
                            <Carousel
                                data={data}
                                inactiveSlideOpacity={0.4}
                                autoplay={true}
                                removeClippedSubviews={false}
                                autoplayDelay={300}
                                loop={true}
                                sliderWidth={Dimensions.get('window').width}
                                itemWidth={Dimensions.get('window').width - 20}
                                renderItem={renderItem}
                                containerCustomStyle={{ marginTop: 30, alignSelf: 'center' }}
                                enableMomentum={true}
                                decelerationRate={'fast'}
                            />
                        </View>
                    </View>
                </View >
            </ScrollView >
        </MainLayout>
    )
}

export default CategoryDetail1

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cart: {
        marginHorizontal: 22
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
    itemText: {
        fontFamily: 'Montserrat-Medium',
        color: '#04564B',
        fontSize: 15
    },
    carouselView: {
        backgroundColor: '#08C6AC',
        padding: 20,
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rightSection: {
        width: '60%',
        height: '100%'
    },
    categText: {
        marginHorizontal: 10,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    catText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 22,
        color: 'white',
    }
})