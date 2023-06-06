import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

export default function AboutCard( { imageUrl,title,paragraph } ) {
  return (
    <View style={styles.card} >
      <View style={styles.imageContainer} >
        <Image
        source = { imageUrl }
        style ={styles.image}
        />
      </View>
      <View style={styles.textContainer} >
        <View>
            <Text style={styles.textTitle} > {title} </Text>
        </View>
        <View style={styles.textParagraphContainer}>
            <Text style={styles.textParagraph} > {paragraph} </Text>
        </View>
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#a4133c',
        borderBottomEndRadius:10,
        marginBottom:4,
        marginHorizontal:4,
        padding:10
    },
    image:{
        objectFit:'cover',
        width: 370,
        height: 200,
        borderRadius:8,
        
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
        flexGrow:1
    
    },
    textTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#22223b'
    },
    textParagraph:{
        color:'#82c0cc'
    },
    textContainer:{},
    textParagraphContainer:{

    }

})

const lorem = 'Lorem ipsum dolor sit amet. Ut voluptatem quod nam repudiandae magnam sed commodi galisum quo laudantium repellendus? Et perferendis veniam ea omnis perferendis qui accusamus voluptatem. Vel distinctio molestiae id beatae officiis ea possimus nesciunt aut provident voluptatem nam voluptas repellat. Est iste saepe ut sequi inventore qui illum dolor qui tenetur optio et placeat maxime hic facilis quod et galisum obcaecati.'