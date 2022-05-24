import * as React from 'react'
import {Text, ScrollView, View, Pressable, TouchableOpacity } from 'react-native'
import { Facebook} from 'react-content-loader'
import Webservice from './webservice'

const HomeItem = () => {
    return <TouchableOpacity onPress={() => Webservice.openBrowser('http://www.baidu.com')}><Text>111</Text></TouchableOpacity>
}
//   
// )

export default () => {
    return (
       <ScrollView>
           {new Array(50).fill(0).map(v=>(
              <HomeItem key={v.name} />
           ))}
       </ScrollView>
    )
}