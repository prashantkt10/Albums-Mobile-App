import React from 'react'
import { Text, View } from 'react-native'


const styles = {
    headerView: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 2,
        position: 'relative'
    },
    headerText: {
        fontSize: 20
    }
}

const Header = (props) => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{props.headerText}</Text >
        </View>
    )
}


export default Header