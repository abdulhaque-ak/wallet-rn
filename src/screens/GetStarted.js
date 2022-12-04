import React, { useContext, useEffect } from 'react'
import { Image, StyleSheet, View, Dimensions, Modal, Text, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import DataContext, { Provider } from '../context/ItemProvider';

const GetStarted = (props) => {

    const [state, setState] = useContext(DataContext);
    const init = async () => {
        if (state.signed == true) {
            props.navigation.replace('HomePage')
        } else if (state.signed == false) {
            props.navigation.replace('Language')
        }
    }

    
    React.useEffect(() => {
        init()
    }, [state])

    return (
        <LinearGradient style={styles.main} colors={['#03535f', '#032241']} >
            <View opacity={0.1} style={styles.top} />
            <View opacity={0.1} style={styles.bottom} />
            <View style={styles.logoView}>
                <Image style={styles.logo} source={require('../images/logo.jpg')} />
                <Image style={styles.gif} source={require('../images/gif2.gif')} />
            </View>
        </LinearGradient >
    )
}

export default GetStarted

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#214778'
    },
    logoView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        height: 100,
        width: 125,
        borderRadius: 10,
        marginBottom: 10
    },
    top: {
        position: 'absolute',
        height: Dimensions.get('window').height * (1 / 3.5),
        width: Dimensions.get('window').width * (1 / 3.5),
        borderBottomRightRadius: 80,
        backgroundColor: 'white'
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        height: Dimensions.get('window').height * (1 / 3.5),
        width: Dimensions.get('window').width * (1 / 3.5),
        borderTopLeftRadius: 80,
        backgroundColor: 'white'
    },
    gif: {
        width: 100,
        height: 20,
        alignSelf: 'center'
    }
})