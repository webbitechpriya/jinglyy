import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    useColorScheme,
    View,
    TouchableOpacity,
    ImageBackground,
    FlatList,
    TextInput
} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Divider, Switch } from 'react-native-paper';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSwitchOn: false
        }

    }

    onToggleSwitch = () => {
        this.setState({ isSwitchOn: !this.state.isSwitchOn })

    }


    render() {
        return (
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 0.1 }}>
                        <FontAwesome6 name="car-side" size={20} color="#101010" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Profile</Text>
                    <TouchableOpacity style={{ flex: 0.07 }}>
                        <Ionicons name="ellipsis-horizontal-circle" size={25} color="#101010" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={{ uri: 'https://source.unsplash.com/1024x768/?girl' }} style={styles.imageStyle} />
                    <Text style={styles.name}>Andrew Ainsely</Text>
                    <Text style={styles.number} >+8729024442</Text>
                </View>
                <View style={{ padding: 15 }}>
                    <Divider style={{ height: 0.8, marginTop: 10, marginBottom: 10 }} />

                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                        <View style={{ flex: 0.1 }}>
                            <AntDesign name="user" size={25} color="#101010" />
                        </View>
                        <Text style={styles.itemText}>Edit Profile</Text>
                        <TouchableOpacity style={{ flex: 0.07 }}>
                            <AntDesign name="right" size={23} color="#101010" />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                        <View style={{ flex: 0.1 }}>
                            <AntDesign name="enviromento" size={25} color="#101010" />

                        </View>
                        <Text style={styles.itemText}>Address</Text>
                        <TouchableOpacity style={{ flex: 0.07 }}>
                            <AntDesign name="right" size={23} color="#101010" />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                        <View style={{ flex: 0.1 }}>
                            <Ionicons name="notifications-outline" size={25} color="#101010" />

                        </View>
                        <Text style={styles.itemText}>Notification</Text>
                        <TouchableOpacity style={{ flex: 0.07 }}>
                            <AntDesign name="right" size={23} color="#101010" />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                        <View style={{ flex: 0.1 }}>
                            <AntDesign name="user" size={25} color="#101010" />
                        </View>
                        <Text style={styles.itemText}>Payment</Text>
                        <TouchableOpacity style={{ flex: 0.07 }}>
                            <AntDesign name="right" size={23} color="#101010" />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                        <View style={{ flex: 0.1 }}>
                            <AntDesign name="Safety" size={25} color="#101010" />
                        </View>
                        <Text style={styles.itemText}>Security</Text>
                        <TouchableOpacity style={{ flex: 0.07 }}>
                            <AntDesign name="right" size={23} color="#101010" />
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                        <View style={{ flex: 0.1 }}>
                            <AntDesign name="Safety" size={25} color="#101010" />
                        </View>
                        <Text style={{ flex: 0.55, fontSize: 16, color: '#101010', fontWeight: '500' }}>Languages</Text>
                        <Text style={{ flex: 0.28, fontSize: 16, color: '#101010', fontWeight: '500' }}>English(US)</Text>

                        <TouchableOpacity style={{ flex: 0.07 }}>
                            <AntDesign name="right" size={23} color="#101010" />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                        <View style={{ flex: 0.1 }}>
                            <AntDesign name="eyeo" size={25} color="#101010" />

                        </View>
                        <Text style={styles.itemText}>Dark Mode</Text>
                        <TouchableOpacity style={{ flex: 0.07 }}>
                            <Switch
                                trackColor={{ true: '#FC6703', false: 'gray' }}
                                thumbColor={this.state.isSwitchOn ? 'white' : '#f4f3f4'}

                                value={this.state.isSwitchOn} onValueChange={this.onToggleSwitch} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                        <View style={{ flex: 0.1 }}>
                            <AntDesign name="lock" size={25} color="#101010" />
                        </View>
                        <Text style={styles.itemText}>Privacy Policy</Text>
                        <TouchableOpacity style={{ flex: 0.07 }}>
                            <AntDesign name="right" size={23} color="#101010" />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                        <View style={{ flex: 0.1 }}>
                            <AntDesign name="exclamationcircleo" size={20} color="#101010" />
                        </View>
                        <Text style={styles.itemText}>Help center</Text>
                        <TouchableOpacity style={{ flex: 0.07 }}>
                            <AntDesign name="right" size={23} color="#101010" />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginTop: 15 }}>
                        <View style={{ flex: 0.1 }}>
                            <MaterialCommunityIcons name="account-group-outline" size={25} color="#101010" />
                        </View>
                        <Text style={styles.itemText}>Invite Friends</Text>
                        <TouchableOpacity style={{ flex: 0.07 }}>
                            <AntDesign name="right" size={23} color="#101010" />
                        </TouchableOpacity>

                    </View>
                </View>


            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    headerText: { flex: 0.83, fontSize: 18, color: '#101010', fontWeight: '700' },
    itemText: { flex: 0.83, fontSize: 16, color: '#101010', fontWeight: '500' },
    imageStyle: { height: 120, width: 120, borderRadius: 60, alignSelf: "center" },
    name: { textAlign: "center", color: '#101010', fontSize: 20, fontWeight: '600', marginTop: 10 },
    number: { textAlign: "center", color: '#101010', fontSize: 16, fontWeight: '400', marginTop: 3 },
    header: { padding: 15, flexDirection: "row", alignItems: "center" }
})