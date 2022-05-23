import * as React from 'react'
import {Text, ScrollView, View} from 'react-native'
import { Facebook} from 'react-content-loader'

const HomeItem = () => {
    return <Text>111</Text>
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