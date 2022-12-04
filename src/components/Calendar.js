import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Calendar = ({ date, changeDate }) => {
    return (
        <>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderBottomColor: 'white', borderBottomWidth: 1 }}>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(1)}
                    style={{ flex: 1, backgroundColor: date == 1 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 1 ? '#033c51' : '#5fe2d8' }}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(2)} style={{ flex: 1, backgroundColor: date == 2 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 2 ? '#033c51' : '#5fe2d8' }}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(3)} style={{ flex: 1, backgroundColor: date == 3 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 3 ? '#033c51' : '#5fe2d8' }}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(4)} style={{ flex: 1, backgroundColor: date == 4 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 4 ? '#033c51' : '#5fe2d8' }}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(5)} style={{ flex: 1, backgroundColor: date == 5 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45 }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 5 ? '#033c51' : '#5fe2d8' }}>5</Text>
                </TouchableOpacity>
            </View >
            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderBottomColor: 'white', borderBottomWidth: 1 }}>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(6)} style={{ flex: 1, alignItems: 'center', backgroundColor: date == 6 ? '#5fe2d8' : '#033c51', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 6 ? '#033c51' : '#5fe2d8' }}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(7)} style={{ flex: 1, alignItems: 'center', backgroundColor: date == 7 ? '#5fe2d8' : '#033c51', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 7 ? '#033c51' : '#5fe2d8' }}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(8)} style={{ flex: 1, alignItems: 'center', backgroundColor: date == 8 ? '#5fe2d8' : '#033c51', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 8 ? '#033c51' : '#5fe2d8' }}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(9)} style={{ flex: 1, alignItems: 'center', backgroundColor: date == 9 ? '#5fe2d8' : '#033c51', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 9 ? '#033c51' : '#5fe2d8' }}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(10)} style={{ flex: 1, alignItems: 'center', backgroundColor: date == 10 ? '#5fe2d8' : '#033c51', justifyContent: 'center', height: 45, width: 45, }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 10 ? '#033c51' : '#5fe2d8' }}>10</Text>
                </TouchableOpacity>
            </View >
            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderBottomColor: 'white', borderBottomWidth: 1 }}>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(11)} style={{ flex: 1, backgroundColor: date == 11 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 11 ? '#033c51' : '#5fe2d8' }}>11</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(12)} style={{ flex: 1, backgroundColor: date == 12 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 12 ? '#033c51' : '#5fe2d8' }}>12</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(13)} style={{ flex: 1, backgroundColor: date == 13 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 13 ? '#033c51' : '#5fe2d8' }}>13</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(14)} style={{ flex: 1, backgroundColor: date == 14 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 14 ? '#033c51' : '#5fe2d8' }}>14</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(15)} style={{ flex: 1, backgroundColor: date == 15 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45 }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 15 ? '#033c51' : '#5fe2d8' }}>15</Text>
                </TouchableOpacity>
            </View >
            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderBottomColor: 'white', borderBottomWidth: 1 }}>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(16)} style={{ flex: 1, backgroundColor: date == 16 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 16 ? '#033c51' : '#5fe2d8' }}>16</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(17)} style={{ flex: 1, backgroundColor: date == 17 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 17 ? '#033c51' : '#5fe2d8' }}>17</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(18)} style={{ flex: 1, backgroundColor: date == 18 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 18 ? '#033c51' : '#5fe2d8' }}>18</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(19)} style={{ flex: 1, backgroundColor: date == 19 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 19 ? '#033c51' : '#5fe2d8' }}>19</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(20)} style={{ flex: 1, backgroundColor: date == 20 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 20 ? '#033c51' : '#5fe2d8' }}>20</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: 'white', borderBottomColor: 'white', borderBottomWidth: 1 }}>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(21)} style={{ flex: 1, backgroundColor: date == 21 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 21 ? '#033c51' : '#5fe2d8' }}>21</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(22)} style={{ flex: 1, backgroundColor: date == 22 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 22 ? '#033c51' : '#5fe2d8' }}>22</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(23)} style={{ flex: 1, backgroundColor: date == 23 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 23 ? '#033c51' : '#5fe2d8' }}>23</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(24)} style={{ flex: 1, backgroundColor: date == 24 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 24 ? '#033c51' : '#5fe2d8' }}>24</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(25)} style={{ flex: 1, backgroundColor: date == 25 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 25 ? '#033c51' : '#5fe2d8' }}>25</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: 'white' }}>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(26)} style={{ flex: 1, backgroundColor: date == 26 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 26 ? '#033c51' : '#5fe2d8' }}>26</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(27)} style={{ flex: 1, backgroundColor: date == 27 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 27 ? '#033c51' : '#5fe2d8' }}>27</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6}
                    onPress={() => changeDate(28)} style={{ flex: 1, backgroundColor: date == 28 ? '#5fe2d8' : '#033c51', alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: 'white' }}>
                    <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17, color: date == 28 ? '#033c51' : '#5fe2d8' }}>28</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 45, width: 45, borderRightWidth: 1, borderRightColor: '#033c51', backgroundColor: '#033c51' }}>
                    {/* <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17 }}>19</Text> */}
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 45, width: 45, backgroundColor: '#033c51' }}>
                    {/* <Text style={{ fontFamily: 'Montserrat-Medium', fontSize: 17 }}>20</Text> */}
                </View>
            </View>
        </>
    )
}

export default Calendar
