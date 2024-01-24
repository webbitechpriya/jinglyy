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
    Dimensions,
    TextInput
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Divider, Searchbar } from 'react-native-paper';
import car from '../../assests/car.png';
import image1 from '../../assests/image1.png';
import image2 from '../../assests/image2.png';
import image3 from '../../assests/image3.png';
import image4 from '../../assests/image4.png';
import image5 from '../../assests/image5.png';
import image6 from '../../assests/image6.png';
import image7 from '../../assests/image7.png';
import image8 from '../../assests/image8.png';
import car1 from '../../assests/car1.png';
import car2 from '../../assests/car2.png';
import car3 from '../../assests/car3.png';
import car4 from '../../assests/car4.png';


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            status: 0,
            icon: '',
            DATA: [
                {
                    image: image1,
                    name: 'Hyundai',
                },
                {
                    image: image2,
                    name: 'Mahindra',
                },
                {
                    image: image3,
                    name: 'Honda',
                },
                {
                    image: image4,
                    name: 'Skoda',
                },
                {
                    image: image5,
                    name: 'Tata',
                },
                {
                    image: image6,
                    name: 'Maruti Suzuki',
                },
                {
                    image: image7,
                    name: 'Ford',
                },
                {
                    image: image8,
                    name: 'Renault',
                },
            ],
            carModel: [
                {
                    name: 'All',
                },
                {
                    name: 'Tata',
                },
                {
                    name: 'Maruti Suzuki',
                },
                {
                    name: 'Honda',
                },
                {
                    name: 'Skoda',
                },
                {
                    name: 'Hyundai',
                },
                {
                    name: 'Mahindra',
                },
                {
                    name: 'Ford',
                },
                {
                    name: 'Renault',
                },
            ],
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
                {
                    image: car4,
                    name: 'Audio Sports',
                    rating: 4.5,
                    amount: 'Rs 20 Laksh'


                },
                {
                    image: car1,
                    name: 'BMW M4 Series',
                    amount: 'Rs 40 Laksh',
                    rating: 4.2,


                },
                {
                    image: car2,
                    name: 'Audio Sports',
                    amount: 'Rs 20 Laksh',
                    rating: 4.5,
                },

            ],
        }

    }
    render() {
        const windowWidth = Dimensions.get('window').width;
        console.log("width", windowWidth / 2 - 30);
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')} style={styles.flex2}>
                            <Image source={{ uri: 'https://source.unsplash.com/1024x768/?girl' }} style={styles.imageStyle} />
                        </TouchableOpacity>
                        <View style={styles.flex6}>
                            <Text style={styles.intro}>Good Morning</Text>
                            <Text style={styles.name}>Andrew Ainsely</Text>
                        </View>
                        <TouchableOpacity style={styles.iconStyle}>
                            <Ionicons name="notifications-outline" size={25} color="#404040" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconStyle} onPress={() => this.props.navigation.navigate('WishList')}>
                            <Ionicons name="heart-outline" size={25} color="#404040" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ padding: 15 }}>
                        <Searchbar
                            style={{ backgroundColor: "#EAEAEA" }}
                            placeholder="Search"
                            onChangeText={search => this.setState({ searchQuery: search })}
                            value={this.state.searchQuery}
                            inputStyle={{ color: "#BBBBBB" }}
                            placeholderTextColor="#BBBBBB"
                            iconColor="#BBBBBB"
                        />
                        <View style={styles.searchIcon}>
                            <AntDesign name="menu-unfold" size={20} />
                        </View>
                        <Text style={styles.offer}>Special Offers</Text>
                        <View style={styles.special}>
                            <View style={styles.bannerView}>
                                <View style={styles.bannerIner}>
                                    <View style={{ flex: 0.43 }}>
                                        <Text style={styles.banner}>20%</Text>
                                        <Text style={styles.week}>Week Deals!</Text>
                                        <Text style={styles.newCar}>Get a new car discount ,</Text>
                                        <Text style={[styles.newCar, { fontWeight: '400' }]}>only valid this week</Text>
                                    </View>
                                    <View style={{ flex: 0.5 }}>
                                        <Image source={car} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View >
                            <FlatList
                                style={{ paddingTop: 10, paddingBottom: 10 }}
                                data={this.state.DATA}
                                // horizontal
                                // numColumns={5}
                                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between" }}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => <TouchableOpacity style={{ margin: 4 }} onPress={() => this.props.navigation.navigate('Brands', { name: item.name })}>
                                    <View style={{ width: 70 }}>
                                        <View style={styles.carModel}>
                                            <Image source={item.image} style={styles.carImage} />
                                        </View>
                                        <View  >
                                            <Text style={styles.carName}>{item.name}</Text>
                                        </View>

                                    </View>

                                </TouchableOpacity>}
                                keyExtractor={item => item.id}
                            />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                                <Text style={styles.name}>Top Deals</Text>
                                <TouchableOpacity >
                                    <Text style={styles.seeall}>See all</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            style={{ marginTop: 10 }}
                            data={this.state.carModel}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => <TouchableOpacity onPress={() => {
                                console.log("item.name", item.name !== 'All')
                                this.setState({ status: index })
                                if (item.name !== 'All') {
                                    this.props.navigation.navigate('Brands', { name: item.name })
                                }
                            }
                            } style={{ padding: 6 }}>
                                <View style={[styles.topView, { borderWidth: this.state.status === index ? null : 1, backgroundColor: this.state.status === index ? '#FC6703' : null }]}>
                                    <Text style={[styles.topAd, { color: this.state.status === index ? 'white' : '#B2B2B2' }]}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>}
                            keyExtractor={item => item.id}
                        />
                        <View style={{ marginTop: 10, paddingBottom: 20 }}>
                            <FlatList
                                data={this.state.allData}
                                numColumns={2}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item, index }) => <TouchableOpacity style={{ padding: 7 }} onPress={() => this.props.navigation.navigate('Description', { image: item.image })}>
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

                    </View>
                </ScrollView>

            </SafeAreaView >
        )
    }
}
const styles = StyleSheet.create({
    header: { padding: 15, flexDirection: "row", alignItems: "center", marginTop: 8 },
    rating: { fontSize: 13, color: '#2C2C2CCC', marginLeft: 7 },
    divider: { height: 13, borderWidth: 0.5, borderColor: "#2C2C2CCC", marginLeft: 7 },
    name: { color: '#212121', lineHeight: 24 },
    direction: { flexDirection: "row", alignItems: "center" },
    likeView: { elevation: 7, position: "absolute", marginRight: 5, marginTop: 5, right: 0, padding: 5, backgroundColor: 'white', borderRadius: 30 },
    new: { marginLeft: 7, backgroundColor: '#D9D9D9', paddingBottom: 1, paddingLeft: 13, paddingRight: 13, borderRadius: 25, color: '#060606CC' },
    topView: { borderWidth: 1, borderColor: '#B2B2B2', borderRadius: 30, width: 120 },
    topAd: { paddingLeft: 15, paddingRight: 15, paddingTop: 10, paddingBottom: 10, textAlign: "center", fontWeight: '600', fontSize: 12, lineHeight: 14 },
    carModel: { height: 70, backgroundColor: "#ECECEC", width: 70, borderRadius: 50 },
    intro: { fontSize: 14, color: '#616161', fontWeight: '500', lineHeight: 17 },
    imageStyle: { height: 60, width: 60, borderRadius: 30 },
    carImage: { alignSelf: "center", alignItems: "center", justifyContent: "center", marginTop: -2 },
    allImages: { objectFit: "contain", height: 125, borderRadius: 10 },
    name: { fontSize: 16, color: '#212121', fontWeight: '700' },
    carName: { fontSize: 12, color: '#212121', fontWeight: '600', textAlign: "center" },
    flex2: { flex: 0.2 },
    flex6: { flex: 0.6 },
    amount: { color: '#212121', fontSize: 12, fontWeight: '600', lineHeight: 15, marginTop: 5 },
    iconStyle: { flex: 0.1, alignItems: "flex-end" },
    seeall: { fontWeight: '600', fontSize: 14, color: '#FC6703' },
    searchIcon: { position: "absolute", left: 350, top: 30 },
    offer: { fontWeight: '700', fontSize: 16, lineHeight: 19, color: "#212121", marginTop: 10 },
    newCar: { fontWeight: '600', color: '#FFFFFF', fontSize: 13, lineHeight: 17 },
    banner: { fontWeight: '700', color: '#FFFFFF', fontSize: 35, lineHeight: 42 },
    week: { fontWeight: '600', color: '#FFFFFF', fontSize: 16, lineHeight: 20 },
    special: { height: 170, backgroundColor: '#FF9954', marginTop: 15, borderRadius: 10 },
    bannerView: { borderWidth: 1, borderColor: 'white', height: 150, margin: 10, borderRadius: 10 },
    bannerIner: { flexDirection: "row", alignItems: "center", marginTop: 20, justifyContent: "space-between", paddingLeft: 15, paddingRight: 15 }
})