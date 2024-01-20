import React, { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    View,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    TextInput
} from 'react-native';
import verified from '../../assests/verified.png';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Verified extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.imageView}>
                    <Image source={verified} />
                </View>
                <View style={styles.phonenumber}>
                    <Text style={styles.verify}>Phone Number Verified</Text>
                    <Text style={styles.verifiedPhone}>Congratulations your phone number has been verified. You can start using the app</Text>
                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={styles.continueView} >
                    <Text style={styles.continueText}>Continue</Text>
                </TouchableOpacity>


            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        flex: 0.07,
        paddingLeft: 15,
        justifyContent: "flex-end"
    },
    verifiedPhone: { fontSize: 14, fontWeight: '400', color: '#090F4773', textAlign: "center", lineHeight: 23 },
    verify: { fontSize: 24, fontWeight: '700', color: '#090F47', textAlign: "center", lineHeight: 24 },
    phonenumber: { padding: 15, flex: 0.2, justifyContent: "center" },
    imageView: { flex: 0.55, alignSelf: "center", justifyContent: "flex-end" },
    continueView: { backgroundColor: "#FC6703", borderRadius: 30, width: '90%', alignSelf: "center" },
    continueText: { fontWeight: '700', fontSize: 18, textAlign: "center", color: '#FFFFFF', padding: 15 }


})