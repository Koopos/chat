import * as React from 'react'
import {Text, StyleSheet, View, SafeAreaView} from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding:20,
    },
    circle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#ccc"
    },
    rect1: {
        width: 200,
        height: 20,
        backgroundColor: "#ccc",
        marginTop: 16
    },
    rect2: {
        width: 300,
        height: 20,
        backgroundColor: "#ccc",
        marginTop: 16
    },
})

export default () => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.circle}></View>
                {
                    new Array(4).fill(0).map((v,index) => {
                        return (<View style={styles.rect1} />) 
                    })
                }
                        {
                    new Array(8).fill(0).map((v,index) => {
                        return (<View style={styles.rect2} />) 
                    })
                }
            </View>
        </SafeAreaView>
        
    )
}