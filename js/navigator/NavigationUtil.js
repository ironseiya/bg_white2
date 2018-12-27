export default class NavigationUtil {

    static goBack(params) {
        const { navigation } = params
        navigation.goBack()
    }

    static resetToHomePage(params) {
        const { navigation } = params
        navigation.navigate("Main")
    }
}