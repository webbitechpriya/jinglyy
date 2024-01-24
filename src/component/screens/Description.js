import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import car2 from '../../assests/car2.png';
import ImageView from "react-native-image-viewing";





export default class WishList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            imageIndex: 0,
            image: [
                {
                    uri: "https://images.unsplash.com/photo-1571501679680-de32f1e7aad4",
                },
                {
                    uri: "https://images.unsplash.com/photo-1573273787173-0eb81a833b34",
                },
                {
                    uri: "https://images.unsplash.com/photo-1569569970363-df7b6160d111",
                },
            ],
            images: [
                {
                    id: 1,
                    url: this.props.route.params.image

                },
                {
                    id: 2,
                    url: this.props.route.params.image

                },
                {
                    id: 3,
                    url: this.props.route.params.image
                },
                {
                    id: 4,
                    url: this.props.route.params.image

                },
                {
                    id: 5,
                    url: this.props.route.params.image
                },

            ]
        }

    }
    render() {
        const windowWidth = Dimensions.get('window').width;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.header}>
                        <TouchableOpacity style={{ flex: 0.1 }} onPress={() => this.props.navigation.goBack()}>
                            <AntDesign name="arrowleft" size={25} color="#212121" />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>Description</Text>
                        <TouchableOpacity style={{ flex: 0.07 }} >
                            <AntDesign name="hearto" size={25} color="#212121" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <Image source={this.props.route.params.image} style={[styles.banner, { width: windowWidth - 30 }]} />
                    </View>

                    <View style={styles.thumbnail}>
                        <FlatList
                            data={this.state.images}
                            // numColumns={2}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => <TouchableOpacity onPress={() => this.setState({ isOpen: true })} style={{ paddingLeft: 7 }}>
                                <View >
                                    <Image source={item.url} style={styles.flat} />
                                </View>
                            </TouchableOpacity>}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.audi}>Audi Sports</Text>
                        <View style={styles.ratingView}>
                            <Text style={styles.new}>New</Text>
                            <AntDesign name="star" size={20} color="#FCD503" style={styles.star} />
                            <Text style={styles.rating}>4.5(100 + reviews)</Text>
                        </View>
                        <Text style={styles.desc}>Description</Text>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Vestibulm mails nunc a molestie  <Text style={styles.view}>View More...</Text></Text>


                        </View>
                    </View>

                    <ImageView
                        key={this.state.imageIndex}
                        images={this.state.image}
                        imageIndex={this.state.imageIndex}
                        visible={this.state.isOpen}
                        // animationType="slide"
                        onRequestClose={() => this.setState({ isOpen: false })}
                        onImageIndexChange={(index) => this.setState({ imageIndex: index })}
                        FooterComponent={() => (
                            <View style={styles.root}>
                                <Text style={{ color: 'white', fontSize: 20, textAlign: "center" }}>{`${this.state.imageIndex + 1}/${this.state.image.length}`}</Text>
                            </View>
                        )}
                    />

                </ScrollView>
                <View style={styles.containerView}>
                    <View>
                        <Text style={styles.price}>Price</Text>
                        <View style={styles.priceView}>
                            <Text style={styles.amount}>Rs 50</Text>
                            <Text style={styles.lakhs}> Lakh</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.bookView}>
                        <Text style={styles.booking}>Book Now</Text>
                    </TouchableOpacity>
                </View>



            </SafeAreaView>


        )
    }
}

const styles = StyleSheet.create({
    header: { padding: 15, flexDirection: "row", alignItems: "center" },
    headerText: { color: '#212121', fontWeight: '700', fontSize: 16, flex: 0.83 },
    container: { padding: 15 },
    banner: { resizeMode: 'cover', height: 270, borderRadius: 12 },
    audi: { fontSize: 20, color: '#212121', fontWeight: '700' },
    flat: { borderRadius: 12, width: 130, height: 90 },
    star: { marginLeft: 10 },
    description: { fontSize: 14, fontWeight: '500', color: '#2C2C2CCC' },
    thumbnail: { paddingLeft: 10, paddingRight: 15 },
    ratingView: { flexDirection: 'row', marginTop: 7, alignItems: 'center' },
    rating: { fontSize: 13, fontWeight: '400', color: '#2C2C2CCC', marginLeft: 5 },
    desc: { color: '#212121', fontSize: 16, fontWeight: '600', marginTop: 13 },
    view: { fontSize: 14, fontWeight: '600', color: '#000000', lineHeight: 21 },
    price: { fontSize: 13, color: '#505050', lineHeight: 21, fontWeight: '500' },
    containerView: { justifyContent: "space-between", padding: 15, flexDirection: "row", marginBottom: 10, alignItems: "center" },
    new: { color: '#060606CC', backgroundColor: '#D9D9D9', paddingLeft: 14, paddingRight: 14, borderRadius: 20 },
    priceView: { flexDirection: "row", alignItems: "center" },
    amount: { fontWeight: '700', color: '#212121', fontSize: 20 },
    lakhs: { fontWeight: '600', color: '#212121', fontSize: 14 },
    booking: { textAlign: "center", color: '#FFFFFF', fontSize: 16, fontWeight: '700' },
    bookView: { width: 150, padding: 14, backgroundColor: '#FC6703', borderRadius: 30 }
})
