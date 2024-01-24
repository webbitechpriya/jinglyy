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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import logo from '../../assests/logo.png';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: ''
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <StatusBar backgroundColor="white" /> */}
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={{ flex: 0.12 }}>
                    <Text style={styles.signIn}>Sign Up</Text>
                    <View style={styles.flexWrap}>
                        <Text style={styles.welcome}>Welcome to </Text>
                        <Text style={[styles.welcome, { color: '#FC6703' }]}>Jinglyy </Text>
                    </View>
                </View>
                <View style={styles.signInView}>
                    <View style={styles.textInputView}>
                        <FontAwesome5 name="user-circle" size={22} color="#D9D9D9" style={{ paddingLeft: 20 }} />

                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => this.setState({ number: text })}
                            value={this.state.number}
                            placeholder="Name"
                            placeholderTextColor="#A8AFB9"
                        // keyboardType="numeric"
                        // maxLength={10}
                        />
                    </View>
                    <View style={styles.textInputView}>
                        <FontAwesome name="mobile-phone" color="#D9D9D9" size={28} style={{ paddingLeft: 25 }} />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => this.setState({ number: text })}
                            value={this.state.number}
                            placeholder="Mobile number"
                            keyboardType="numeric"
                            maxLength={10}
                            placeholderTextColor="#A8AFB9"

                        />
                    </View>

                    <TouchableOpacity style={styles.continueView} onPress={()=>this.props.navigation.navigate('Otp')}>
                        <Text style={styles.continueText}>Continue</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.flexEnd}>
                    <Text style={styles.end}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignIn')}>
                        <Text style={[styles.end, { color: '#FF5C00', marginLeft: 5 }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>

        )
    }
}
const styles = StyleSheet.create({
    signIn: {
        color: "#212121",
        fontSize: 25,
        fontWeight: '700',
        textAlign: "center"
    },
    welcome: {
        color: "#212121",
        fontSize: 18,
        fontWeight: '600',
    },
    input: {
        borderRadius: 30,
        marginLeft: 10,
        width: '80%',
        color:"#A8AFB9"

    },
    textInputView: { flexDirection: 'row', elevation: 5, borderColor: '#090F4773', borderWidth: 0.2, width: "95%", alignSelf: "center", alignItems: "center", backgroundColor: "white", height: 55, borderRadius: 30 },
    signInView: { padding: 15, flex: 0.31, justifyContent: 'space-between', },
    logo: { flex: 0.35, justifyContent: "center", alignSelf: "center" },
    flexWrap: { flexDirection: "row", alignSelf: "center", alignItems: "center", marginTop: 10 },
    end: { fontSize: 14, fontWeight: '500', color: '#040415' },
    flexEnd: { flex: 0.29, paddingBottom: 15, flexDirection: "row", alignItems: 'flex-end', alignSelf: "center" },
    continueView: { backgroundColor: "#FC6703", borderRadius: 30, width: '95%', alignSelf: "center" },
    continueText: { fontWeight: '700', fontSize: 18, textAlign: "center", color: '#FFFFFF', padding: 15 }

})