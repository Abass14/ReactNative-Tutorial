import React from "react";

export const CustomButton = () => {
    return(
        <Pressable onPress={onPressHandler} style={({pressed}) =>
            [{backgroundColor: pressed? 'yellow': 'green'}, styles.button]}
            android_ripple={{color:'red'}}>
            <Text style={styles.text}>
            {isSubmitted? 'Submitted': 'Submit'}
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