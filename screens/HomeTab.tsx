import React from "react"
import {View, TouchableOpacity, Text, SafeAreaView, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    item: {
        height: 40,
        width: 80,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    flex: {
        display: "flex",
        flexDirection: "row"
    }
})

export const HomeTab = ({navigation}) => {

    const tabs = [
        {
            label: "drawer",
            isDrawer: true,
            screen: "DrawerScreen"
        },
        {
            label: "home",
            screen: "HomeScreen"
        }, {
            label: "user",
            screen: "UserScreen"
        },
        {
            label: "modal",
            screen: "ModalScreen"
        }
    ]
    return (
        <SafeAreaView>
            <View style={styles.flex}>
            {
                tabs.map(v=>(
                    <TouchableOpacity onPress={() =>v.isDrawer?navigation.toggleDrawer():navigation.navigate(v.screen)}>
                        <View style={styles.item}><Text>{v.label}</Text></View>
                    </TouchableOpacity>
                ))
            }
            </View>
           
            
        </SafeAreaView>
    )
}