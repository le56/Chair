import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, icons, SIZES, FONTS, images } from './../constants'


const ScrollableTab = ({ tabList, selectedTab, onPress }) => {

    const renderItem = ({ item }) => {
        return <TouchableOpacity
            style={{ marginHorizontal: SIZES.padding }}
            onPress={() => onPress(item)}
        >
            <Text style={{ color: COLORS.secondary, ...FONTS.body2 }}>{item.name}</Text>
            {
                selectedTab.id == item.id &&
                <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.blue }}></View>
                </View>
            }
        </TouchableOpacity>
    }

    return (
        <View>
            <FlatList
                horizontal
                data={tabList}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={{
                    marginTop: 5
                }}
            />
        </View>
    )
}

const ScrollableCard = ({ navigation, productList }) => {
    const renderCard = ({ item }) => {
        return <TouchableOpacity
            style={{ marginLeft: SIZES.padding }}
            onPress={() => navigation.navigate('ItemDetail', { ItemInfo: item })}
        >
            <View
                style={{
                    width: SIZES.width / 2
                }}
            >
                <Image source={item.image}
                    resizeMode="cover"
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: SIZES.radius
                    }}
                />
                <View style={{ position: 'absolute', top: 15, left: '10%' }}>
                    <Text style={{ color: COLORS.lightGray2, ...FONTS.h3 }}>Funiture</Text>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h3 }}>{item.productName}</Text>
                </View>
                <View style={{ position: "absolute", bottom: 20, left: 30, borderRadius: 15, paddingVertical: 10, paddingHorizontal: 15, backgroundColor: COLORS.transparentLightGray }}>
                    <Text style={{ color: COLORS.black, ...FONTS.h3 }}>{item.price.toFixed(2)}</Text>
                </View>
            </View>
        </TouchableOpacity>
    }
    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={productList}
                renderItem={renderCard}
                keyExtractor={item => item.productId}
            />
        </View>
    )
}


const RenderPromotionCard = () => {
    return (
        <View
            style={[
                styles.shadow,
                {
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.radius,
                    height: 110,
                    borderRadius: 20,
                    backgroundColor: COLORS.white
                }
            ]}
        >
            <View
                style={{
                    width: 50,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.lightGray3,
                    borderRadius: 20
                }}
            >
                <Image source={images.sofa} resizeMode='contain' style={{ width: "60%", height: '60%' }}></Image>
            </View>
            <View
                style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: 'center' }}
            >
                <Text style={{ color: COLORS.black, ...FONTS.h2 }}>Special Offer</Text>
                <Text style={{ color: COLORS.black, ...FONTS.body3 }}>Adding to your card </Text>
            </View>
            <View style={{marginRight:SIZES.radius,alignItems:'center',justifyContent:'center'}}>
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.primary,
                        justifyContent:'center',
                        alignItems:'center',
                        height:'70%',
                        width:40,
                        borderRadius:10
                    }}
                >
                    <Image 
                        source={icons.chevron}
                        resizeMode="contain"
                        style={{
                            width:'50%',
                            height:'50%'
                        }}
                    ></Image>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const Home = ({ navigation }) => {
    const [tabList, setTabList] = useState([
        {
            id: 0,
            name: "Chair",
            title: "chairs",
            productList: [
                {
                    productId: 1,
                    productName: 'Chair Green Colour',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: 'Chair Peach Colour',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: 'Chair White Colour',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cupboard",
            title: 'cupboards',
            productList: [
                {
                    productId: 4,
                    productName: 'Product 4',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 5,
                    productName: 'Product 5',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 6,
                    productName: 'Product 6',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 2,
            name: "Table",
            title: 'tables',
            productList: [
                {
                    productId: 7,
                    productName: 'Product 7',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 8,
                    productName: 'Product 8',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 9,
                    productName: 'Product 9',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        },
        {
            id: 3,
            name: "Accessories",
            title: 'accessories',
            productList: [
                {
                    productId: 10,
                    productName: 'Product 10',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 11,
                    productName: 'Product 11',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 12,
                    productName: 'Product 12',
                    price: 10.00,
                    image: images.redChair,
                },

            ]
        }
    ])

    const [selectedTab, setSelectedTab] = useState(tabList[0])

    const renderHeader = () => {
        return (
            <View style={{ marginTop: SIZES.padding, paddingHorizontal: SIZES.padding }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 1 }}
                        onPress={() => console.log("Menu")}
                    >
                        <Image source={icons.menu}
                            resizeMode='center'
                            style={{
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}
                        onPress={() => console.log("Menu")}
                    >
                        <Image source={icons.cart}
                            resizeMode='center'
                            style={{
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderTitle = (title) => {
        return (
            <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
                <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>Colection of</Text>
                <Text style={{ color: COLORS.black, ...FONTS.h1 }}>{title}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderTitle("chair")}
            <ScrollableTab tabList={tabList} selectedTab={selectedTab} onPress={(item => setSelectedTab(item))}></ScrollableTab>
            <View style={{ flex: 1 }}>
                <ScrollableCard navigation={navigation} productList={selectedTab.productList}></ScrollableCard>
            </View>
            <View style={{ height: '19%', justifyContent: 'flex-end', marginBottom: 10 }}>
                <RenderPromotionCard></RenderPromotionCard>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: 'black',
        shadowOffset: {
            width: 0, height: 3
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.64,
        elevation: 9
    }

})

export default Home