import React from "react";
import { Pressable, Text, View, StyleSheet} from "react-native"

export const CustomButton = (props) => {
    return(
        <Pressable onPress={props.onPressFunction} style={({pressed}) =>
            [{backgroundColor: pressed? 'yellow': props.color}, styles.button, {...props.style}]}
            android_ripple={{color:'red'}}>
            <Text style={styles.text}>
            {props.title}
            </Text>
         </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'blue',
        alignItems: 'center',
        borderRadius: 10,
        width: 200,
        height: 50
      },
      text: {
        color: 'black',
        fontSize: 20,
        fontStyle: 'italic',
        margin: 10,
        textAlign: 'center'
      }
})