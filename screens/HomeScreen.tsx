import * as React from 'react'
import {Text, ScrollView, View, Pressable, TouchableOpacity, StyleSheet } from 'react-native'
import ContentLoader, { Facebook, Instagram } from 'react-content-loader'
import Webservice from './webservice'
import { SafeAreaView } from 'react-native-safe-area-context'

// const HomeItem = () => {
//     return <Facebook />
//     return <TouchableOpacity onPress={() => Webservice.openBrowser('http://www.baidu.com')}><Text>111</Text></TouchableOpacity>
// }
//   
// )

const styles = StyleSheet.create({
    item: {
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center",
        marginTop: 20,
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#ccc"
    },
    rect1: {
        width: 200,
        height: 16,
        backgroundColor: "#ccc",
        marginTop: 10
    },
    rect2: {
        width: 240,
        height: 16,
        backgroundColor: "#ccc",
        marginTop: 10
    },
    rectContainer: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 16
    }
})

const HomeItem = ()=>{
    return <View style={styles.item}>
        <View style={styles.circle} />
        <View style={styles.rectContainer}>
            <View style={styles.rect1} />
            <View style={styles.rect2} />
            <View style={styles.rect1} />
        </View>
        
    </View>
}

export default () => {
    return (
        <SafeAreaView>
            <ScrollView>
           {/* <HomeItem /> */}
           {/* <ContentLoader /> */}
           <View>
           {new Array(50).fill(0).map(v=>(
              <HomeItem />
           ))}
           </View>
          
       </ScrollView>
        </SafeAreaView>
       
    )
}