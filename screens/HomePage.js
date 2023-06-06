import { StatusBar } from 'expo-status-bar'
import React, { Component, useState } from 'react'
import { Text, View ,StyleSheet, SafeAreaView, ImageBackground, TouchableOpacity,Alert, Modal } from 'react-native'

import { MaterialCommunityIcons, Entypo,Icon,FontAwesome5 } from '@expo/vector-icons'

import {  useNavigation,NavigationContainer } from '@react-navigation/native';

import { windowWidth,windowHeight } from '../utils/Dimensions'





export default function Home({ navigation }) {
    




   

    const startPressHandler = ()=>{
        navigation.navigate('HomeStack')
    }

   

    return (
      <>
      

      
        <StatusBar
        barStyle = "dark-content" hidden = {false} backgroundColor = "#ce4257" translucent = {true}
        />            
            < ImageBackground
            source={require('../assets/BusImage.png')}
            resizeMode="cover"
            style={styles.imagebackground}
            >
            
                <View style={styles.homeFooter} >
                    <TouchableOpacity style={styles.homeFooterTouch} onPress={startPressHandler} >
                        <Text style={styles.homeFooterText} > Get Started </Text>
                        <FontAwesome5 name="hourglass-start" size={24} color="black" />
                    </TouchableOpacity>
                   
                  
                    
                </View>
               
                

            </ImageBackground>
            
        
      </>  
     
    )
  
}

const styles = StyleSheet.create({
    imagebackground:{
        flex:1,
        justifyContent:'flex-end',
        width:'100%',
        height:'100%',
        objectFit: 'contain'
    },
    homeFooter:{
        borderRadius:30

    },
    homeFooterTouch:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#ce4257',
        borderRadius:30,
        marginBottom:25,
        alignItems:'center',
        marginHorizontal: 20,
        padding:2,
        paddingHorizontal:30

    },
    homeFooterText:{
        color:'#212529',
        padding:10,
        fontWeight:'bold',
        fontSize:15
    },
   
})