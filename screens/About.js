import { View, Text,ScrollView,StyleSheet,Alert } from 'react-native'
import React from 'react'

import Card from '../components/AboutCard'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function About() {
  return (
    <>
    <ScrollView style={{backgroundColor:'#001219'}} >
     < Card imageUrl={require('../assets/Coach.png')} title=' Comfort Luxury Coach ' paragraph={lorem} />
     < Card imageUrl={require('../assets/BusSeats.png')} title=' Travel Efficiency ' paragraph={lorem} />
     < Card imageUrl={require('../assets/highway.png')} title=' Routes ' paragraph={lorem} />
    </ScrollView>
    {/* <View style ={styles.footer} >
        <Icon.Button name="facebook" backgroundColor="#48bfe3" size={19} onPress={()=>{Alert.alert("You are directed to our Facebook Page")}}>

        </Icon.Button>
        <Icon.Button name="twitter" backgroundColor="#3358de" size={19} onPress={()=>{Alert.alert("You are directed to our twitter Page")}}>

        </Icon.Button>
        <Icon.Button name="instagram" backgroundColor="#ff0054" size={19} onPress={()=>{Alert.alert("You are directed to our instagram Page")}}>

        </Icon.Button>
        </View> */}
    </>
    
  )
}

const styles = StyleSheet.create({
    footer:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:15,
        backgroundColor:'#000814'
    }
})

const lorem = 'Lorem ipsum dolor sit amet. Ut voluptatem quod nam repudiandae magnam sed commodi galisum quo laudantium repellendus? Et perferendis veniam ea omnis perferendis qui accusamus voluptatem. Vel distinctio molestiae id beatae officiis ea possimus nesciunt aut provident voluptatem nam voluptas repellat. Est iste saepe ut sequi inventore qui illum dolor qui tenetur optio et placeat maxime hic facilis quod et galisum obcaecati.'