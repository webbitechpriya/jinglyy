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
import car1 from '../../assests/car1.png';
import car2 from '../../assests/car2.png';
import car3 from '../../assests/car3.png';
import car4 from '../../assests/car4.png';
import { Divider } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';


export default class BrandView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: "",
            images: [
                {
                    original: "https://picsum.photos/id/1018/1000/600/",
                    thumbnail: "https://picsum.photos/id/1018/250/150/",
                },
                {
                    original: "https://picsum.photos/id/1015/1000/600/",
                    thumbnail: "https://picsum.photos/id/1015/250/150/",
                },
                {
                    original: "https://picsum.photos/id/1019/1000/600/",
                    thumbnail: "https://picsum.photos/id/1019/250/150/",
                },
            ]
        }

    }
    render() {
        const windowWidth = Dimensions.get('window').width;
        console.log("width", windowWidth / 2 - 30);
        return (
            <>
                <SafeAreaView>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <AntDesign name="arrowleft" size={25} color="#212121" />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <AntDesign name="hearto" size={25} color="#212121" />
                        </TouchableOpacity>

                    </View>
               

                </SafeAreaView>
            </>

        )
    }
}
const styles = StyleSheet.create({
    header: { padding: 15, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },



})