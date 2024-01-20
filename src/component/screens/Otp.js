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
import AntDesign from 'react-native-vector-icons/AntDesign';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { min } from "react-native-reanimated";


export default class Otp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: "",
            counter: 5,
            status: false

        }

    }

    // componentDidMount() {
    //     console.log("true", this.state.status)
    //     if (this.state.status) {
    //         this.timer = setInterval(() => {
    //             this.setState((prevState) => ({
    //                 counter: prevState.counter > 0 ? prevState.counter - 1 : 0,
    //             }));
    //         }, 1000);
    //     } else {
    //         // this.setState({status:false})
    //         console.log("elseblog");
    //         clearInterval(this.timer);
    //     }
    // }



    componentDidUpdate() {
        if (this.state.counter === 0) {
            clearInterval(this.timer)
        }
    }

    timers = () => {
        this.setState({ status: true })
        // if (this.state.counter !== 0) {
        this.timer = setInterval(() => {
            this.setState((prevState) => ({
                counter: prevState.counter > 0 ? prevState.counter - 1 : 0,
            }));
        }, 1000);
        // } else {
        //     // this.setState({status:false})
        //     console.log("elseblog");
        //     clearInterval(this.timer);
        // }
    }





    componentWillUnmount() {
        this.setState({ status: false })
        clearInterval(this.timer);

    }

    render() {
        console.log("thisss", this.state.counter, this.state.status)
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.header}>
                    <AntDesign name="arrowleft" size={25} color="#090F47" style={styles.iconStyle} />
                </View>
                <View style={{ padding: 15 }}>
                    <Text style={styles.enterBanner}>Enter the verify code</Text>
                    <Text style={styles.contact}>We just send you a verification code via phone +3453224244</Text>
                </View>
                <View>
                    <OTPInputView
                        style={{ width: '53%', height: 100, alignSelf: "center" }}
                        pinCount={4}
                        code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                        onCodeChanged={code => { this.setState({ code }) }}
                        autoFocusOnLoad
                        clearInputs
                        codeInputFieldStyle={styles.underlineStyleBase}
                        // codeInputHighlightStyle={styles.underlineStyleHighLighted}
                        onCodeFilled={(code => {

                            console.log(`Code is ${code}, you are good to go!`)
                        })}
                    />
                </View>
                <TouchableOpacity onPress={() =>{
                    this.props.navigation.navigate('Verified') 
                this.timers()}
                    // this.setState({ status: true })
                } style={styles.continueView} >
                    <Text style={styles.continueText}>Submit</Text>
                </TouchableOpacity>
                <View style={{ marginTop: 20 }}>
                    <Text style={styles.contact}>The verify code will expire in 00:{this.state.status ? '0 ' + this.state.counter : '00'}</Text>
                </View>


                <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.timers()}>
                    <Text style={styles.resend}>Resend Code</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    header: { flex: 0.1, justifyContent: "center" },
    iconStyle: { marginLeft: 15 },
    enterBanner: {
        color: "#090F47",
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 32,
        textAlign: "center"
    },
    resend: { color: '#FC6703', fontWeight: '400', fontSize: 14, lineHeight: 14, textAlign: "center" },
    contact: { color: "#090F4773", paddingLeft: 15, paddingRight: 15, marginTop: 10, fontSize: 14, fontWeight: '400', textAlign: "center", lineHeight: 24 },
    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "#090F4773",
        fontSize: 25,
        color: "#090F4773"

    },

    underlineStyleHighLighted: {
        borderColor: "red",
    },
    continueView: { backgroundColor: "#FC6703", borderRadius: 30, width: '90%', alignSelf: "center", marginTop: 20 },
    continueText: { fontWeight: '700', fontSize: 18, textAlign: "center", color: '#FFFFFF', padding: 15 }
})