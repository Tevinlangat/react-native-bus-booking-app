import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native'
import React,{ useEffect, useState } from 'react'
import { MaterialCommunityIcons, Entypo,Icon,FontAwesome,MaterialIcons } from '@expo/vector-icons'


const Seats = ({seatA,seatB,seatC,seatD}) => {

    const [selectSeat1,setSelectSeat1]=useState(false)
    const [selectSeat2,setSelectSeat2]=useState(false)
    const [selectSeat3,setSelectSeat3]=useState(false)
    const [selectSeat4,setSelectSeat4]=useState(false)


    const showToast = () => {
        ToastAndroid.show(' Short press to select a seat and Long press to unselect a seat', ToastAndroid.SHORT);
      };

    useEffect(()=>{
        showToast()
    },[])

  return (
    <View style={styles.busView}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{marginRight:30}} onPress={()=>setSelectSeat1(true)} onLongPress={()=>setSelectSeat1(false)} >
                <MaterialIcons name="event-seat" size={32} color={selectSeat1==false?"#19A7CE":"#22223b"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setSelectSeat2(true)} onLongPress={()=>setSelectSeat2(false)} >
                <MaterialIcons name="event-seat" size={32} color={selectSeat2==false?"#19A7CE":"#22223b"} />
                </TouchableOpacity>
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity style={{marginRight:30}} onPress={()=>setSelectSeat3(true)} onLongPress={()=>setSelectSeat3(false)} >
                <MaterialIcons name="event-seat" size={32} color={selectSeat3==false?"#19A7CE":"#22223b"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setSelectSeat4(true)} onLongPress={()=>setSelectSeat4(false)} >
                <MaterialIcons name="event-seat" size={32} color={selectSeat4==false?"#19A7CE":"#22223b"} />
                </TouchableOpacity>
                
         </View>
         
    </View>
  )
}

export default Seats

const styles = StyleSheet.create({
    busView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
})