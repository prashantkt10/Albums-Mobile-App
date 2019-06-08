import React from 'react'
import { Text, View } from 'react-native'


const styles = {
    headerView: {
        backgroundColor: '#F8F8F8'
    },
    headerText: {
        fontSize: 20
    }
}

const Header = () => {
    return (
        <View style={styles.headerView}>
            <Text style={styles.headerText}> Albums!</Text >
        </View>
    )
}


export default Header