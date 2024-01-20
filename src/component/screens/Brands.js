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


export default class Brands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: "",
            allData: [
                {
                    image: car1,
                    name: 'BMW M4 Series',
                    rating: 4.5,
                    amount: 'Rs 40 Laksh'
                },
                {
                    image: car2,
                    name: 'Audio Sports',
                    rating: 4.2,
                    amount: 'Rs 20 Laksh'
                },
                {
                    image: car3,
                    name: 'BMW M4 Series',
                    rating: 4.1,
                    amount: 'Rs 40 Laksh'
                },

            ],

        }

    }
    render() {
        const windowWidth = Dimensions.get('window').width;
        console.log("width", windowWidth / 2 - 30);
        return (
            <SafeAreaView>
                <View style={styles.header}>
                    <TouchableOpacity style={{ flex: 0.1 }} onPress={()=>this.props.navigation.goBack()}>
                        <AntDesign name="arrowleft" size={25} color="#212121" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>{this.props.route.params.name}</Text>
                    <TouchableOpacity style={{ flex: 0.07 }}>
                        <AntDesign name="search1" size={25} color="#212121" />
                    </TouchableOpacity>

                </View>

                <View style={{ padding: 15 }}>
                    <FlatList
                        data={this.state.allData}
                        numColumns={2}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => <TouchableOpacity onPress={() => this.props.navigation.navigate('TopDeals')} style={{ padding: 7 }}>
                            <View >
                                <Image source={item.image} style={[styles.allImages, { width: windowWidth / 2 - 30 }]} />
                                <TouchableOpacity onPress={() => this.setState({ icon: index })} style={styles.likeView}>
                                    {this.state.icon === index ?
                                        <AntDesign name="heart" size={20} color="#FC6703" /> :
                                        <AntDesign name="hearto" size={20} color="#000000" />}
                                </TouchableOpacity>
                                <Text style={[styles.name, { paddingTop: 10 }]}>{item.name}</Text>
                                <View style={styles.direction}>
                                    <AntDesign name="star" size={15} color="#FCD503" />
                                    <Text style={styles.rating}>{item.rating}</Text>
                                    <Divider style={styles.divider} />
                                    <Text style={styles.new}>New</Text>
                                </View>
                                <Text style={styles.amount}>{item.amount}</Text>

                            </View>
                        </TouchableOpacity>}
                        keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    header: { padding: 15, flexDirection: "row", alignItems: "center" },
    headerText: { color: '#212121', fontWeight: '700', fontSize: 16, flex: 0.83 },
    allImages: { objectFit: "contain", height: 125, borderRadius: 10 },
    likeView: { elevation: 7, position: "absolute", marginRight: 5, marginTop: 5, right: 0, padding: 5, backgroundColor: 'white', borderRadius: 30 },
    name: { color: '#212121', lineHeight: 24 },
    amount: { color: '#212121', fontSize: 12, fontWeight: '600', lineHeight: 15, marginTop: 3 },
    rating: { fontSize: 13, color: '#2C2C2CCC', marginLeft: 7 },
    divider: { height: 13, borderWidth: 0.5, borderColor: "#2C2C2CCC", marginLeft: 7 },
    new: { marginLeft: 7, backgroundColor: '#D9D9D9', paddingBottom: 1, paddingLeft: 13, paddingRight: 13, borderRadius: 25, color: '#060606CC' },
    direction: { flexDirection: "row", alignItems: "center" },


})