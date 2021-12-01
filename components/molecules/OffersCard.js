import React from 'react'
import { StyleSheet, Image, View } from 'react-native';
import Text from '../atoms/Text';
import Card from '../atoms/Card';
import Button from '../atoms/Button'
import Heading from '../atoms/Heading'

const OffersCard = (props) => {
    return (
        <Card bg='white' style={{marginBottom: 20}}>
            <Image style={styles.image} source={{uri: 'https://static-cse.canva.com/blob/651733/posters.jpg'}} />
            <Heading>{props.title}</Heading>
            <Text>{props.description}</Text>
            <View style={styles.btnTab}>
                <View style={{width: '45%', height: 50}}>
                    <Button outline='black' color='black' style={styles.btn}>Share</Button>
                </View>
                <View style={{width: '45%', height: 50}}>
                    <Button outline='black' color='black' style={styles.btn}>Broadcast</Button>
                </View>
            </View>
        </Card>
    )
}

export default OffersCard

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 100
    },
    btnTab: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        height: 40
    },
    btn: {
       borderWidth:1,
       borderColor:'#333',
       alignItems:'center',
       justifyContent:'center',
       borderRadius:5,
    }
})
