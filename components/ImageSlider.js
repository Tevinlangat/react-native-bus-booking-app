import { View, Text, ScrollView,FlatList } from 'react-native'
import React from 'react'
import ImageCard from './ImageCard'

import { cities_images } from '../models/data'

const ImageSlider = ({image,title,id}) => {
    
  return (
   <ScrollView 
   contentContainerStyle={{ paddingHorizontal:2,paddingTop:10 }}
   horizontal
   showsHorizontalScrollIndicator={false} >

    <ImageCard imgUrl={require('../assets/Nairobi.png')} title='Nairobi'/>
    <ImageCard imgUrl={require('../assets/Kisumu.png')} title='Kisumu'/>
    <ImageCard imgUrl={require('../assets/Kericho.png')} title='Kericho'/>
    <ImageCard imgUrl={require('../assets/Mombasa.png')} title='Mombasa'/>
    <ImageCard imgUrl={require('../assets/Machakos.png')} title='Machakos'/>
    <ImageCard imgUrl={require('../assets/Kakamega.png')} title='Kakamega'/>
    <ImageCard imgUrl={require('../assets/Eldoret.png')} title='Eldoret'/>
    <ImageCard imgUrl={require('../assets/Nakuru.png')} title='Nakuru'/>

   </ScrollView>

 

  )
}

export default ImageSlider