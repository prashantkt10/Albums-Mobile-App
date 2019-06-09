import React from 'react'
import { Text, TouchableOpacity } from 'react-native'


const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        merginRight: 5,
        borderRadius: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

const Button = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}

export default Button