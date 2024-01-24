import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Verified from './Verified';
import WishList from './WishList';
import TopDeals from './TopDeals';
import shopping from '../../assests/shopping.png';
import Tag from '../../assests/Tag.png';
import home from '../../assests/home.png';
import emoji from '../../assests/emoji.png';


const Tab = createBottomTabNavigator();
export default function MyTab() {


    return (
        <Tab.Navigator

            screenOptions={{
                headerShown: false, tabBarShowLabel: false,
                tabBarStyle: { height: 70, borderTopWidth: 1 },
            }}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarActiveTintColor: "#2BB673",
                    headerTitleAlign: 'center',
                    // headerStyle: { height: headerHeight },
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ borderTopWidth: focused ? 3 : 0, paddingTop: 16, borderTopColor: focused ? "#FC6703" : "" }}>
                            <Image source={home} style={styles.imageStyle} />

                        </View>
                    ),

                }} />
            <Tab.Screen name="Verified" component={Verified}
                options={{
                    headerTitleAlign: 'center',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ borderTopWidth: focused ? 3 : 0, paddingTop: 16, borderTopColor: focused ? "#FC6703" : "" }}>
                            <Image source={shopping} style={styles.imageStyle} />
                        </View>
                    ),
                }} />
            <Tab.Screen name="WishList"
                component={WishList} options={{
                    headerTitleAlign: 'center',
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ borderTopWidth: focused ? 3 : 0, paddingTop: 16, borderTopColor: focused ? "#FC6703" : "" }}>
                            <Image source={Tag} style={styles.imageStyle} />
                        </View>
                    ),
                }} />
            <Tab.Screen name="TopDeals"
                component={TopDeals} options={{
                    headerTitleAlign: 'center',
                    tabBarLabelStyle: { fontSize: 14 },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ borderTopWidth: focused ? 3 : 0, paddingTop: 16, borderTopColor: focused ? "#FC6703" : "" }}>
                            <Image source={emoji} style={styles.imageStyle} />
                        </View>
                    ),
                }} />



        </Tab.Navigator>


    );
}

const styles = StyleSheet.create({
    imageStyle: { marginBottom: 20, color: 'black' }

})