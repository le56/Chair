import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import { COLORS, icons, SIZES, FONTS, images } from './../constants'

const ItemDetail = ({ route, navigation }) => {


    const renderHeader = () => {
        return (
            <View
                style={{
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding
                }}
            >
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}
                    >
                        <Image
                            source={icons.menu}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25
                            }}
                        ></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
                    >
                        <Image
                            source={icons.search}
                            resizeMode='contain'
                            style={{
                                tintColor: COLORS.black,
                                width: 25,
                                height: 25
                            }}
                        ></Image>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }

    function renderinfo() {
        let { ItemInfo } = route.params
        console.log(ItemInfo)
        if (ItemInfo) {
            return (
                <ImageBackground
                    source={ItemInfo.image}
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%' }}
                >
                    {renderHeader()}

                    {/* Product Tag */}
                    <View
                        style={{
                            position: 'absolute',
                            top: '45%',
                            left: '15%',
                            borderRadius: 80,
                            backgroundColor: COLORS.transparentLightGray1,
                            width: 45,
                            height: 45,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <View style={{ borderRadius: 20, backgroundColor: COLORS.blue, height: 10, width: 10 }}></View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            top: '43%',
                            left: '30%',
                            padding: SIZES.radius * 1.5,
                            backgroundColor: COLORS.transparentLightGray1,
                            width: '50%',
                            borderRadius: 10,
                            flexDirection: 'row'
                        }}
                    >
                        <View style={{ flex: 2 }}>
                            <Text style={{ color: COLORS.darkGray, ...FONTS.h3 }}>{ItemInfo.productName}</Text>
                        </View>
                        <View style={{ flex: 1.5, alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                            <Text style={{ color: COLORS.darkGreen, ...FONTS.h3 }}>{ItemInfo.price.toFixed(2)}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: '20%',
                            left: SIZES.padding,
                            right: SIZES.padding
                        }}
                    >
                        <Text style={{ color: COLORS.lightGray2, ...FONTS.body2 }}>Funiture</Text>
                        <Text style={{ marginTop: SIZES.radius, color: COLORS.white, ...FONTS.h1 }}>{ItemInfo.productName}</Text>
                    </View>
                </ImageBackground>
            )
        }
    }

    const renderFooter = () => {
        return (
            <View
                style={{ position: 'absolute', left: SIZES.padding, right: SIZES.padding, flexDirection: 'row', height: 70, backgroundColor: COLORS.white, bottom: '5%', borderRadius: 35 }}
            >
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image source={icons.dashboard}
                            style={{
                                tintColor: COLORS.gray,
                                width: 25,
                                height: 25
                            }}
                        >
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50,
                            width: 50,
                            borderRadius: 10,
                            backgroundColor: COLORS.primary
                        }}
                        onPress={() => console.log("Add on clicked")}
                    >
                        <Image
                            source={icons.plus}
                            style={{
                                tintColor: COLORS.white,
                                height: 20,
                                width: 20
                            }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => console.log("Profile on clicked")}
                    >
                        <Image
                            source={icons.user}
                            style={{
                                tintColor: COLORS.gray,
                                width: 25,
                                height: 25
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            {renderinfo()}
            {renderFooter()}
        </View>
    )
}
export default ItemDetail