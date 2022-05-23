import * as React from 'react'
import {Text, SafeAreaView, View, TouchableOpacity, StyleSheet, useWindowDimensions,} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useUserList from '../hooks/useUserList'

const DrawerItem = ({item, navigation}) => {
    return (
        <TouchableOpacity onPress={() => {navigation.toggleDrawer()}}>
        <View>
        <Text style={{textAlign: "center", lineHeight: 30}}>{item.name}</Text>
    </View>
        </TouchableOpacity>
   
    )
}



const Avatar = () => {
    return (
        <TouchableOpacity>
            <View style={styles.avatar}></View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    avatar: {

        width: 60, 
        height: 60, 
        marginVertical:4,
        borderRadius: 30,
        backgroundColor: "grey",
        marginLeft: 20
    }
})

export default ({navigation}) => {

    const items = useUserList()
    const {height} = useWindowDimensions()
    return (
        <SafeAreaView>
            <View style={{display: "flex", flexDirection: "row"}}>
            <ScrollView>
                    {
                        items.map(v=>(
                            <Avatar key={v.name+'1'} item={v} navigation={navigation} />
                        ))
                    }
                    </ScrollView>
            <ScrollView>
                    {
                        items.map(v=>(
                            <DrawerItem key={v.name} item={v} navigation={navigation} />
                        ))
                    }
                    </ScrollView>
           
            </View>
             
          
           
        </SafeAreaView>
       
    )
}