import React from "react"
import { StyleSheet, View, Text} from "react-native"

export const Headers = () => {
    return (
        <View style={style.view}>
            <Text style={style.text}>React Native App</Text>
        </View>
    )
}

const style = StyleSheet.create({
    view: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 10
    },
    text: {
        color: 'white',
        fontSize: 30
    }
})