import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'

const ImageCard = ({imgUrl,title,id}) => {
  return (
    <TouchableOpacity  >
        <Image
        source={imgUrl}
        style={{height:200,width:300,borderRadius:12,marginLeft:2,position:'relative'}}/>
        <Text style={styles.cardText} >{title}</Text>
    </TouchableOpacity>
  )
}


const styles= StyleSheet.create({
    cardText:{
        position:'absolute',
        bottom:1,
        left:1,
        color:'white',
        fontWeight:"bold",
        padding:10,
        fontSize:15
    }
})

export default ImageCard