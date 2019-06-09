import React from 'react'
import { Text, View, Image } from 'react-native'
import Card from './Card'
import CardSection from './CardSection'


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    }
}

const AlbumDetail = (props) => {
    return (
        <Card>
            <CardSection>
                <View>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: props.data.thumbnail_image }} />
                </View>
                <View style={styles.headerContentStyle}>
                    <Text>{props.data.title}</Text>
                    <Text>{props.data.artist}</Text>
                </View>
            </CardSection>
        </Card>
    )
}

export default AlbumDetail