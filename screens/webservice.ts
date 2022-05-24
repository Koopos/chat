import { Platform } from "react-native"
import * as WebBrowser from 'expo-web-browser'
import { Linking } from "react-native"
// import SafariView from 'react-native-safari-view'

export default class Webservice {
    static openBrowser(url) {
        return WebBrowser.openBrowserAsync(url)
    }

    // private static openInAppUrl = (url) => {
    //     return SafariView.isAvailable().then(() => {SafariView.show({url})})
    // }

    // private static openUrl = (url) => {
    //     return Linking.openURL(url)
    // }
}